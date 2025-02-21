import Cart from './Cart';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-primary text-xl md:text-3xl uppercase font-bold font-bebas-neue">Nekotastic Shop 😼</h1>
        </Link>

        <Cart />
      </nav>
    </header>
  );
};

export default NavBar;
