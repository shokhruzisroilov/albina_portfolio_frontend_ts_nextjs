'use client';

import { portfolioData } from '@/constants';
import {
  containerVariants2,
  galleryItemVariants,
  imageVariants,
  itemVariants,
  modalImageVariants,
  modalVariants,
} from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IoArrowBack, IoClose } from 'react-icons/io5';

interface PortfolioDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const resolvedParams = use(params) as { slug: string };
  const project = portfolioData.find(
    (item) => item.slug === resolvedParams.slug
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  if (!project) {
    notFound();
  }

  const allImages = project.image
    ? [project.image, ...(project.images || [])]
    : project.images || [];

  const handlePrevious = () => {
    setDirection(-1);
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? allImages.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleNext = () => {
    setDirection(1);
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === allImages.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedImageIndex(null);
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants2}
      className="min-h-screen bg-leaner-to-b from-gray-50 to-white py-6 sm:py-8 md:py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#9BD95C] hover:text-[#7bb53c] mb-6 md:mb-8 transition-all duration-300 group"
          >
            <IoArrowBack className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm sm:text-base">
              Back to Home
            </span>
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {project.image && (
            <motion.div variants={itemVariants} className="lg:w-1/2 w-full">
              <motion.div
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => setSelectedImageIndex(0)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={672}
                  height={672}
                  className="w-full h-auto aspect-square object-cover rounded-sm"
                  priority
                />
              </motion.div>
            </motion.div>
          )}

          {/* Content Section */}
          <motion.div variants={itemVariants} className="lg:w-1/2 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
              {project.title}
            </h1>

            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                {project.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        {project.images && project.images.length > 0 && (
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 md:mt-12 lg:mt-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {project.images.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={galleryItemVariants}
                  className="cursor-pointer"
                  onClick={() => setSelectedImageIndex(index + 1)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full aspect-video object-cover rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Modal with animations */}
      <AnimatePresence mode="wait" custom={direction}>
        {selectedImageIndex !== null && (
          <motion.div
            key="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedImageIndex(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button - responsive positioning */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-1.5 sm:p-2"
              aria-label="Close modal"
            >
              <IoClose className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </motion.button>

            {/* Navigation buttons - responsive */}
            {allImages.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-2 sm:left-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-1.5 sm:p-2 md:p-3 hover:bg-black/70 z-10"
                  aria-label="Previous image"
                >
                  <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 sm:right-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-1.5 sm:p-2 md:p-3 hover:bg-black/70 z-10"
                  aria-label="Next image"
                >
                  <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                </motion.button>
              </>
            )}

            {/* Image counter - responsive */}
            {allImages.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
                className="absolute top-2 left-2 sm:top-4 sm:left-4 text-white bg-black/50 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base"
              >
                {selectedImageIndex + 1} / {allImages.length}
              </motion.div>
            )}

            {/* Modal image with swipe animation */}
            <motion.div
              key={selectedImageIndex}
              custom={direction}
              variants={modalImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] mx-2 sm:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={allImages[selectedImageIndex]}
                  alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                  priority
                  quality={90}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
