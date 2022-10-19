import { ComponentStory } from '@storybook/react';

import TextStylesPage from './TextStylesPage';
export default {
  title: 'Typography/Examples',
  component: TextStylesPage,
};

const Template: ComponentStory<typeof TextStylesPage> = () => <TextStylesPage />;

export const TextStyles = Template.bind({});

TextStyles.args = {};
