import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LogoBrand } from '@ui-kit-2022/components';

export default {
  title: 'Components/Branding',
  component: LogoBrand,
  argTypes: {
    width: {
      control: 'number',
      defaultValue: 100,
    },
    height: {
      control: 'number',
      defaultValue: 100,
    },
  },
} as ComponentMeta<typeof LogoBrand>;

const Template: ComponentStory<typeof LogoBrand> = (args) => <LogoBrand {...args} />;

export const Brand = Template.bind({});
