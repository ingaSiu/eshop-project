'use client';

import { Button } from './ui/button';
import { useCart } from '@/context/CartProvider';

interface Props {
  product: Product;
  className?: string;
}

const AddToCartBtn = ({ product, className }: Props) => {
  const { updateCart } = useCart();

  const addToCart = () => {
    updateCart(product, 1);
  };
  return (
    <Button onClick={addToCart} className={className}>
      Add to cart
    </Button>
  );
};

export default AddToCartBtn;
