'use client';
import { PodcastIcon } from '@/assets/icons';
import DocumentDownloadIcon from '@/assets/icons/DocumentDownloadIcon';
import { socialLinks } from '@/constants';
import {
  containerVariants,
  mouseVariants,
  podcastVariants,
  slideLeftVariants,
  slideRightVariants,
  slideUpVariants,
} from '@/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  return (
    <div id="home" className="w-full px-6 pt-36 overflow-x-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-300 mx-auto py-10 flex flex-col xl:flex-row gap-10 xl:items-center justify-between"
      >
        {/* TEXT INFORMATION */}
        <motion.div variants={containerVariants} className="space-y-6 flex-1">
          <motion.h1
            variants={slideLeftVariants}
            className="font-bricolage font-semibold text-[22px] text-[#1D1D1D] leading-[100%] tracking-[-0.02em]"
          >
            Hello! <br /> I am Albina <br /> Hartner Yildiz
          </motion.h1>

          <motion.h2
            variants={slideLeftVariants}
            className="font-bricolage font-bold text-[80px] leading-[100%] tracking-[-0.01em] text-[#090909]"
          >
            INSTRUCTIONAL{' '}
            <motion.span
              initial={{ scale: 0.8, opacity: 0, x: -20 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                delay: 0.6,
                type: 'spring' as const,
                stiffness: 200,
                damping: 20,
              }}
              className="inline-block max-w-min bg-[#9BD95C14] rounded-xl border-l-3 border-[#9BD95C] px-4 py-0.5 text-[#9BD95C] line-clamp-2"
            >
              SPATIAL EXPERIENTIAL
            </motion.span>{' '}
            DESIGNER
          </motion.h2>

          <motion.p
            variants={slideLeftVariants}
            className="font-normal text-[18px] leading-6 text-[#1D1D1D]"
          >
            &quot;Focused on innovation, create dynamic <br /> and immersive
            learning experiences.&quot;
          </motion.p>

          <motion.div
            variants={slideLeftVariants}
            className="w-full h-px bg-[#EFEFF9]"
          />

          <motion.p
            variants={slideLeftVariants}
            className="font-normal text-base leading-6 text-[#1D1D1D]"
          >
            &quot;I design learning experiences that place learners first,
            turning complex content into clear, <br /> engaging, and actionable
            knowledge.&quot;
          </motion.p>

          <motion.a
            variants={slideUpVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#9BD95C',
              borderColor: '#9BD95C',
            }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-20 h-10 gap-2 items-center justify-center border-2 border-[#9BD95C] rounded-full transition-all duration-300"
          >
            <DocumentDownloadIcon />
            <span className="font-semibold text-[12.64px] text-[#2C2550]">
              CV
            </span>
          </motion.a>
        </motion.div>

        {/* IMAGE AND PODCAST INFO */}
        <motion.div
          variants={slideRightVariants}
          className="flex-1 flex flex-col items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{
              type: 'spring' as const,
              stiffness: 300,
              damping: 20,
            }}
          >
            <Image
              src="/images/hero.png"
              width={500}
              height={500}
              alt="Hero"
              priority
              className="rounded-2xl"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </motion.div>

          <motion.div
            custom={0}
            variants={podcastVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-4 flex flex-col items-center gap-3 text-center"
          >
            <motion.span
              whileHover={{ scale: 1.1, color: '#7cc44c' }}
              className="flex items-center gap-3 text-[#9BD95C]"
            >
              <PodcastIcon />
              <p className="font-medium text-[14px] leading-[18.95px] tracking-[0.05em]">
                Podcast
              </p>
            </motion.span>

            <motion.p
              custom={1}
              variants={podcastVariants}
              className="font-medium text-[14px] leading-[120%] text-[#121212]"
            >
              Podcast now available on Spotify, <br /> Youtube.
            </motion.p>

            <motion.div
              custom={2}
              variants={podcastVariants}
              className="flex gap-3 mt-2"
            >
              {socialLinks &&
                socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.15,
                      backgroundColor: '#9BD95C',
                      rotate: 5,
                      transition: {
                        type: 'spring' as const,
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-13 h-13 flex items-center justify-center rounded-2xl bg-[#EFEFF9] transition-colors duration-300 border-2 border-[#9BD95C]"
                  >
                    {social.icon}
                  </motion.a>
                ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* MOUSE ICON */}
      <motion.div
        variants={mouseVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full flex justify-center max-xl:hidden mt-12"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-[#E1E1EB] rounded-full flex justify-center p-2 cursor-pointer"
        >
          <motion.div
            animate={{
              y: [0, 4, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-2 bg-[#E1E1EB] rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* IMAGE SECTION WITH GRADIENT */}
      <div className="flex justify-center pt-32">
        <div className="relative w-full max-w-300 h-96 sm:h-112 md:h-128 lg:h-150 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-linear-to-tr from-[#F99D1C1A] via-[#FAA61A1A] to-[#FFC9071A]">
          <div className="absolute w-full h-full left-0 bottom-0 rounded-2xl sm:rounded-3xl lg:rounded-4xl p-2 sm:p-2.5 md:p-3 bg-linear-to-tr from-[#F99D1C] via-[#FAA61A] to-[#FFC907]">
            <Image
              src="/images/video.png"
              width={1036}
              height={600}
              alt="Hero Video"
              priority
              className="w-full h-full rounded-2xl sm:rounded-3xl lg:rounded-4xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
