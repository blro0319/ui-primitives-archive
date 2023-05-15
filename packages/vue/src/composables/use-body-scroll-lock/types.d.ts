declare global {
  interface Window {
    __useBodyScroll: {
      count: number;
      originStyles: {
        overflow: string;
        paddingRight: string;
      };
    };
  }
}

export {};
