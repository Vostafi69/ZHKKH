import { MeterModelType } from '@/entities';
import { dateToRuString } from '@/shared/helpers/dateToRuString';
import { useStore } from '@/shared/hooks/useStore';
import { TableCell, TableRow } from '@/shared/ui/table';
import { observer } from 'mobx-react-lite';
import { DeleteMeterButton } from './deleteMeterButton';

interface MetersTableRowProps {
  meter: MeterModelType;
  offset: number;
  position: number;
}

export const MetersTableRow = observer(
  ({ meter, offset, position }: MetersTableRowProps) => {
    const { meters } = useStore();
    const { areas } = meters;

    return (
      <TableRow
        key={meter.id}
        className="h-[52px] py-[6px] hover:bg-[#F7F8F9] group"
      >
        <TableCell className="text-center">{position}</TableCell>
        <TableCell>
          <div className="flex flex-row items-center gap-2">
            <img
              className="w-4 h-4"
              src={meter._type_view === 'ГВС' ? 'hwm.svg' : 'cwm.svg'}
              alt={meter._type_view}
            />{' '}
            {meter._type_view}
          </div>
        </TableCell>
        <TableCell>{dateToRuString(meter.installation_date)}</TableCell>
        <TableCell>{meter.is_automatic_view}</TableCell>
        <TableCell>{meter.initial_values[0]}</TableCell>
        <TableCell>{areas.get(meter.area.id)?.house.address}</TableCell>
        <TableCell>{meter.description}</TableCell>
        <TableCell className="flex justify-center items-center h-[inherit]">
          <DeleteMeterButton
            currentOffset={offset}
            meterId={meter.id}
            className="hidden group-hover:flex"
          />
        </TableCell>
      </TableRow>
    );
  }
);
