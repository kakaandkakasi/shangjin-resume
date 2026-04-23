import {
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
} from '@/stores/skills';

import ResumeData from '@/helpers/constants/resume-data.json';
import { useActivity } from './activity';
import { useAwards } from './awards';
import { useBasicDetails } from './basic';
import { useEducations } from './education';
import { useExperiences } from './experience';
import { useVoluteeringStore } from './volunteering';

export const useResumeStore = () => {
  return {
    ...ResumeData,
    basics: useBasicDetails((state) => state.values),
    work: useExperiences((state) => state.experiences),
    education: useEducations((state) => state.academics),
    awards: useAwards((state) => state.awards),
    volunteer: useVoluteeringStore((state) => state.volunteeredExps),
    skills: {
      languages: useLanguages((state) => state.values),
      frameworks: useFrameworks((state) => state.values),
      technologies: useTechnologies((state) => state.values),
      libraries: useLibraries((state) => state.values),
      databases: useDatabases((state) => state.values),
      practices: usePractices((state) => state.values),
      tools: useTools((state) => state.values),
    },
    activities: useActivity((state) => state.get()),
  };
};

/**
 * @description Reset all stores with preset data (safe version with guards)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const resetResumeStoreWithPreset = (presetData: any) => {
  if (!presetData) return;

  try {
    if (presetData.basics) {
      useBasicDetails.getState().reset(presetData.basics);
    }
    if (presetData.skills) {
      if (presetData.skills.languages) useLanguages.getState().reset(presetData.skills.languages);
      if (presetData.skills.frameworks)
        useFrameworks.getState().reset(presetData.skills.frameworks);
      if (presetData.skills.libraries) useLibraries.getState().reset(presetData.skills.libraries);
      if (presetData.skills.databases) useDatabases.getState().reset(presetData.skills.databases);
      if (presetData.skills.technologies)
        useTechnologies.getState().reset(presetData.skills.technologies);
      if (presetData.skills.practices) usePractices.getState().reset(presetData.skills.practices);
      if (presetData.skills.tools) useTools.getState().reset(presetData.skills.tools);
    }
    if (presetData.work) useExperiences.getState().reset(presetData.work);
    if (presetData.education) useEducations.getState().reset(presetData.education);
    if (presetData.volunteer) useVoluteeringStore.getState().reset(presetData.volunteer);
    if (presetData.awards) useAwards.getState().reset(presetData.awards);
    if (presetData.activities) useActivity.getState().reset(presetData.activities);
  } catch (e) {
    console.warn('Failed to load preset data:', e);
  }
};

/**
 * @description Reset all the stores
 */
export const resetResumeStore = () => {
  useBasicDetails.getState().reset(ResumeData.basics);
  useLanguages.getState().reset(ResumeData.skills.languages);
  useFrameworks.getState().reset(ResumeData.skills.frameworks);
  useLibraries.getState().reset(ResumeData.skills.libraries);
  useDatabases.getState().reset(ResumeData.skills.databases);
  useTechnologies.getState().reset(ResumeData.skills.technologies);
  usePractices.getState().reset(ResumeData.skills.practices);
  useTools.getState().reset(ResumeData.skills.tools);
  useExperiences.getState().reset(ResumeData.work);
  useEducations.getState().reset(ResumeData.education);
  useVoluteeringStore.getState().reset(ResumeData.volunteer);
  useAwards.getState().reset(ResumeData.awards);
  useActivity.getState().reset(ResumeData.activities);
};
