import { ComponentMeta, ComponentStory } from '@storybook/react';

import MaximizedLogoIcon from './MaximizedLogoIcon';

export default {
  title: 'Components/Icons',
  component: MaximizedLogoIcon,
} as ComponentMeta<typeof MaximizedLogoIcon>;

const Template: ComponentStory<typeof MaximizedLogoIcon> = (args) => (
  <MaximizedLogoIcon {...args} />
);

export const MaximizedLogo = Template.bind({});

MaximizedLogo.args = {
  height: 53,
  width: 154,
  color: '#323232',
};
