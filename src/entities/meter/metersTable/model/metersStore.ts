import { cast, flow, t } from 'mobx-state-tree';
import {
  AreaModel,
  AreaModelType,
  MetersResponceModel,
  MetersResponceModelType,
} from './meterModel';
import { api } from '@/shared/lib/api';
import { AxiosError, AxiosResponse } from 'axios';
import { LIMIT } from '../utils/constant';

export const MetersStore = t
  .model('MetersStore', {
    data: t.maybe(MetersResponceModel),
    areas: t.map(AreaModel),
    isLoading: t.optional(t.boolean, false),
    error: t.maybeNull(t.string),
  })
  .actions((self) => ({
    getMeters: flow(function* (offset: number = 0, limit: number = LIMIT) {
      self.isLoading = true;
      self.error = null;

      try {
        const responce: AxiosResponse<MetersResponceModelType> =
          yield api.get<MetersResponceModelType>(
            `meters/?limit=${limit}&offset=${offset}`
          );

        const data = responce.data;
        self.data = cast(data);
      } catch (error) {
        self.error = (error as AxiosError).message;
      } finally {
        self.isLoading = false;
      }
    }),
    deleteMeter: flow(function* (meterid: string) {
      self.isLoading = true;
      self.error = null;

      try {
        yield api.delete<MetersResponceModelType>(`meters/${meterid}/`);
      } catch (error) {
        self.error = (error as AxiosError).message;
      } finally {
        self.isLoading = false;
      }
    }),
    fetchAddresses: flow(function* () {
      const addressIds = self.data?.results
        .map((meter) => meter.area.id)
        .filter((id) => id != null);

      const uniqueAddressIds = [...new Set(addressIds)];

      for (const id of uniqueAddressIds) {
        if (!self.areas.has(id)) {
          try {
            const response: AxiosResponse<AreaModelType> = yield api.get(
              `areas/${id}`
            );
            self.areas.put(response.data);
          } catch (error) {
            self.error = (error as AxiosError).message;
          }
        }
      }
    }),
    afterCreate() {
      this.getMeters().then(() => this.fetchAddresses());
    },
    fetchAllMeterData(offset: number) {
      this.getMeters(offset).then(() => this.fetchAddresses());
    },
  }));
