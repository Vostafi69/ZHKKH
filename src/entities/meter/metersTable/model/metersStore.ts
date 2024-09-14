import { cast, flow, t } from 'mobx-state-tree';
import { MetersResponceModel, MetersResponceModelType } from './meterModel';
import { api } from '@/shared/lib/api';
import { AxiosError, AxiosResponse } from 'axios';

export const MetersStore = t
  .model('MetersStore', {
    data: t.maybe(MetersResponceModel),
    isLoading: t.optional(t.boolean, false),
    error: t.maybeNull(t.string),
  })
  .actions((self) => ({
    getMeters: flow(function* (offset: number = 0, limit: number = 20) {
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
    afterCreate() {
      this.getMeters();
    },
  }));
