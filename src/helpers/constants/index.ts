import dynamic from 'next/dynamic';
import { IThemeColor, ITemplate } from './index.interface';

export const SYSTEM_COLORS: IThemeColor[] = [
  {
    backgroundColor: 'white',
    fontColor: 'black',
    titleColor: '#1890ff',
    highlighterColor: 'yellowgreen',
    id: 1,
  },
  {
    backgroundColor: 'white',
    fontColor: '#780650',
    titleColor: '#254000',
    highlighterColor: 'burlywood',
    id: 2,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#217503',
    highlighterColor: '#F556E5',
    id: 3,
  },
];

export const AVAILABLE_TEMPLATES: ITemplate = {
  modern: {
    id: 'modern',
    name: 'Modern 现代',
    thumbnail: '/templates/modern.png',
    component: dynamic(() => import('@/templates/modern/ModernTemplate'), {
      ssr: false,
    }),
  },
  professional: {
    id: 'professional',
    name: 'Professional 专业',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
  creative: {
    id: 'creative',
    name: 'Creative 创意',
    thumbnail: '/templates/creative.png',
    component: dynamic(() => import('@/templates/creative/CreativeTemplate'), {
      ssr: false,
    }),
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal 简约',
    thumbnail: '/templates/minimal.png',
    component: dynamic(() => import('@/templates/minimal/MinimalTemplate'), {
      ssr: false,
    }),
  },
  tech: {
    id: 'tech',
    name: 'Tech 科技',
    thumbnail: '/templates/tech.png',
    component: dynamic(() => import('@/templates/tech/TechTemplate'), {
      ssr: false,
    }),
  },
  elegant: {
    id: 'elegant',
    name: 'Elegant 优雅',
    thumbnail: '/templates/elegant.png',
    component: dynamic(() => import('@/templates/elegant/ElegantTemplate'), {
      ssr: false,
    }),
  },
  bold: {
    id: 'bold',
    name: 'Bold 大胆',
    thumbnail: '/templates/bold.png',
    component: dynamic(() => import('@/templates/bold/BoldTemplate'), {
      ssr: false,
    }),
  },
  classic: {
    id: 'classic',
    name: 'Classic 经典',
    thumbnail: '/templates/classic.png',
    component: dynamic(() => import('@/templates/classic/ClassicTemplate'), {
      ssr: false,
    }),
  },
  dev: {
    id: 'dev',
    name: 'Developer 开发者',
    thumbnail: '/templates/dev.png',
    component: dynamic(() => import('@/templates/dev/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
  startup: {
    id: 'startup',
    name: 'Startup 创业',
    thumbnail: '/templates/startup.png',
    component: dynamic(() => import('@/templates/startup/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
  modern2: {
    id: 'modern2',
    name: 'Modern2 现代2',
    thumbnail: '/templates/modern2.png',
    component: dynamic(() => import('@/templates/modern2/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
};

export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 4,
};

export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
