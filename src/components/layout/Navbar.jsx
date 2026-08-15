import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = ['home', 'work', 'research', 'about', 'activity'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Primary navigation: Work, Research, About, Activity
  const navLinks = [
    { label: 'Work', href: '/#work', id: 'work' },
    { label: 'Research', href: '/#research', id: 'research' },
    { label: 'About', href: '/#about', id: 'about' },
    { label: 'Activity', href: '/#activity', id: 'activity' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
      isScrolled 
        ? 'bg-[#09090b]/94 backdrop-blur-md border-b border-zinc-800/80 py-5 sm:py-6 shadow-sm' 
        : 'bg-transparent py-7 sm:py-8'
    }`}>
      <div className="personal-container flex items-center justify-between">
        
        {/* Name Brand */}
        <Link 
          to="/" 
          className="text-zinc-100 font-semibold tracking-tight text-lg sm:text-xl hover:text-white transition-colors"
        >
          Varun Chinthanippu
        </Link>

        {/* Desktop Navigation Links (15.5px typography) */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-10 text-[15.5px] font-normal">
          {navLinks.map((item) => {
            const isActive = isHomePage && activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors py-1 relative ${
                  isActive 
                    ? 'text-white font-medium' 
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-zinc-300 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-zinc-800 px-7 py-6 mt-3 shadow-xl">
          <div className="flex flex-col gap-4 text-base">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-white py-1.5 text-[16px]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
