import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LogoBrand } from '@ui-kit-2022/components';

export default {
  title: 'Components/Branding',
  component: LogoBrand,
} as ComponentMeta<typeof LogoBrand>;

const Template: ComponentStory<typeof LogoBrand> = (args) => <LogoBrand {...args} />;

export const Brand = Template.bind({});

Brand.args = {
  width: 100,
  height: 100,
};
