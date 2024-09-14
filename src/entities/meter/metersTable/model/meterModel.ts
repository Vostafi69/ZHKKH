import { Instance, t } from 'mobx-state-tree';

export const MeterModel = t
  .model('MeterModel', {
    id: t.identifier,
    _type: t.array(t.string),
    area: t.model({
      id: t.string,
    }),
    is_automatic: t.maybeNull(t.boolean),
    communication: t.string,
    description: t.maybeNull(t.string),
    serial_number: t.string,
    installation_date: t.string,
    brand_name: t.maybeNull(t.string),
    model_name: t.maybeNull(t.string),
    initial_values: t.array(t.number),
  })
  .views((self) => ({
    get is_automatic_view() {
      if (self.is_automatic === null) return 'Неизвестно';

      return self.is_automatic ? 'Да' : 'Нет';
    },
    get _type_view() {
      return self._type[0] === 'ColdWaterAreaMeter' ? 'ХВС' : 'ГВС';
    },
  }));

export const MetersResponceModel = t.model('MetersResponceModel', {
  count: t.optional(t.number, 0),
  next: t.maybeNull(t.string),
  previous: t.maybeNull(t.string),
  results: t.array(MeterModel),
});

export interface MeterModelType extends Instance<typeof MeterModel> {}
export interface MetersResponceModelType
  extends Instance<typeof MetersResponceModel> {}
