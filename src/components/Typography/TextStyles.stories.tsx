import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextStyles from './TextStyles';
export default {
  title: 'Components/Typography',
  component: TextStyles,
};

const Template: ComponentStory<typeof TextStyles> = () => <TextStyles />;

export const TextStyle = Template.bind({});
