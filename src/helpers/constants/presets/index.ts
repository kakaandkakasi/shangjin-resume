import aiAlgorithmEngineer from './ai-algorithm-engineer.json';
import aiProductManager from './ai-product-manager.json';
import frontendEngineer from './frontend-engineer.json';
import backendEngineer from './backend-engineer.json';
import dataLabeler from './data-labeler.json';
import aiOperations from './ai-operations.json';
import aiSecurity from './ai-security.json';
import aiPresales from './ai-presales.json';
import verticalEngineer from './vertical-engineer.json';
import agentDeveloper from './agent-developer.json';
import marketBrand from './market-analyst.json';

export const PRESETS: Record<string, object> = {
  modern: aiAlgorithmEngineer,
  professional: aiProductManager,
  creative: frontendEngineer,
  minimal: backendEngineer,
  tech: dataLabeler,
  elegant: aiOperations,
  bold: aiSecurity,
  classic: aiPresales,
  dev: verticalEngineer,
  startup: agentDeveloper,
  modern2: marketBrand,
};

export const PRESET_NAMES: Record<string, string> = {
  modern: 'AI算法工程师',
  professional: 'AI产品经理',
  creative: '前端工程师',
  minimal: '后端工程师',
  tech: '数据标注员',
  elegant: 'AI运营',
  bold: 'AI安全专家',
  classic: '售前顾问',
  dev: '垂类落地工程师',
  startup: 'Agent开发工程师',
  modern2: '市场品牌',
};
