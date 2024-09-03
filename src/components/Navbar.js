'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/fonts.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);

  const toggleDrawer = (open) => (event) => {
    event.stopPropagation();
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setHidden(true);
        setScrollingUp(false);
      } else if (scrollTop < lastScrollTop) {
        setHidden(false);
        setScrollingUp(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Outfit:wght@100..900&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Tint&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playwrite+AU+QLD:wght@100..400&display=swap');
      `}</style>

      {!drawerOpen && (
        <nav
          className={`fixed w-full px-8 py-6 flex items-center justify-between transition-all duration-300 ${
            hidden ? '-translate-y-full' : 'translate-y-0'
          } ${scrollingUp ? 'bg-black text-white' : 'bg-transparent text-white'}`}
          style={{ zIndex: 50 }}
        >
          <div
            className="flex flex-col items-center"
            style={{ fontFamily: 'Playwrite AU QLD, sans-serif', fontWeight: 'bold' }}
          >
            <div style={{ fontSize: '17px' }}>Rob Detailing & Polishing</div>
          </div>

          <div className="md:hidden">
            <button
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="focus:outline-none"
            >
              <Menu className={`mt-1 ${scrollingUp ? 'text-white' : 'text-white'}`} />
            </button>
          </div>

          <div
            className="flex-1 flex space-x-4 hidden md:flex justify-end"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px' }}
          >
            {['SERVICE', 'ABOUT', 'CONTACT', 'BLOG'].map((item) => (
              <a key={item} href="#" className={`hover:text-gray-300 ${scrollingUp ? 'text-white' : 'text-white'}`}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      )}

      {drawerOpen && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-95 transition-opacity duration-300"
          onClick={toggleDrawer(false)}
        >
          <div className="absolute top-5 right-5" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="close"
              onClick={toggleDrawer(false)}
              className="focus:outline-none"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <ul
            className="flex flex-col items-center space-y-8"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {['SERVICE', 'ABOUT', 'CONTACT', 'BLOG'].map((item) => (
              <li key={item}>
                <a href="#" className="text-white hover:text-gray-300">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button className="mt-4 w-40 border border-white rounded-md px-4 py-2 hover:bg-white hover:text-black transition">
                Get Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
