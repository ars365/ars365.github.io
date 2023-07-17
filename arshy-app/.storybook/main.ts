import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  previewHead: (head) => `
    ${head}
    <style>
      .docs-story .innerZoomElementWrapper {position: relative;}
    </style>
  `,
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};
export default config;
