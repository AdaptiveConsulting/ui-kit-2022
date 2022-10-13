import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import ButtonDefault from './button';

export default {
  title: 'Components/Button',
  component: ButtonDefault,
} as ComponentMeta<typeof ButtonDefault>;

const Template: ComponentStory<typeof ButtonDefault> = (args) => (
  <ButtonDefault {...args} />
);

export const based = Template.bind({});

based.args = {
  children: 'Hello Adaptive',
};
