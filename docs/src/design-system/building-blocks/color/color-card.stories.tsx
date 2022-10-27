import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ColorCard from './color-card';

export default {
  title: 'Design System/Building Blocks/Color',
  components: ColorCard,
  argTypes: {
    position: {
      options: ['left', 'middle', 'right'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ColorCard>;

const Template = (args) => <ColorCard {...args} />;

export const ColorCardStory: ComponentStory<typeof ColorCard> = Template.bind({});

ColorCardStory.args = {
  token: 'Common-Black',
  bgColor: '#000',
  color: '#FFFFFF',
  position: 'left',
};

ColorCardStory.storyName = 'Color Card';

export const OpacityCardStory: ComponentStory<typeof ColorCard> = Template.bind({});

OpacityCardStory.args = {
  token: 'Text-Primary',
  bgColor: '#323232',
  color: '#FFFFFF',
  opacity: 0.38,
  position: 'middle',
};

OpacityCardStory.storyName = 'Opacity Card';
