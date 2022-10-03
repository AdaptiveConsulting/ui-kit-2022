import { ComponentMeta, ComponentStory } from '@storybook/react';

import LogoIcon from './LogoIcon';

export default {
  title: 'Components/Icons',
  component: LogoIcon,
} as ComponentMeta<typeof LogoIcon>;

const Template: ComponentStory<typeof LogoIcon> = (args) => <LogoIcon {...args} />;

export const Logo = Template.bind({});

Logo.args = {
  height: 56,
  width: 55,
  color: '#323232',
};
