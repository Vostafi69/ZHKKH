import { StoreContext } from '@/app/store/storeContext';
import { useContext } from 'react';

export const useStore = () => {
  return useContext(StoreContext);
};
