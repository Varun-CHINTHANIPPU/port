import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact 4 primary navigation items: Work, Research, Blogs, Contact
  const navLinks = [
    { label: 'Work', path: '/work' },
    { label: 'Research', path: '/research' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090b]/96 backdrop-blur-md py-6 sm:py-7">
      <div className="personal-container flex items-center justify-between">
        
        {/* Large, Prominent Brand Name */}
        <Link 
          to="/" 
          className="text-white font-extrabold tracking-tight text-2xl sm:text-3xl lg:text-4xl hover:text-zinc-200 transition-colors"
        >
          Varun Chinthanippu
        </Link>

        {/* Desktop Primary Navigation with Larger, Readable Typography */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14 text-[18px] sm:text-[20px] lg:text-[21px] font-semibold">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors py-2 relative ${
                  isActive 
                    ? 'text-white font-bold' 
                    : 'text-zinc-400 hover:text-zinc-100'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-zinc-300 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-zinc-800 px-7 py-8 mt-3 shadow-2xl">
          <div className="flex flex-col gap-5 text-xl">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 text-[20px] transition-colors ${
                    isActive ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
