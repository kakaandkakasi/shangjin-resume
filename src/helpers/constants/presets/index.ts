import aiAlgorithmEngineer from './ai-algorithm-engineer.json';
import aiProductManager from './ai-product-manager.json';
import frontendEngineer from './frontend-engineer.json';
import backendEngineer from './backend-engineer.json';
import dataAnalyst from './data-analyst.json';
import uiUxDesigner from './ui-ux-designer.json';
import operationsMarketing from './operations-marketing.json';
import adminHr from './admin-hr.json';
import projectManager from './project-manager.json';
import productDesigner from './product-designer.json';
import marketAnalyst from './market-analyst.json';

export const PRESETS: Record<string, object> = {
  modern: aiAlgorithmEngineer,
  professional: aiProductManager,
  creative: frontendEngineer,
  minimal: backendEngineer,
  tech: dataAnalyst,
  elegant: uiUxDesigner,
  bold: operationsMarketing,
  classic: adminHr,
  dev: projectManager,
  startup: productDesigner,
  modern2: marketAnalyst,
};

export const PRESET_NAMES: Record<string, string> = {
  modern: 'AI算法工程师',
  professional: 'AI产品经理',
  creative: '前端工程师',
  minimal: '后端工程师',
  tech: '数据分析师',
  elegant: 'UI/UX设计师',
  bold: '运营/市场',
  classic: '行政/人事',
  dev: '项目经理',
  startup: '产品设计师',
  modern2: '市场分析师',
};
