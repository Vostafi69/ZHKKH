declare global {
  declare type RootStoreType =
    import('./src/app/store/rootStore').RootStoreType;
}

export {};
