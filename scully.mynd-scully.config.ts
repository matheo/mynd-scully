import { ScullyConfig } from '@scullyio/scully';
import './scully/plugins/router.partners';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'mynd-scully',
  outDir: './docs',
  routes: {
    '/partners/:slug': {
      type: 'partnerSlugs'
    }
  }
};
