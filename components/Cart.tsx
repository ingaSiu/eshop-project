'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from './ui/button';
import CounterBtn from './CounterBtn';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@radix-ui/react-separator';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartProvider';

// TODO: use countTotalPrice
const Cart = () => {
  const { items: cartItems, removeFromCart, clearCart } = useCart();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-white">Meowjestic Cart 😻</SheetTitle>
          <Button className="bg-inherit w-fit text-white font-semibold" onClick={clearCart}>
            Remove all Products
          </Button>
        </SheetHeader>

        {cartItems.map((cartItem) => {
          return (
            <SheetDescription key={cartItem.product.id} className="">
              <div className="flex space-x-4 mb-2 text-white">
                <Image
                  className="object-cover rounded-md"
                  src={cartItem.product.imageUrl}
                  alt={cartItem.product.title}
                  width={60}
                  height={60}
                />
                <div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{cartItem.product.title}</h3>

                    <div className="flex justify-between pb-4">
                      <div className="flex text-black-300 text-sm font-semibold space-x-1">
                        <span>{cartItem.count}</span>
                        <span> x </span>
                        <span>{cartItem.count * cartItem.product.price}</span>
                      </div>

                      <button
                        onClick={() => removeFromCart(cartItem.product)}
                        className="text-xs uppercase hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <CounterBtn product={cartItem.product} />
                </div>
              </div>
            </SheetDescription>
          );
        })}

        <Separator className="my-4 bg-orange-600" />

        <SheetDescription></SheetDescription>

        <SheetClose asChild>
          <Button type="submit" className="w-full" asChild>
            <Link href="/">CHECKOUT</Link>
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
