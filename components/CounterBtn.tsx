'use client';

import { Minus, Plus } from 'lucide-react';

import { Button } from './ui/button';
import { useCart } from '@/context/CartProvider';

interface Props {
  product: Product;
}

const CounterBtn = ({ product }: Props) => {
  const { updateCart, items: cartItems } = useCart();

  if (!product) return null;

  const cartItem = cartItems.find((item) => item.product.id === product.id);
  const count = cartItem ? cartItem.count : 0;

  return (
    <div className="flex items-center gap-3 ">
      <Button className="counter-btn" onClick={() => updateCart(product, -1)}>
        <Minus />
      </Button>
      <p className="font-semibold ">{count}</p>
      <Button className="counter-btn" onClick={() => updateCart(product, 1)} disabled={count >= product.stock}>
        <Plus />
      </Button>
    </div>
  );
};

export default CounterBtn;
