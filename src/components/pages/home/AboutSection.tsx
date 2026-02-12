'use client';

import { guidingValues, stepCharts } from '@/constants/aboutItems';
import { GuidingValue, StepChart } from '@/types/about';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StepChartItem: React.FC<StepChart> = ({ imageSrc, step, title }) => (
  <div className="flex items-center gap-6">
    <Image
      src={imageSrc}
      width={100}
      height={100}
      alt={title}
      className="aspect-square"
    />
    <div className="w-full bg-[#F5F5F5] rounded-2xl py-3 px-4">
      <h3 className="font-bold text-2xl leading-[140%] tracking-[-2%] text-[#9BD95C]">
        {step}
      </h3>
      <h4 className="mt-2 font-medium text-2xl leading-[140%] tracking-[-2%] text-[#0C0C0C]">
        {title}
      </h4>
    </div>
  </div>
);

const GuidingValueCard: React.FC<GuidingValue> = ({
  icon,
  title,
  description,
}) => (
  <div className="border border-[#EFEFF9] rounded-2xl p-8">
    <div className="w-14 h-14 rounded-xl bg-[#EFEFF9] flex items-center justify-center">
      {icon}
    </div>
    <h3 className="mt-6 font-semibold text-[20px] leading-[140%] tracking-[-2%] text-[#0C0C0C]">
      {title}
    </h3>
    <p className="mt-3 font-medium text-[16px] leading-[140%] tracking-[-2%] text-[#5C687D]">
      {description}
    </p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <div id="about" className="w-full px-6 scroll-mt-20">
      <div className="max-w-300 mx-auto">
        {/* ABOUT ME */}
        <div className="pt-20">
          <h3 className="font-medium text-[32px] leading-[120%] text-[#0C0C0C]">
            About me
          </h3>
          <p className="mt-3 font-medium text-[16px] leading-[140%] tracking-[-0.32px] text-[#5C687D]">
            I am an instructional designer, educator, and education spacial
            designer. I am passionate about transforming learning through
            innovation and evidence-based design. My specialization is
            development of online and hybrid courses. I create scalable,
            accessible learning experiences that drive real outcomes, from
            training 1,800+ teachers across Uzbekistan&apos;s national education
            system to designing digital courses for Georgetown University&apos;s
            School of Nursing and School of Continuing Studies.
            <br />
            My approach integrates Universal Design principles, and learning
            science to build experiences that are both cutting-edge and
            inclusive. I work extensively with Canvas LMS, Articulate 360, H5P,
            and other EdTech platforms to develop interactive content, aligned
            assessments, and multimedia resources that engage diverse learners.
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
          </p>
        </div>

        {/* CHARTS SECTION */}
        <div className="py-16 flex flex-col xl:flex-row gap-10 items-center justify-between">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="select-none inline-block"
          >
            <Image
              src="/images/chart-skils.png"
              width={500}
              height={500}
              alt="chart skills"
              className="aspect-square"
            />
          </motion.div>

          <div className="space-y-8 w-full">
            {stepCharts &&
              stepCharts.map((chart, idx) => (
                <StepChartItem key={idx} {...chart} />
              ))}
          </div>
        </div>

        {/* GUIDING VALUES */}
        <div className="py-16">
          <h2 className="font-bricolage font-medium text-[32px] leading-[120%] text-[#0C0C0C]">
            Guiding values
          </h2>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {guidingValues &&
              guidingValues.map((value, idx) => (
                <GuidingValueCard key={idx} {...value} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
