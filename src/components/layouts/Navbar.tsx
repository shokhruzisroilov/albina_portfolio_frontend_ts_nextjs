'use client';

import { LinkedInIcon } from '@/assets/icons';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'cv', 'portfolio'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section: string) => {
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 z-50 right-0 w-full px-4 sm:px-6 py-4 sm:py-6"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="max-w-4xl mx-auto border-2 border-[#9BD95C] rounded-full px-4 sm:px-6 py-3 sm:py-5 bg-white/80 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#EFEFF9]"
          >
            <svg
              className="w-6 h-6 text-[#2C2550]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Empty Space */}
          <div className="hidden lg:block w-25"></div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 bg-[#EFEFF9] rounded-full p-1">
            {['Home', 'About', 'CV', 'Portfolio'].map((item, i) => {
              const section = item.toLowerCase().replace(' ', '');
              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-full ${
                    activeSection === section
                      ? 'bg-white shadow-md'
                      : 'hover:bg-white/50'
                  }`}
                >
                  <a
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(section);
                    }}
                    className={`block px-4 xl:px-6 py-2.5 font-medium text-sm xl:text-base whitespace-nowrap ${
                      activeSection === section
                        ? 'text-[#2C2550]'
                        : 'text-[#2C2550]/60'
                    }`}
                  >
                    {item}
                  </a>
                </motion.li>
              );
            })}
          </ul>

          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com/in/albina-hartner-yildiz-7595007b/"
            target="_blank"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#9BD95C',
              borderColor: '#9BD95C',
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white border-2 border-[#9BD95C] shrink-0"
          >
            <LinkedInIcon />
            <span className="hidden sm:inline font-semibold text-sm text-[#2C2550]">
              LinkedIn
            </span>
          </motion.a>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute left-4 right-4 mt-4 bg-white border-2 border-[#9BD95C] rounded-2xl p-4 shadow-lg"
          >
            <ul className="flex flex-col gap-2">
              {['Home', 'About', 'CV', 'Portfolio'].map((item) => {
                const section = item.toLowerCase().replace(' ', '');
                return (
                  <li key={item}>
                    <a
                      href={`#${section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(section);
                      }}
                      className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                        activeSection === section
                          ? 'bg-[#EFEFF9] text-[#2C2550]'
                          : 'text-[#2C2550]/60 hover:bg-[#EFEFF9]/50'
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
