import Cart from './Cart';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-primary text-xl md:text-3xl uppercase font-bold font-bebas-neue">Nekotastic Shop</h1>
            <Image src="/cat_icon.png" alt="pixel cat icon" width={50} height={50} />
          </div>
        </Link>

        <Cart />
      </nav>
    </header>
  );
};

export default NavBar;
