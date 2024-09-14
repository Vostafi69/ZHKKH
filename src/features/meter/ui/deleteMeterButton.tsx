import { useStore } from '@/shared/hooks/useStore';
import { Button } from '@/shared/ui/button';
import { Trash2 } from 'lucide-react';
import { FC, PropsWithChildren } from 'react';

interface DeleteMeterButtonProps extends PropsWithChildren {
  className?: string;
  meterId: string;
  currentOffset: number;
}

export const DeleteMeterButton: FC<DeleteMeterButtonProps> = ({
  className,
  meterId,
  currentOffset = 0,
  children,
}) => {
  const { meters } = useStore();

  const handleClick = (meterId: string, currentOffset: number) => {
    meters.deleteMeter(meterId).then(() => meters.getMeters(currentOffset));
  };

  return (
    <Button
      className={className}
      variant={'destructive'}
      size={'icon'}
      onClick={() => handleClick(meterId, currentOffset)}
    >
      {children || <Trash2 className="w-4 h-4" color="#C53030" />}
    </Button>
  );
};
