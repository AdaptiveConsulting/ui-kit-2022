import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LogoText } from '@ui-kit-2022/components';

export default {
  title: 'Components/Branding',
  component: LogoText,
  argTypes: {
    width: {
      control: 'number',
      defaultValue: 100,
    },
    height: {
      control: 'number',
      defaultValue: 100,
    },
    color: { control: { type: 'color' } },
  },
} as ComponentMeta<typeof LogoText>;

const Template: ComponentStory<typeof LogoText> = (args) => <LogoText {...args} />;

export const Text = Template.bind({});
