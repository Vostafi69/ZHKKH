import { Skeleton } from '@/shared/ui/skeleton';
import { TableCell, TableRow } from '@/shared/ui/table';
import { FC } from 'react';

interface MetersTableSkeletonProps {
  cellCount?: number;
  rowCount?: number;
}

export const MetersTableSkeleton: FC<MetersTableSkeletonProps> = ({
  cellCount = 7,
  rowCount = 20,
}) => {
  return (
    <>
      {Array.from({ length: rowCount }).map((_, index) => (
        <TableRow className="h-[52px] py-[6px]" key={index}>
          {Array.from({ length: cellCount }).map((_, key) => (
            <TableCell key={key}>
              <Skeleton className="h-6 z-10" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};
