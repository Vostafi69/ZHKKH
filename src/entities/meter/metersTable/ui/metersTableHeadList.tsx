import { TableHead, TableRow } from '@/shared/ui/table';
import { memo } from 'react';

interface MetersTableHeadListProps {
  columns: string[];
}

export const MetersTableHeadList = memo(
  ({ columns }: MetersTableHeadListProps) => {
    return (
      <TableRow>
        {columns.map((columnName, index) => (
          <TableHead
            className={index === columns.length - 1 ? 'w-16' : ''}
            key={index}
          >
            {columnName}
          </TableHead>
        ))}
      </TableRow>
    );
  }
);
