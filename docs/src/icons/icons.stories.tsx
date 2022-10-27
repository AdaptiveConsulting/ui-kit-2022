import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Icons from './icons';

export default {
  title: 'Docs/Icons',
  components: Icons,
} as ComponentMeta<typeof Icons>;

const Template = () => <Icons />;

export const ColorPaletteStory: ComponentStory<typeof Icons> = Template.bind({});
