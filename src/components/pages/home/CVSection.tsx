'use client';
import { experienceItems } from '@/constants';
import { ExperienceItem } from '@/types';
import { motion } from 'motion/react';
import Image from 'next/image';

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      type: 'spring',
      stiffness: 70,
      damping: 12,
      delay: index * 0.15,
    }}
    className="flex gap-8"
  >
    {/* Logo + Year */}
    <div className="flex items-start gap-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          delay: index * 0.15 + 0.1,
          type: 'spring',
          stiffness: 100,
        }}
      >
        <Image
          src={item.logo}
          width={64}
          height={64}
          alt="logo"
          className="aspect-square"
        />
      </motion.div>
      <div className="flex items-start gap-5 py-3.75">
        <div className="flex flex-col gap-5 items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.15 + 0.2,
              type: 'spring',
              stiffness: 200,
            }}
            className="w-4 h-4 rounded-full bg-[#EF8424] my-2.25"
          ></motion.div>
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 300 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
              className={`w-1 h-75 ${item.active ? 'bg-[#9BD95C]' : 'bg-[#EFEFF9]'}`}
            ></motion.div>
          )}
        </div>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: index * 0.15 + 0.25,
            type: 'spring',
            stiffness: 80,
          }}
          className="font-bricolage font-semibold text-[24px] leading-[1.4] text-[#141414]"
        >
          {item.year}
        </motion.h3>
      </div>
    </div>

    {/* Experience Info */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.15 + 0.35, duration: 0.5 }}
      className="max-w-4xl font-inter"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.15 + 0.4 }}
        className="font-bold text-base leading-[100%] tracking-normal text-[#364057]"
      >
        {item.role}
      </motion.h2>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.15 + 0.45 }}
        className="flex items-center space-x-2 mt-1.5"
      >
        <span className="font-medium text-sm leading-3.5 text-[#364057]">
          {item.date}
        </span>
        <span className="w-1 h-1 bg-[#454F63] rounded-full"></span>
        <span className="font-normal text-sm leading-3.5 text-[#697696]">
          {item.location}
        </span>
        <span className="w-1 h-1 bg-[#454F63] rounded-full"></span>
        <span className="font-normal text-sm leading-3.5 text-[#697696]">
          {item.type}
        </span>
      </motion.span>
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.15 + 0.5 }}
        className="mt-3 font-medium text-[15px] leading-6 text-[#364057]"
      >
        {item.org}
      </motion.h4>

      {/* Bullet list */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.15 + 0.55 }}
        className="mt-2 list-disc list-inside text-sm space-y-1 font-normal leading-3.5 tracking-normal text-[#5C687D]"
      >
        {item.bullets.map((b, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15 + 0.6 + i * 0.05 }}
          >
            {b.replace(/^-+\s*/, '')}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </motion.div>
);

interface SkillGroupProps {
  title: string;
  skills: string[];
  index: number;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      type: 'spring',
      stiffness: 70,
      damping: 12,
      delay: index * 0.2,
    }}
    className="font-inter"
  >
    <div className="flex items-center gap-3 mt-9">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          delay: index * 0.2 + 0.1,
          type: 'spring',
          stiffness: 150,
        }}
        className="w-4 h-4 rounded-full bg-[#EF8424]"
      ></motion.div>
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.2 + 0.15 }}
        className="font-bold text-[20px] leading-[100%] text-[#090909]"
      >
        {title}
      </motion.h3>
    </div>
    <motion.ul className="flex flex-wrap items-center gap-3 mt-4">
      {skills.map((skill, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: index * 0.2 + 0.2 + i * 0.05,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: '#9BD95C',
            color: '#FFFFFF',
            transition: { duration: 0.2 },
          }}
          className="bg-[#EFEFF9] rounded-full py-3 px-5 font-medium text-sm text-[#364057] transition-colors duration-200 cursor-default border-2 border-[#9BD95C]"
        >
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

export default function ExperienceTimeline() {
  return (
    <div id="cv" className="w-full px-6 scroll-mt-20">
      {/* EXPERIENCE SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="py-30 bg-[#FBFBFF]"
      >
        <div className="max-w-300 mx-auto space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="font-bricolage font-semibold text-[32px] leading-[140%] text-[#141414] mb-16"
          >
            My Experience
          </motion.h2>
          {experienceItems &&
            experienceItems.map((item, idx) => (
              <TimelineItem
                key={idx}
                item={item}
                index={idx}
                isLast={idx === experienceItems.length - 1}
              />
            ))}
        </div>
      </motion.div>

      {/* SKILLS SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white py-20"
      >
        <div className="w-full max-w-300 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.1 }}
            className="font-bricolage font-semibold text-[32px] leading-[140%] text-[#141414]"
          >
            Skills
          </motion.h2>
          <div className="flex flex-col lg:flex-row justify-between lg:mt-10 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 70 }}
              className="w-full lg:w-1/2"
            ></motion.div>
            <div className="w-full lg:w-1/2">
              <SkillGroup
                title="Hard skills"
                skills={[
                  'Instructional Design',
                  'Spatial Design',
                  'Experience Design',
                ]}
                index={0}
              />
              <SkillGroup
                title="Soft skills"
                skills={['Teamwork', 'Creativity', 'Communication']}
                index={1}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
