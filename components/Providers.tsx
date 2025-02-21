'use client';

import { FC, ReactNode } from 'react';

import CartProvider from '@/context/CartProvider';

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
