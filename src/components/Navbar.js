'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';  // Ensure you are importing the right icons
import '../styles/fonts.css';

const Navbar = ({ scrollToServices, scrollToContact, scrollToFaq }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);

  // Toggles drawer state between open and close
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
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
          <div style={{ fontSize: '17px', cursor: 'pointer' }}>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Rob Detailing & Polishing
            </a>
          </div>
        </div>

        {/* Toggle Drawer Icon */}
        <div className="md:hidden">
          <button
            aria-label="menu"
            onClick={toggleDrawer}
            className="focus:outline-none"
          >
            {/* Conditionally render Menu or X icon based on drawerOpen */}
            {drawerOpen ? (
              <X className={`mt-1 ${scrollingUp ? 'text-white' : 'text-white'}`} />
            ) : (
              <Menu className={`mt-1 ${scrollingUp ? 'text-white' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Full menu for larger screens */}
        <div
          className="flex-1 flex space-x-4 hidden md:flex justify-end"
          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px' }}
        >
          <a onClick={scrollToServices} className={`hover:text-gray-300 cursor-pointer ${scrollingUp ? 'text-white' : 'text-white'}`}>
            Services
          </a>
          <a onClick={scrollToContact} className={`hover:text-gray-300 cursor-pointer ${scrollingUp ? 'text-white' : 'text-white'}`}>
            Get Quote
          </a>
          <a onClick={scrollToFaq} className={`hover:text-gray-300 cursor-pointer ${scrollingUp ? 'text-white' : 'text-white'}`}>
            FAQ
          </a>
        </div>
      </nav>

      {/* Drawer menu */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-95 transition-opacity duration-300"
          onClick={toggleDrawer} // Close drawer when clicking outside
        >
          {/* <div className="absolute top-5 right-5" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="close"
              onClick={toggleDrawer} // Close drawer when clicking "X"
              className="focus:outline-none"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div> */}

          <ul
            className="flex flex-col items-center space-y-8"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close drawer and scroll when clicking a menu item */}
            <li onClick={() => { scrollToServices(); toggleDrawer(); }}>
              <a className="text-white hover:text-gray-300 cursor-pointer">Services</a>
            </li>
            <li onClick={() => { scrollToContact(); toggleDrawer(); }}>
              <a className="text-white hover:text-gray-300 cursor-pointer">Get Quote</a>
            </li>
            <li onClick={() => { scrollToFaq(); toggleDrawer(); }}>
              <a className="text-white hover:text-gray-300 cursor-pointer">FAQ</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
