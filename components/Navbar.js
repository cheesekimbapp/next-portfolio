import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-sm z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-transparent' : 'bg-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white dark:text-gray-100">
              Tars Portfolio
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#about" className="text-gray-300 hover:text-white dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-white dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-white dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
              Skills
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ```javascript
                text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-white/10 dark:hover:bg-gray-700"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 p-4 bg-black">
            <Link href="#about" className="text-gray-300 hover:text-white dark:hover:text-gray-100">
              About
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-white dark:hover:text-gray-100">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white dark:hover:text-gray-100">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-white dark:hover:text-gray-100">
              Skills
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white dark:hover:text-gray-100">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}