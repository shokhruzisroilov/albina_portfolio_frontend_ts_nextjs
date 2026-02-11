'use client';

import { LinkedInIcon } from '@/assets/icons';
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

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 right-0 w-full p-6">
      <div className="max-w-4xl flex items-center justify-between gap-20 mx-auto border border-[#EFEFF9] rounded-full shadow-[0px_2px_12px_0px_#0000000A] p-5 bg-white/80 backdrop-blur-sm">
        <div className="w-25 max-xl:hidden"></div>

        <ul className="flex items-center gap-1 bg-[#EFEFF9] rounded-full p-1">
          <li
            className={`rounded-full transition ${
              activeSection === 'home'
                ? 'bg-white shadow-[0_1.81px_1.81px_0_#FFFFFF14]'
                : 'hover:bg-white hover:shadow-[0_1.81px_1.81px_0_#FFFFFF14]'
            }`}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleClick('home');
              }}
              className={`block px-6 py-2.5 font-medium ${
                activeSection === 'home'
                  ? 'text-[#2C2550]'
                  : 'text-[#2C2550]/60 hover:text-[#2C2550]'
              }`}
            >
              Home
            </a>
          </li>

          <li
            className={`rounded-full transition ${
              activeSection === 'about'
                ? 'bg-white shadow-[0_1.81px_1.81px_0_#FFFFFF14]'
                : 'hover:bg-white hover:shadow-[0_1.81px_1.81px_0_#FFFFFF14]'
            }`}
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleClick('about');
              }}
              className={`block px-6 py-2.5 font-medium ${
                activeSection === 'about'
                  ? 'text-[#2C2550]'
                  : 'text-[#2C2550]/60 hover:text-[#2C2550]'
              }`}
            >
              About me
            </a>
          </li>

          <li
            className={`rounded-full transition ${
              activeSection === 'cv'
                ? 'bg-white shadow-[0_1.81px_1.81px_0_#FFFFFF14]'
                : 'hover:bg-white hover:shadow-[0_1.81px_1.81px_0_#FFFFFF14]'
            }`}
          >
            <a
              href="#cv"
              onClick={(e) => {
                e.preventDefault();
                handleClick('cv');
              }}
              className={`block px-6 py-2.5 font-medium ${
                activeSection === 'cv'
                  ? 'text-[#2C2550]'
                  : 'text-[#2C2550]/60 hover:text-[#2C2550]'
              }`}
            >
              CV
            </a>
          </li>

          <li
            className={`rounded-full transition ${
              activeSection === 'portfolio'
                ? 'bg-white shadow-[0_1.81px_1.81px_0_#FFFFFF14]'
                : 'hover:bg-white hover:shadow-[0_1.81px_1.81px_0_#FFFFFF14]'
            }`}
          >
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleClick('portfolio');
              }}
              className={`block px-6 py-2.5 font-medium ${
                activeSection === 'portfolio'
                  ? 'text-[#2C2550]'
                  : 'text-[#2C2550]/60 hover:text-[#2C2550]'
              }`}
            >
              Portfolio
            </a>
          </li>
        </ul>

        <a
          href="https://www.linkedin.com/in/albina-hartner-yildiz-7595007b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-white transition border-3 border-[#EFEFF9]"
        >
          <LinkedInIcon />
          <span className="font-semibold text-sm text-[#2C2550]">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
