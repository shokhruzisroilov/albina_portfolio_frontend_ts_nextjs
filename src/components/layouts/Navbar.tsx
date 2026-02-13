'use client';

import { LinkedInIcon } from '@/assets/icons';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 z-50 right-0 w-full p-6"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="max-w-4xl mx-auto border-2 border-[#9BD95C] rounded-full p-5 bg-white/80"
      >
        <div className="flex items-center justify-between">
          <div className="w-25 max-xl:hidden"></div>

          <ul className="flex items-center gap-1 bg-[#EFEFF9] rounded-full p-1">
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
                      document.getElementById(section)?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }}
                    className={`block px-6 py-2.5 font-medium ${
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

          <motion.a
            href="https://www.linkedin.com/in/albina-hartner-yildiz-7595007b/"
            target="_blank"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#9BD95C',
              borderColor: '#9BD95C',
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[#9BD95C]"
          >
            <LinkedInIcon />
            <span className="font-semibold text-sm text-[#2C2550]">
              LinkedIn
            </span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
