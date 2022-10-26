import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ColorCardGroup from './color-card-group';

export default {
  title: 'Design System/Building Blocks/Color',
  components: ColorCardGroup,
} as ComponentMeta<typeof ColorCardGroup>;

const Template = (args) => <ColorCardGroup {...args} />;

export const ColorCardGroupStory: ComponentStory<typeof ColorCardGroup> = Template.bind(
  {},
);

ColorCardGroupStory.args = {
  colors: [
    { token: 'Common-Black', bgColor: '#000', color: '#FFF' },
    { token: 'Common-White', bgColor: '#FFF', color: '#000' },
  ],
};

ColorCardGroupStory.storyName = 'Color Card Group';
