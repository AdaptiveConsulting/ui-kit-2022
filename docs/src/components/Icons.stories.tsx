import { SvgIconProps } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

interface StoryProps {
  icon: React.JSXElementConstructor<SvgIconProps>;
}

export default {
  title: 'Components/Icons',
  component: React.Component<SvgIconProps>,
  argTypes: {
    icon: {
      options: Object.keys(Icon),
      mapping: Icon,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<React.FC<SvgIconProps>>;

const Template: ComponentStory<React.FC<StoryProps>> = (args: StoryProps) => {
  return <args.icon />;
};

export const Icons = Template.bind({});
Icons.args = {
  icon: 'AlarmBell',
} as unknown as StoryProps;
