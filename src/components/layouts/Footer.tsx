'use client';
import { motion } from 'motion/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border-t border-[#EFEFF9] mt-auto"
    >
      <div className="h-16 sm:h-20 flex items-center justify-center px-4 sm:px-6 max-w-7xl mx-auto">
        <p className="font-medium text-xs sm:text-sm text-[#828EA3] text-center">
          ©{currentYear} Albina Yildiz.
          <span className="hidden sm:inline mx-2">|</span>
          <br className="sm:hidden" />
          <span className="text-[10px] sm:text-xs text-[#9BD95C]">
            All rights reserved.
          </span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
