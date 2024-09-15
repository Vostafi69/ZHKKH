import { MetersStore } from '@/entities/meter/metersTable/model/metersStore';
import { Instance, t } from 'mobx-state-tree';

export const RootStore = t.model('RootStore', {
  meters: t.optional(MetersStore, {}),
});

export type RootStoreType = Instance<typeof RootStore>;
