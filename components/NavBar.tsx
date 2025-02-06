import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-orange-500 text-3xl uppercase font-bold font-bebas-neue">Nekotastic Shop 🐱‍🐉</h1>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
