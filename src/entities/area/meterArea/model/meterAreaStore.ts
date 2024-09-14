import { cast, flow, t } from 'mobx-state-tree';
import { AreaModel, AreaModelType } from './meterAreaModel';
import { AxiosError, AxiosResponse } from 'axios';
import { api } from '@/shared/lib/api';

export const MetersAreaStore = t
  .model('MetersAreaStore', {
    data: t.maybe(t.array(AreaModel)),
    isLoading: t.optional(t.boolean, false),
    error: t.maybeNull(t.string),
  })
  .actions((self) => ({
    getMetersArea: flow(function* (areaid: string[]) {
      self.isLoading = true;
      self.error = null;
      const resAdres = [];
      try {
        for (let i = 0; i < areaid.length; i++) {
          const res: AxiosResponse<AreaModelType> =
            yield api.get<AreaModelType>(`areas/${areaid[i]}`);
          resAdres.push(res.data);
        }
        self.data = cast(resAdres);
      } catch (error) {
        self.error = (error as AxiosError).message;
      } finally {
        self.isLoading = false;
      }
    }),
  }));
