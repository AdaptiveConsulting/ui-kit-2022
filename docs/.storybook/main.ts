import svgr from 'vite-plugin-svgr';
import template from '@ui-kit-2022/svgr-template';

export default {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-addon-pseudo-states',
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
