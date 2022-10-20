import { ComponentMeta, ComponentStory } from '@storybook/react';

import LogoBrand from './LogoBrand';

export default {
  title: 'Components/Branding',
  component: LogoBrand,
} as ComponentMeta<typeof LogoBrand>;

const Template: ComponentStory<typeof LogoBrand> = (args) => <LogoBrand {...args} />;

export const Brand = Template.bind({});

Brand.args = {};
