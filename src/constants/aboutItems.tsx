import {
  GuidingValueIcon1,
  GuidingValueIcon2,
  GuidingValueIcon3,
} from '@/assets/icons';
import { GuidingValue, StepChart } from '@/types/about';

export const guidingValues: GuidingValue[] = [
  {
    icon: <GuidingValueIcon1 />,
    title: 'Evidence Based Approach',
    description:
      'Using data and research to inform learning and instructional design decisions. Educational practices are grounded in credible evidence, continuous assessment, and evaluation to ensure effectiveness, relevance, and positive learner outcomes.',
  },
  {
    icon: <GuidingValueIcon2 />,
    title: 'Scalability',
    description:
      'Designing educational programs and resources that could be efficiently adapted, and expanded across contexts and learners. Scalable design ensures growth and flexibility, at the same time maintaining instructional quality, learning effectiveness, and educational integrity.',
  },
  {
    icon: <GuidingValueIcon3 />,
    title: 'Accessibility',
    description:
      'Ensuring that all students have equal access to learning materials, tools, and environments necessary for learning journey. This includes proactively identifying and removing physical, technological, cognitive, and instructional barriers so that every learner can fully engage, achieve learning objectives, and benefit from high-quality education.',
  },
];

export const stepCharts: StepChart[] = [
  {
    imageSrc: '/images/chart-1st.png',
    step: '1 st',
    title: 'Identify Desired Results',
  },
  {
    imageSrc: '/images/chart-2nd.png',
    step: '2 nd',
    title: 'Determine Acceptable Evidence',
  },
  {
    imageSrc: '/images/chart-3rd.png',
    step: '3 rd',
    title: 'Plan Learning Experience & Instruction',
  },
];
