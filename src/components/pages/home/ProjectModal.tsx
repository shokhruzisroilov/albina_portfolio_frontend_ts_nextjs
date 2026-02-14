'use client';
import { GraduationHat } from '@/assets/icons';
import { PortfolioItem } from '@/types';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioItem;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && mounted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, mounted]);

  const handleViewProject = () => {
    if (data.link) {
      window.open(data.link, '_blank', 'noopener,noreferrer');
    } else if (data.slug) {
      router.push(`/portfolio/${data.slug}`);
      onClose();
    }
  };

  // Keyboard event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Animation variants
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const modalVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const closeButtonVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 90,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    }),
  };

  const skillVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.05,
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    }),
    hover: {
      scale: 1.05,
      backgroundColor: '#9BD95C',
      color: '#ffffff',
      borderColor: '#9BD95C',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.02,
      backgroundColor: '#8BC84C',
      boxShadow: '0 10px 25px -5px rgba(155, 217, 92, 0.4)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { x: -10, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.05,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    }),
  };

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl max-w-4xl w-full max-h-[95vh] sm:max-h-[92vh] md:max-h-[90vh] overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <motion.button
                variants={closeButtonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                onClick={onClose}
                className="absolute top-2 sm:top-3 md:top-4 lg:top-5 right-2 sm:right-3 md:right-4 lg:right-5 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-black/20 backdrop-blur-[26px] rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-black/30 transition-colors z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <IoClose className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </motion.button>

              {/* Scrollable Content */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="overflow-y-auto max-h-[95vh] sm:max-h-[92vh] md:max-h-[90vh] custom-scrollbar"
              >
                {/* Image */}
                <motion.div
                  variants={imageVariants}
                  className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80"
                >
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 1200px"
                  />

                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-leaner-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                  {/* Header with Icon */}
                  <motion.div
                    variants={headerVariants}
                    className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-3.5 md:mb-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#9BD95C] flex items-center justify-center shrink-0"
                    >
                      <GraduationHat />
                    </motion.div>
                    <div>
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#36364A] line-clamp-2">
                        {data.title}
                      </h2>
                      <p className="text-[10px] sm:text-xs md:text-sm text-[#818498] mt-0.5 sm:mt-1 line-clamp-1">
                        {data.subtitle}
                      </p>
                    </div>
                  </motion.div>

                  {/* The Problem */}
                  {data.problem && (
                    <motion.div
                      custom={0}
                      variants={sectionVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-[#FFF9E6] rounded-xl sm:rounded-2xl p-3 sm:p-3.5 md:p-4 mb-2 sm:mb-3 md:mb-4"
                    >
                      <h3 className="text-xs sm:text-sm font-semibold text-[#36364A] mb-1.5 sm:mb-2">
                        The Problem
                      </h3>
                      <p className="text-xs sm:text-sm text-[#364057] leading-relaxed">
                        {data.problem}
                      </p>
                    </motion.div>
                  )}

                  {/* My Approach */}
                  {data.approach && (
                    <motion.div
                      custom={1}
                      variants={sectionVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-[#E8F5E9] rounded-xl sm:rounded-2xl p-3 sm:p-3.5 md:p-4 mb-2 sm:mb-3 md:mb-4"
                    >
                      <h3 className="text-xs sm:text-sm font-semibold text-[#36364A] mb-1.5 sm:mb-2">
                        My Approach
                      </h3>
                      <p className="text-xs sm:text-sm text-[#364057] leading-relaxed">
                        {data.approach}
                      </p>
                    </motion.div>
                  )}

                  {/* The Solution */}
                  {data.solution && (
                    <motion.div
                      custom={2}
                      variants={sectionVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-[#FFF9E6] rounded-xl sm:rounded-2xl p-3 sm:p-3.5 md:p-4 mb-2 sm:mb-3 md:mb-4"
                    >
                      <h3 className="text-xs sm:text-sm font-semibold text-[#36364A] mb-1.5 sm:mb-2">
                        The Solution
                      </h3>
                      <p className="text-xs sm:text-sm text-[#364057] leading-relaxed">
                        {data.solution}
                      </p>
                    </motion.div>
                  )}

                  {/* Key Outcomes */}
                  {data.outcomes && data.outcomes.length > 0 && (
                    <motion.div
                      custom={3}
                      variants={sectionVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 md:p-4 mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                    >
                      <h3 className="text-xs sm:text-sm font-semibold text-[#36364A] mb-2 sm:mb-2.5 md:mb-3">
                        Key Outcomes
                      </h3>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {data.outcomes.map((outcome, index) => (
                          <motion.li
                            key={index}
                            custom={index}
                            variants={listItemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ x: 5 }}
                            className="text-xs sm:text-sm text-[#364057] flex items-start group"
                          >
                            <motion.span
                              whileHover={{ scale: 1.2 }}
                              className="text-[#9BD95C] mr-1.5 sm:mr-2 text-base sm:text-lg leading-none"
                            >
                              •
                            </motion.span>
                            <span className="flex-1 leading-relaxed">
                              {outcome}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Skills */}
                  {data.skills && data.skills.length > 0 && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                    >
                      {data.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          custom={i}
                          variants={skillVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                          className="bg-[#EFEFF9] border-2 border-[#9BD95C] rounded-full py-1.5 sm:py-2 px-2.5 sm:px-3 md:px-4 text-[10px] sm:text-xs text-[#364057] cursor-default transition-colors"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}

                  {/* View Project Button */}
                  <motion.button
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleViewProject}
                    className="w-full bg-[#9BD95C] text-white py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-[#8BC84C] transition-colors cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2"
                  >
                    <span>View Project</span>
                    {data.link && (
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          ease: 'easeInOut',
                        }}
                      >
                        <HiExternalLink className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </motion.div>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
