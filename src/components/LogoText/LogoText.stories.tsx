import { ComponentMeta, ComponentStory } from '@storybook/react';

import LogoText from './LogoText';

export default {
  title: 'Components/Branding',
  component: LogoText,
} as ComponentMeta<typeof LogoText>;

const Template: ComponentStory<typeof LogoText> = (args) => <LogoText {...args} />;

export const Text = Template.bind({});

Text.args = {
  height: 32,
  width: 97,
};
