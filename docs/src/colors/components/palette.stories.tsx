import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ColorPalette from './palette';

export default {
  title: 'Colors/Palette',
  components: ColorPalette,
} as ComponentMeta<typeof ColorPalette>;

const Template = (args) => <ColorPalette {...args} />;

export const ColorPaletteStory: ComponentStory<typeof ColorPalette> = Template.bind({});
