import svgr from 'vite-plugin-svgr';
import template from '../templates/svgr.template';

export default {
  stories: [
    '../docs/Home.stories.mdx',
    '../docs/**/*.stories.mdx',
    '../docs/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
  ],
  staticDirs: ['./assets'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    babelModeV7: true,
  },
  async viteFinal(config, { configType }) {
    config.base = process.env.BASE_PATH || config.base;
    config.plugins = [
      ...config.plugins,
      svgr({
        svgrOptions: {
          template,
        },
      }),
    ];
    return config;
  },
};
