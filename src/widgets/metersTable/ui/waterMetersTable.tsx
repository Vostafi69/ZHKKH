import { MetersTable } from '@/entities';
import { FC } from 'react';

export const WaterMetersTable: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-neutral-800 font-medium text-[24px] mb-4">
        Список счетчиков
      </h1>
      <MetersTable />
    </div>
  );
};
