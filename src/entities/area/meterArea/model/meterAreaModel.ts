import { Instance, t } from 'mobx-state-tree';

export const AreaModel = t.model('AreaModel', {
  id: t.integer,
  number: t.number,
  str_number: t.string,
  str_number_full: t.string,
  house: t.model({
    address: t.string,
    id: t.identifier,
    fias_addrobjs: t.array(t.string),
  }),
});

export interface AreaModelType extends Instance<typeof AreaModel> {}
