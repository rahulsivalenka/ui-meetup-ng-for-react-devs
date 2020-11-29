import { nightOwl, oceanicNext } from '@code-surfer/themes';

export const getTheme = (framework = 'react') =>
  framework === 'react' ? oceanicNext : nightOwl;
