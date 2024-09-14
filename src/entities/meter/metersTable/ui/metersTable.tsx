import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';
import { WithScrollArea } from '@/shared/withScrollArea';
import { ReactNode, useRef } from 'react';
import { MeterModelType } from '../model/meterModel';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/shared/hooks/useStore';
import { MetersTableCellList } from './metersTableCellList';
import { MetersTableSkeleton } from './metersTableSkeleton';
import { MetersTableHeadList } from './metersTableHeadList';
import ReactPaginate from 'react-paginate';
import { MetersTableError } from './metersTableError';

interface MetersTableProps {
  data: MeterModelType[];
  columns: string[];
  footerSlot?: ReactNode;
}

export const MetersTable = observer(
  ({ columns, footerSlot }: MetersTableProps) => {
    let offsetRef = useRef<number>(0);

    const { meters } = useStore();
    const { data, isLoading, error, getMeters } = meters;

    const handlePageClick = (event: { selected: number }) => {
      offsetRef.current = (event.selected * 20) % (data?.count || 1);
      getMeters(offsetRef.current);
    };

    return (
      <div className="border border-[#E0E5EB] rounded-xl overflow-hidden bg-white">
        <WithScrollArea
          className="h-[680px] relative pb-[48px]"
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
                <MetersTableCellList
                  offset={offsetRef.current}
                  meters={data.results}
                />
              )}
            </TableBody>
            {footerSlot && (
              <TableFooter className="absolute bottom-0 left-0 right-0 h-12 z-50 flex justify-end items-center">
                <TableRow>
                  <TableCell>
                    <ReactPaginate
                      className="flex flex-row gap-2"
                      previousClassName="hidden"
                      nextClassName="hidden"
                      pageLinkClassName="w-8 h-8 font-normal flex justify-center items-center rounded-md bg-white border border-neutral-300 text-neutral-800"
                      activeLinkClassName="bg-neutral-100"
                      breakLinkClassName="w-8 h-8 font-normal flex justify-center items-center rounded-md bg-white border border-neutral-300 text-neutral-800"
                      pageCount={
                        (data?.count && Math.ceil(data.count / 20)) || 1
                      }
                      onPageChange={handlePageClick}
                    />
                  </TableCell>
                </TableRow>
              </TableFooter>
            )}
          </Table>
        </WithScrollArea>
      </div>
    );
  }
);
