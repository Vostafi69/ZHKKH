import { FC } from 'react';
import { MeterModelType } from '../model/meterModel';
import { TableCell, TableRow } from '@/shared/ui/table';
import { dateToRuString } from '@/shared/helpers/dateToRuString';
import { DeleteMeterButton } from '@/features';

interface MetersTableCellListProps {
  meters: MeterModelType[];
  offset: number;
}

export const MetersTableCellList: FC<MetersTableCellListProps> = ({
  meters,
  offset,
}) => {
  return (
    <>
      {meters.map((datum, index) => (
        <TableRow
          key={datum.id}
          className="h-[52px] py-[6px] hover:bg-[#F7F8F9] group"
        >
          <TableCell>{index + 1 + offset}</TableCell>
          <TableCell>
            <div className="flex flex-row items-center gap-2">
              <img
                className="w-4 h-4"
                src={datum._type_view === 'ГВС' ? 'hwm.svg' : 'cwm.svg'}
                alt={datum._type_view}
              />{' '}
              {datum._type_view}
            </div>
          </TableCell>
          <TableCell>{dateToRuString(datum.installation_date)}</TableCell>
          <TableCell>{datum.is_automatic_view}</TableCell>
          <TableCell>{datum.initial_values[0]}</TableCell>
          <TableCell>{datum.area.id}</TableCell>
          <TableCell>{datum.description}</TableCell>
          <TableCell className="flex justify-center items-center h-[inherit]">
            <DeleteMeterButton
              currentOffset={offset}
              meterId={datum.id}
              className="hidden group-hover:flex"
            />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
