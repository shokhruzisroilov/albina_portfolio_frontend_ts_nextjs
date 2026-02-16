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
            Instructional Designer and Digital Learning Specialist with 5+ years
            of international experience designing online and hybrid learning,
            developing digital courses, and integrating educational technologies
            in higher education and K–12 systems. Skilled in learner-centered
            design, accessibility standards, assessment alignment, and
            evidence-based pedagogy. Experienced in creating scalable
            instructional materials, collaborating with faculty and SMEs, and
            leveraging AI-enabled tools to enhance engagement and learning
            outcomes. Strong background in EdTech innovation, professional
            development, and online learning quality assurance.
            <br />
            <br />
            My expertise includes:
            <br />
            -EdTech integration aligned with curriculum, pedagogy, and teacher
            professional development -AI-enabled learning platforms and adaptive
            tools for skills development -Project preparation, grant proposal
            development, and M&E for donor-financed initiatives -Cross-sector
            collaboration with ministries, universities, NGOs, and international
            organizations
            <br />
            <br />
            Currently, I am a Graduate Associate at Georgetown University’s
            Center for New Designs in Learning & Scholarship and pursuing a
            Master’s in Learning, Design & Technology. My research focuses on
            AI-enabled tools for student engagement and inquiry-based learning.
            I am driven to advance technology-enabled, inclusive education in
            LMIC contexts, and to support systems that prepare learners for the
            future of work.
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
