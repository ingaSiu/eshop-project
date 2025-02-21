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

const Cart = () => {
  const { items: cartItems, removeFromCart, clearCart, countTotalPrice } = useCart();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-white">Meowjestic Cart 😻</SheetTitle>
          <Separator className="w-full h-0.5 bg-gray-200 mb-2" />
        </SheetHeader>

        {cartItems.map((cartItem) => {
          return (
            <SheetDescription key={cartItem.product.id} className="">
              <div className="flex space-x-4 mb-4 text-white ">
                <Image
                  className="object-cover rounded-md hidden md:block"
                  src={cartItem.product.imageUrl}
                  alt={cartItem.product.title}
                  width={60}
                  height={60}
                />
                <div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-center">{cartItem.product.title}</h3>

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

        <Separator className="w-full h-0.5 bg-gray-200 mb-2" />

        <Button className="bg-inherit w-fit text-white font-semibold" onClick={clearCart}>
          Remove all Products
        </Button>

        <SheetDescription>
          <div className="text-white">
            <h1 className="text-2xl mb-2">Total:</h1>
            <p className="font-semibold text-xl mb-4">
              <span className="text-gray-400 ">The total of your cart is:</span> €{countTotalPrice()}
            </p>
          </div>
        </SheetDescription>

        <SheetClose asChild>
          <Button type="submit" className="w-full text-white font-semibold" asChild>
            <Link href="/">CHECKOUT</Link>
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
