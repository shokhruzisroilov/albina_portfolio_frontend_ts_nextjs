'use client';

import { guidingValues, stepCharts } from '@/constants';
import { GuidingValue, StepChart } from '@/types';
import { motion } from 'motion/react';
import Image from 'next/image';

const StepChartItem: React.FC<StepChart> = ({ imageSrc, step, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      type: 'spring',
      stiffness: 80,
      damping: 15,
    }}
    className="flex items-center gap-4 sm:gap-6"
  >
    <Image
      src={imageSrc}
      width={100}
      height={100}
      alt={title}
      className="aspect-square w-20 sm:w-24 md:w-28 lg:w-25"
    />
    <div className="w-full bg-[#F5F5F5] rounded-2xl py-2 sm:py-3 px-3 sm:px-4">
      <h3 className="font-bold text-xl sm:text-2xl leading-[140%] tracking-[-2%] text-[#9BD95C]">
        {step}
      </h3>
      <h4 className="mt-1 sm:mt-2 font-medium text-lg sm:text-xl md:text-2xl leading-[140%] tracking-[-2%] text-[#0C0C0C]">
        {title}
      </h4>
    </div>
  </motion.div>
);

const GuidingValueCard: React.FC<GuidingValue> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      type: 'spring',
      stiffness: 70,
      damping: 12,
      delay: 0.1,
    }}
    whileHover={{
      y: -5,
      boxShadow: '0 10px 30px -10px rgba(155, 217, 92, 0.2)',
      transition: { duration: 0.2 },
    }}
    className="border-2 border-[#9BD95C] rounded-2xl p-6 sm:p-8 transition-all duration-300"
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#EFEFF9] flex items-center justify-center border-2 border-[#9BD95C]">
      {icon}
    </div>
    <h3 className="mt-4 sm:mt-6 font-semibold text-lg sm:text-[20px] leading-[140%] tracking-[-2%] text-[#0C0C0C]">
      {title}
    </h3>
    <p className="mt-2 sm:mt-3 font-medium text-sm sm:text-[16px] leading-[140%] tracking-[-2%] text-[#5C687D]">
      {description}
    </p>
  </motion.div>
);

const AboutSection: React.FC = () => {
  return (
    <div id="about" className="w-full px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: 'spring',
            stiffness: 70,
            damping: 12,
            duration: 0.6,
          }}
          className="pt-16 sm:pt-20 md:pt-24 lg:pt-30"
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 80 }}
            className="font-medium text-2xl sm:text-3xl md:text-[32px] leading-[120%] text-[#0C0C0C]"
          >
            About me
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 font-medium text-sm sm:text-base md:text-lg lg:text-[20px] leading-[140%] tracking-[-0.32px] text-[#5C687D]"
          >
            I am an instructional designer, educator, and education spacial
            designer. I am passionate about transforming learning through
            innovation and evidence-based design. My specialization is
            development of online and hybrid courses. I create scalable,
            accessible learning experiences that drive real outcomes, from
            training 1,800+ teachers across Uzbekistan&apos;s national education
            system to designing digital courses for Georgetown University&apos;s
            School of Nursing and School of Continuing Studies.
            <br />
            <br />
            My approach integrates Universal Design principles, and learning
            science to build experiences that are both cutting-edge and
            inclusive. I work extensively with Canvas LMS, Articulate 360, H5P,
            and other EdTech platforms to develop interactive content, aligned
            assessments, and multimedia resources that engage diverse learners.
            <br />
            <br />
            What sets me apart is my ability to scale instructional innovation
            internationally. I have designed blended learning programs, digital
            pedagogy training, and cascade professional development models that
            reached thousands of educators in Uzbekistan. I co-authored a
            national EdTech manual with the U.S. Embassy and led quality
            assurance initiatives ensuring accessibility standards across all
            deliverables. Currently pursuing my Master&apos;s in Learning,
            Design and Technology at Georgetown University, I am researching
            conversational AI applications in education—work I presented at
            EduLearn 2025 in Spain. I am interested in advancing the field,
            always exploring emerging technologies that can democratize quality
            education globally. Whether collaborating with faculty, designing
            assessments, or implementing new learning technologies, my focus
            remains constant: creating learner-centered experiences that are
            accessible, engaging, and grounded in pedagogy.
          </motion.p>
        </motion.div>

        {/* CHARTS SECTION */}
        <div className="py-16 sm:py-20 md:py-24 lg:py-30">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 80 }}
            className="font-medium text-2xl sm:text-3xl md:text-[32px] leading-[120%] text-[#0C0C0C]"
          >
            My Design Process
          </motion.h3>
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 360 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 12,
                duration: 0.8,
                rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
              }}
              className="select-none inline-block rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96"
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/chart-skils.png"
                  alt="chart skills"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </motion.div>

            <div className="space-y-6 sm:space-y-8 w-full lg:w-1/2">
              {stepCharts &&
                stepCharts.map((chart, idx) => (
                  <StepChartItem key={idx} {...chart} />
                ))}
            </div>
          </div>
        </div>

        {/* GUIDING VALUES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="py-16 sm:py-20 md:py-24 lg:py-30"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 80 }}
            className="font-bricolage font-medium text-2xl sm:text-3xl md:text-[32px] leading-[120%] text-[#0C0C0C]"
          >
            Guiding values
          </motion.h2>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {guidingValues &&
              guidingValues.map((value, idx) => (
                <GuidingValueCard key={idx} {...value} />
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
