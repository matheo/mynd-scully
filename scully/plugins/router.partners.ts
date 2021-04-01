
import { registerPlugin, HandledRoute } from '@scullyio/scully';

export const pluginName = 'partnerSlugs';

function slugPartners(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    { route: '/partners/rex' },
    { route: '/partners/roofstock' },
  ]);
}

const validator = async () => [];

registerPlugin('router', pluginName, slugPartners, validator);
