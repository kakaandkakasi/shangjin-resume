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
    name: 'AI算法工程师',
    thumbnail: '/templates/modern.png',
    component: dynamic(() => import('@/templates/modern/ModernTemplate'), {
      ssr: false,
    }),
  },
  professional: {
    id: 'professional',
    name: 'AI产品经理',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
  creative: {
    id: 'creative',
    name: '前端工程师',
    thumbnail: '/templates/creative.png',
    component: dynamic(() => import('@/templates/creative/CreativeTemplate'), {
      ssr: false,
    }),
  },
  minimal: {
    id: 'minimal',
    name: '后端工程师',
    thumbnail: '/templates/minimal.png',
    component: dynamic(() => import('@/templates/minimal/MinimalTemplate'), {
      ssr: false,
    }),
  },
  tech: {
    id: 'tech',
    name: '数据分析师',
    thumbnail: '/templates/tech.png',
    component: dynamic(() => import('@/templates/tech/TechTemplate'), {
      ssr: false,
    }),
  },
  elegant: {
    id: 'elegant',
    name: 'UI/UX设计师',
    thumbnail: '/templates/elegant.png',
    component: dynamic(() => import('@/templates/elegant/ElegantTemplate'), {
      ssr: false,
    }),
  },
  bold: {
    id: 'bold',
    name: '运营/市场',
    thumbnail: '/templates/bold.png',
    component: dynamic(() => import('@/templates/bold/BoldTemplate'), {
      ssr: false,
    }),
  },
  classic: {
    id: 'classic',
    name: '行政/人事',
    thumbnail: '/templates/classic.png',
    component: dynamic(() => import('@/templates/classic/ClassicTemplate'), {
      ssr: false,
    }),
  },
  dev: {
    id: 'dev',
    name: '项目经理',
    thumbnail: '/templates/dev.png',
    component: dynamic(() => import('@/templates/dev/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
  startup: {
    id: 'startup',
    name: '产品设计师',
    thumbnail: '/templates/startup.png',
    component: dynamic(() => import('@/templates/startup/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
  modern2: {
    id: 'modern2',
    name: '市场分析师',
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
