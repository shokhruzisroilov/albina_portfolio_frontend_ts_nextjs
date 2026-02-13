import { Variants } from 'framer-motion';

// Container variants - staggerChildren bilan ketma-ket chiqish
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Chapdan chiqadigan animatsiya
export const slideLeftVariants: Variants = {
  hidden: { x: -100, opacity: 0, filter: 'blur(8px)' },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

// Pastdan chiqadigan animatsiya
export const slideUpVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

// O'ngdan chiqadigan animatsiya (image uchun)
export const slideRightVariants: Variants = {
  hidden: { x: 100, opacity: 0, scale: 0.9 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
      delay: 0.5,
    },
  },
};

// Podcast section uchun animatsiya
export const podcastVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1 + 0.8,
      duration: 0.5,
    },
  }),
};

// Mouse icon animatsiyasi
export const mouseVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.8,
    },
  },
};
