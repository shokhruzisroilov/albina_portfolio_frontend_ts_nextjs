'use client';
import { GraduationHat, InfoCircleIcon, ShareIcon } from '@/assets/icons';
import { portfolioData } from '@/constants';
import { PortfolioItem } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Portfolio Card
const PortfolioCard: React.FC<{ data: PortfolioItem }> = ({ data }) => (
  <div className="rounded-2xl">
    <Image
      src={data.image}
      alt={data.title}
      width={400}
      height={256}
      className="object-cover w-full rounded-tl-2xl rounded-tr-2xl"
    />
    <div className="border-l border-r border-b border-[#9BD95C] rounded-bl-2xl rounded-br-2xl p-4">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-2xl bg-[#9BD95C] flex items-center justify-center">
          <GraduationHat />
        </div>
        <div>
          <h3 className="font-semibold text-[18px] leading-6 text-[#36364A]">
            {data.title}
          </h3>
          <p className="mt-1 font-normal text-[12px] leading-3 text-[#818498]">
            {data.subtitle}
          </p>
        </div>
      </div>
      <p className="mt-4 font-normal text-[14px] leading-5 text-[#818498]">
        {data.description}
      </p>
      <ul className="flex flex-wrap items-center gap-2 mt-4">
        {data.skills.map((skill, i) => (
          <li
            key={i}
            className="bg-[#EFEFF9] rounded-full py-1.5 px-2.5 font-normal text-[12px] text-[#364057]"
          >
            {skill}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4 mt-4 font-semibold text-[14px] leading-[100%] text-[#9BD95C]">
        <motion.div
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <p>View Project</p>
          <ShareIcon />
        </motion.div>
        <div className="w-0.5 h-4 bg-[#EFEFF9]"></div>
        <motion.div
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <p>Learn more</p>
          <InfoCircleIcon />
        </motion.div>
      </div>
    </div>
  </div>
);

// Portfolio Section
const PortfolioSection: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div id="portfolio" className="w-full px-6 scroll-mt-20">
      <div className="py-20 max-w-300 mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="font-bricolage font-semibold text-[32px] leading-[140%] text-[#141414]">
            Portfolio
          </h3>
          <ul className="flex flex-wrap items-center gap-3 mt-4 font-inter">
            {['Education', 'Education', 'Education'].map((skill, i) => (
              <li
                key={i}
                className="bg-[#EFEFF9] rounded-full py-3 px-5 font-medium text-sm text-[#364057] cursor-pointer"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Swiper Slider */}
        <div className="mt-10 relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[FreeMode, Navigation]}
            className="content-swiper"
          >
            {portfolioData.map((item, i) => (
              <SwiperSlide key={i}>
                <PortfolioCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`w-11 h-11 rounded-full flex items-center justify-center cursor-pointer ${
                isBeginning ? 'bg-gray-200 cursor-not-allowed' : 'bg-[#EFEFF9]'
              }`}
            >
              <MdOutlineNavigateBefore className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`w-11 h-11 rounded-full flex items-center justify-center cursor-pointer ${
                isEnd ? 'bg-gray-200 cursor-not-allowed' : 'bg-[#EFEFF9]'
              }`}
            >
              <MdOutlineNavigateNext className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
