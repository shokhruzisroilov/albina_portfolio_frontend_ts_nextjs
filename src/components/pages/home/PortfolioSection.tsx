'use client';
import { GraduationHat, InfoCircleIcon, ShareIcon } from '@/assets/icons';
import { portfolioData } from '@/constants';
import { PortfolioItem } from '@/types';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useMemo, useRef, useState } from 'react';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Portfolio Card (o'zgarishsiz qoladi)
const PortfolioCard: React.FC<{ data: PortfolioItem; index: number }> = ({
  data,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      type: 'spring',
      stiffness: 70,
      damping: 12,
      delay: index * 0.1,
    }}
    whileHover={{
      y: -10,
      boxShadow: '0 20px 40px -15px rgba(155, 217, 92, 0.3)',
      transition: { duration: 0.3 },
    }}
    className="rounded-2xl h-full bg-white transition-all duration-300 mx-2 sm:mx-0"
  >
    <div className="overflow-hidden rounded-tl-2xl rounded-tr-2xl">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={256}
          className="object-cover w-full h-48 sm:h-56 md:h-64 transition-transform duration-300"
        />
      </motion.div>
    </div>
    <div className="border-l border-r border-b border-[#9BD95C] rounded-bl-2xl rounded-br-2xl p-3 sm:p-4">
      <div className="flex items-center gap-3 sm:gap-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: index * 0.1 + 0.1,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-2xl bg-[#9BD95C] flex items-center justify-center"
        >
          <GraduationHat />
        </motion.div>
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 + 0.15 }}
            className="font-semibold text-base sm:text-[18px] leading-5 sm:leading-6 text-[#36364A]"
          >
            {data.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="mt-1 font-normal text-[10px] sm:text-[12px] leading-3 text-[#818498]"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.1 + 0.25 }}
        className="mt-3 sm:mt-4 font-normal text-xs sm:text-[14px] leading-4 sm:leading-5 text-[#818498]"
      >
        {data.description}
      </motion.p>
      <motion.ul className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
        {data.skills.map((skill, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.1 + 0.3 + i * 0.03,
              type: 'spring',
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#9BD95C',
              color: '#FFFFFF',
              transition: { duration: 0.2 },
            }}
            className="bg-[#EFEFF9] rounded-full py-1 px-2 sm:py-1.5 sm:px-2.5 font-normal text-[10px] sm:text-[12px] text-[#364057] transition-colors duration-200 cursor-default border border-[#9BD95C]"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.1 + 0.4 }}
        className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 sm:mt-4 font-semibold text-xs sm:text-[14px] leading-[100%] text-[#9BD95C]"
      >
        <motion.div
          whileHover={{ scale: 1.05, x: 5 }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
        >
          <p className="relative">
            View Project
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9BD95C] group-hover:w-full transition-all duration-300"
              initial={false}
            />
          </p>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <ShareIcon />
          </motion.div>
        </motion.div>
        <div className="w-0.5 h-4 bg-[#EFEFF9] hidden sm:block"></div>
        <motion.div
          whileHover={{ scale: 1.05, x: 5 }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
        >
          <p className="relative">
            Learn more
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9BD95C] group-hover:w-full transition-all duration-300"
              initial={false}
            />
          </p>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <InfoCircleIcon />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
);

// Portfolio Section
const PortfolioSection: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  console.log(selectedFilter);
  const filters = ['All', 'Education', 'Spatial', 'Digital'];

  const filteredData = useMemo(() => {
    if (selectedFilter === 'All') {
      return portfolioData;
    }
    return portfolioData.filter(
      (item) => item.filter.toLowerCase() === selectedFilter.toLowerCase()
    );
  }, [selectedFilter]);

  const handleSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const updateSwiper = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
      setIsBeginning(true);
      setIsEnd(false);
    }
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    updateSwiper();
  };

  return (
    <div id="portfolio" className="w-full px-4 sm:px-6 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 80 }}
            className="font-bricolage font-semibold text-2xl sm:text-3xl md:text-[32px] leading-[140%] text-[#141414]"
          >
            Portfolio
          </motion.h3>
          {/* Filter Tags */}
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 80 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 font-inter"
          >
            {filters.map((filter, i) => {
              return (
                <motion.li
                  key={filter}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#9BD95C',
                    color: '#FFFFFF',
                  }}
                  onClick={() => handleFilterChange(filter)}
                  className={`
                    rounded-full py-1.5 sm:py-2 px-3 sm:px-5 
                    font-medium text-xs sm:text-sm 
                    cursor-pointer transition-all duration-200 border-2 border-[#9BD95C] bg-[#EFEFF9]`}
                >
                  {filter}
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 sm:mt-8 md:mt-10 relative"
        >
          {filteredData.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                No items found for "{selectedFilter}" filter
              </p>
            </motion.div>
          ) : (
            <>
              <Swiper
                key={`swiper-${selectedFilter}`} // Swiper'ga ham key qo'shamiz
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                slidesPerView={1}
                spaceBetween={12}
                freeMode={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[FreeMode, Navigation]}
                className="content-swiper px-2 sm:px-0"
              >
                {filteredData.map((item, i) => (
                  <SwiperSlide key={`slide-${i}-${item.title}`}>
                    <PortfolioCard data={item} index={i} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
              >
                <motion.button
                  onClick={() => swiperRef.current?.slidePrev()}
                  disabled={isBeginning}
                  whileHover={{
                    scale: isBeginning ? 1 : 1.1,
                    backgroundColor: '#9BD95C',
                  }}
                  whileTap={{ scale: isBeginning ? 1 : 0.95 }}
                  className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border-2 border-[#9BD95C] ${
                    isBeginning
                      ? 'bg-gray-200 cursor-not-allowed opacity-50'
                      : 'bg-[#EFEFF9] hover:text-white'
                  }`}
                >
                  <MdOutlineNavigateBefore className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
                <motion.button
                  onClick={() => swiperRef.current?.slideNext()}
                  disabled={isEnd}
                  whileHover={{
                    scale: isEnd ? 1 : 1.1,
                    backgroundColor: '#9BD95C',
                  }}
                  whileTap={{ scale: isEnd ? 1 : 0.95 }}
                  className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border-2 border-[#9BD95C] ${
                    isEnd
                      ? 'bg-gray-200 cursor-not-allowed opacity-50'
                      : 'bg-[#EFEFF9] hover:text-white'
                  }`}
                >
                  <MdOutlineNavigateNext className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </motion.div>
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortfolioSection;
