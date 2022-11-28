import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LogoFull } from '@ui-kit-2022/components';

export default {
  title: 'Components/Branding',
  component: LogoFull,
  argTypes: {
    width: {
      name: 'Width',
      type: { name: 'number', required: false },
      defaultValue: 153,
    },
    height: {
      name: 'Height',
      type: { name: 'number', required: false },
      defaultValue: 53,
    },
  },
} as ComponentMeta<typeof LogoFull>;

const Template: ComponentStory<typeof LogoFull> = (args) => <LogoFull {...args} />;

export const Full = Template.bind({});
