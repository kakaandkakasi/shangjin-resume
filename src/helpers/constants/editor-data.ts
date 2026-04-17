import ActivitiesLayout from '@/modules/builder/editor/modules/activities/ActivitiesLayout';
import AwardsLayout from '@/modules/builder/editor/modules/awards/AwardsLayout';
import BasicLayout from '@/modules/builder/editor/modules/basic/BasicLayout';
import EducationLayout from '@/modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from '@/modules/builder/editor/modules/experience/ExperienceLayout';
import { ReactNode } from 'react';
import SkillsLayout from '@/modules/builder/editor/modules/skills/SkillsLayout';
import VolunteeringLayout from '@/modules/builder/editor/modules/volunteering/VolunteeringLayout';

export const headers: {
  [key: string]: { title: string; component: () => ReactNode };
} = {
  'basic-details': { title: '基本信息', component: BasicLayout },
  'skills-and-expertise': {
    title: '技能专长',
    component: SkillsLayout,
  },
  education: { title: '教育经历', component: EducationLayout },
  experience: { title: '工作经验', component: ExperienceLayout },
  activities: { title: '项目活动', component: ActivitiesLayout },
  volunteering: { title: '志愿服务', component: VolunteeringLayout },
  awards: { title: '荣誉奖项', component: AwardsLayout },
};
