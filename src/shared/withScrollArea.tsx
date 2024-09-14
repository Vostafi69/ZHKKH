import { FC, PropsWithChildren } from 'react';
import { ScrollArea } from './ui/scrollArea';
import { ScrollAreaProps } from '@radix-ui/react-scroll-area';

interface WithScrollAreaProps extends PropsWithChildren, ScrollAreaProps {
  scrollBarClass?: string;
}

export const WithScrollArea: FC<WithScrollAreaProps> = ({
  children,
  scrollBarClass,
  ...props
}) => {
  return (
    <ScrollArea {...props} scrollBarClass={scrollBarClass}>
      {children}
    </ScrollArea>
  );
};
