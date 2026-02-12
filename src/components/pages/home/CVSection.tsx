import { experienceItems } from '@/constants';
import { ExperienceItem } from '@/types';
import Image from 'next/image';

interface TimelineItemProps {
  item: ExperienceItem;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item }) => (
  <div className="flex gap-8">
    {/* Logo + Year */}
    <div className="flex items-start gap-8">
      <Image
        src={item.logo}
        width={64}
        height={64}
        alt="logo"
        className="aspect-square"
      />
      <div className="flex items-start gap-5 py-3.75">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#EF8424] my-2.25"></div>
          <div
            className={`w-0.5 h-75 ${item.active ? 'bg-[#9BD95C]' : 'bg-[#EFEFF9]'}`}
          ></div>
        </div>
        <h3 className="font-bricolage font-semibold text-[24px] leading-[1.4] text-[#141414]">
          {item.year}
        </h3>
      </div>
    </div>

    {/* Experience Info */}
    <div className="max-w-4xl font-inter">
      <h2 className="font-bold text-base leading-[100%] tracking-normal text-[#364057]">
        {item.role}
      </h2>
      <span className="flex items-center space-x-2 mt-1.5">
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
      </span>
      <h4 className="mt-3 font-medium text-[15px] leading-6 text-[#364057]">
        {item.org}
      </h4>

      {/* Bullet list */}
      <ul className="mt-2 list-disc list-inside text-sm space-y-1 font-normal leading-3.5 tracking-normal text-[#5C687D]">
        {item.bullets.map((b, i) => (
          <li key={i}>{b.replace(/^-+\s*/, '')}</li>
        ))}
      </ul>
    </div>
  </div>
);

interface SkillGroupProps {
  title: string;
  skills: string[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => (
  <div className="font-inter">
    <div className="flex items-center gap-3 mt-9">
      <div className="w-4 h-4 rounded-full bg-[#EF8424]"></div>
      <h3 className="font-bold text-[20px] leading-[100%] text-[#090909]">
        {title}
      </h3>
    </div>
    <ul className="flex flex-wrap items-center gap-3 mt-4">
      {skills.map((skill, i) => (
        <li
          key={i}
          className="bg-[#EFEFF9] rounded-full py-3 px-5 font-medium text-sm text-[#364057]"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default function ExperienceTimeline() {
  return (
    <div id="cv" className="w-full px-6 scroll-mt-20">
      {/* EXPERIENCE SECTION */}
      <div className="py-20 bg-[#FBFBFF]">
        <div className="max-w-300 mx-auto space-y-10">
          {experienceItems &&
            experienceItems.map((item, idx) => (
              <TimelineItem key={idx} item={item} />
            ))}
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="w-full bg-white py-20">
        <div className="w-full max-w-300 mx-auto">
          <h2 className="font-bricolage font-semibold text-[32px] leading-[140%] text-[#141414]">
            Skills
          </h2>
          <div className="flex flex-col lg:flex-row justify-between lg:mt-10 gap-10">
            <div className="w-full lg:w-1/2"></div>
            <div className="w-full lg:w-1/2">
              <SkillGroup
                title="Hard skills"
                skills={[
                  'Instructional Design',
                  'Spatial Design',
                  'Experience Design',
                ]}
              />
              <SkillGroup
                title="Soft skills"
                skills={['Teamwork', 'Creativity', 'Communication']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
