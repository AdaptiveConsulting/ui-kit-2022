import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextStylesPage from './TextStylesPage';
export default {
  title: 'Components/Typography',
  component: TextStylesPage,
};

const Template: ComponentStory<typeof TextStylesPage> = () => <TextStylesPage />;

export const TextStyles = Template.bind({});
