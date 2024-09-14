import { createContext } from 'react';
import { RootStore } from './rootStore';

export const store: RootStoreType = RootStore.create({});
export const StoreContext = createContext<RootStoreType>({} as RootStoreType);

export type StoreContextType = typeof StoreContext;
