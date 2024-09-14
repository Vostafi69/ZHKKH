import { TableCell, TableRow } from '@/shared/ui/table';
import { FC } from 'react';

interface MetersTableErrorProps {
  errorMessage: string;
}

export const MetersTableError: FC<MetersTableErrorProps> = ({
  errorMessage,
}) => {
  return (
    <TableRow>
      <TableCell>
        <div className="absolute inset-0 z-10 flex items-center justify-center font-medium text-[14px]">
          Ошибка: {errorMessage}
        </div>
      </TableCell>
    </TableRow>
  );
};
