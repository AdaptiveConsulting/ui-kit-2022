import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Palette from './palette';

export default {
  title: 'Colors/Palette',
  components: Palette,
} as ComponentMeta<typeof Palette>;

const Template = (args) => <Palette {...args} />;

export const ColorPaletteStory: ComponentStory<typeof Palette> = Template.bind({});
