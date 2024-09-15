import { FC } from 'react';
import { MeterModelType } from '../model/meterModel';
import { MetersTableRow } from './metersTableRow';

interface MetersTableRowsListProps {
  meters: MeterModelType[];
  offset: number;
}

export const MetersTableRowsList: FC<MetersTableRowsListProps> = ({
  meters,
  offset,
}) => {
  return (
    <>
      {meters.map((datum, index) => (
        <MetersTableRow
          key={datum.id}
          meter={datum}
          offset={offset}
          position={offset + 1 + index}
        />
      ))}
    </>
  );
};
