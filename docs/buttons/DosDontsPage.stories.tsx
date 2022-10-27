import { ComponentMeta, ComponentStory } from '@storybook/react';

import DosDontsPage from './DosDontsPage';

export default {
  title: 'Docs/Button',
  component: DosDontsPage,
} as ComponentMeta<typeof DosDontsPage>;

const Template: ComponentStory<typeof DosDontsPage> = () => <DosDontsPage />;

export const DosDonts = Template.bind({});
