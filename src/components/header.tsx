"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-0xl mx-auto px-2 sm:px-4 md:px-6 lg:px-24">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold ml-4" onClick={closeMenu}>
              FD Gravoprodukt
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-8 mx-4">
            {/* Usluge Dropdown */}
            <div className="relative group">
              <div className="text-xl text-white hover:text-gray-400 focus:outline-none cursor-pointer">
                Usluge
              </div>
              <div className="absolute left-0 mt-0 w-56 group-hover:block bg-white text-black rounded-md shadow-lg z-10 hidden">
                <Link href="/lasersko-graviranje" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md text-lg" onClick={closeMenu}>
                  Lasersko graviranje
                </Link>
                <Link href="/lasersko-secenje" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md text-lg" onClick={closeMenu}>
                  Lasersko sečenje
                </Link>
                <Link href="/izrada-proizvoda" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md text-lg" onClick={closeMenu}>
                  Izrada proizvoda
                </Link>
                <Link href="/cnc-graviranje" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md text-lg" onClick={closeMenu}>
                  CNC graviranje i sečenje
                </Link>
                <Link href="/fiberlaser-graviranje" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md text-lg" onClick={closeMenu}>
                  Fiber laser graviranje
                </Link>
              </div>
            </div>
            <Link href="/o-nama" className="text-xl hover:text-gray-400" onClick={closeMenu}>
              O nama
            </Link>
            <Link href="/kontakt" className="text-xl hover:text-gray-400" onClick={closeMenu}>
              Kontakt
            </Link>
          </div>
          {/* Hamburger icon for mobile */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            {/* Mobile menu */}
            {isOpen && (
              <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg z-10">
                <div className="flex flex-col space-y-2 px-4 py-2">
                  <div className="relative group">
                    <div className="text-lg text-white hover:text-gray-400 cursor-pointer">
                      Usluge
                    </div>
                    <div className="absolute left-0 mt-0 w-56 bg-white text-black rounded-md shadow-lg z-10 hidden group-hover:block">
                      <Link href="/lasersko-graviranje" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md text-lg" onClick={closeMenu}>
                        Lasersko graviranje
                      </Link>
                      <Link href="/lasersko-secenje" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md text-lg" onClick={closeMenu}>
                        Lasersko sečenje
                      </Link>
                      <Link href="/izrada-proizvoda" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md text-lg" onClick={closeMenu}>
                        Izrada proizvoda
                      </Link>
                      <Link href="/cnc-graviranje" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md text-lg" onClick={closeMenu}>
                        CNC graviranje i sečenje
                      </Link>
                      <Link href="/fiberlaser-graviranje" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md text-lg" onClick={closeMenu}>
                        Fiber laser graviranje
                      </Link>
                    </div>
                  </div>
                  <Link href="/o-nama" className="block text-lg hover:text-gray-400" onClick={closeMenu}>
                    O nama
                  </Link>
                  <Link href="/kontakt" className="block text-lg hover:text-gray-400" onClick={closeMenu}>
                    Kontakt
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
