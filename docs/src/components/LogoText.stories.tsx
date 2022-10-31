import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LogoText } from '@ui-kit-2022/components';

export default {
  title: 'Components/Branding',
  component: LogoText,
} as ComponentMeta<typeof LogoText>;

const Template: ComponentStory<typeof LogoText> = (args) => <LogoText {...args} />;

export const Text = Template.bind({});

Text.args = { width: 100, height: 100 };
