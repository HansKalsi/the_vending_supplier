import React, { createContext } from 'react';

export const CartBasketContext = createContext<any>([]);

export const CurrentPageContext = createContext<any>({
  currentPage: '',
  setCurrentPage: () => {},
});
