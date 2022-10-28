import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Icons from './icons';

export default {
  title: 'Design System/Icons',
  components: Icons,
} as ComponentMeta<typeof Icons>;

const Template = () => <Icons />;

export const IconsStory: ComponentStory<typeof Icons> = Template.bind({});

IconsStory.storyName = 'Icons';
