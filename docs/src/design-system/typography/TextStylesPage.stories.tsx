import { ComponentStory } from '@storybook/react';

import TextStylesPage from './TextStylesPage';
export default {
  title: 'Design System/Typography',
  component: TextStylesPage,
};

const Template: ComponentStory<typeof TextStylesPage> = () => <TextStylesPage />;

export const TextStyles = Template.bind({});

TextStyles.args = {};
