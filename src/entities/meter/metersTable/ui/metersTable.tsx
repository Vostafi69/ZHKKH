import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';
import { WithScrollArea } from '@/shared/withScrollArea';
import { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/shared/hooks/useStore';
import { MetersTableRowsList } from './metersTableRowsList';
import { MetersTableSkeleton } from './metersTableSkeleton';
import { MetersTableHeadList } from './metersTableHeadList';
import ReactPaginate from 'react-paginate';
import { MetersTableError } from './metersTableError';
import { LIMIT } from '../utils/constant';

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

export const MetersTable = observer(() => {
  const offsetRef = useRef<number>(0);

  const { meters } = useStore();
  const { data, isLoading, error, fetchAllMeterData } = meters;

  const handlePageClick = (event: { selected: number }) => {
    offsetRef.current = (event.selected * LIMIT) % (data?.count || 1);
    fetchAllMeterData(offsetRef.current);
  };

  return (
    <div className="border border-[#E0E5EB] rounded-xl overflow-hidden bg-white h-full">
      <WithScrollArea
        className="h-full relative pb-[48px]"
        scrollBarClass="bg-[#F8F9FA] mt-8 pb-[80px]"
      >
        <Table>
          <TableHeader className="bg-[#F0F3F7] sticky top-0 z-20">
            <MetersTableHeadList columns={columns} />
          </TableHeader>
          <TableBody>
            {isLoading && <MetersTableSkeleton />}
            {!isLoading && error && <MetersTableError errorMessage={error} />}
            {!isLoading && data?.results && (
              <MetersTableRowsList
                offset={offsetRef.current}
                meters={data.results}
              />
            )}
          </TableBody>
          <TableFooter className="absolute bottom-0 left-0 right-0 h-12 z-50 flex justify-end items-center">
            <TableRow>
              <TableCell>
                <ReactPaginate
                  className="flex flex-row gap-2 bg-white"
                  previousClassName="hidden"
                  nextClassName="hidden"
                  pageLinkClassName="w-8 h-8 font-normal flex justify-center items-center rounded-md bg-white border border-neutral-300 text-neutral-800"
                  activeLinkClassName="!bg-neutral-100"
                  breakLinkClassName="w-8 h-8 font-normal flex justify-center items-center rounded-md bg-white border border-neutral-300 text-neutral-800"
                  pageCount={
                    (data?.count && Math.ceil(data.count / LIMIT)) || 1
                  }
                  onPageChange={handlePageClick}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </WithScrollArea>
    </div>
  );
});
