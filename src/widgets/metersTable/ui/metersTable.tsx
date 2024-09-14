import { MetersTable } from '@/entities';
import { FC } from 'react';

const columns = [
  '№',
  'Тип',
  'Дата установки',
  'Автоматический',
  'Текущие показания',
  'Адрес',
  'Примечания',
  '',
];

export const WaterMetersTable: FC = () => {
  return (
    <MetersTable data={[]} columns={columns} footerSlot={<div>Footer</div>} />
  );
};
