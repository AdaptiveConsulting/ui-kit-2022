import { ComponentMeta, ComponentStory } from '@storybook/react';

import DarkBgState from './DarkBgState';

export default {
  title: 'Docs/Button',
  component: DarkBgState,
  argTypes: {
    variantType: {
      options: ['PRIMARY', 'SECONDARY', 'TERTIARY'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof DarkBgState>;

const Template: ComponentStory<typeof DarkBgState> = (args) => <DarkBgState {...args} />;

export const DarkBgStateStory = Template.bind({});
DarkBgStateStory.args = {
  variantType: 'PRIMARY',
};
