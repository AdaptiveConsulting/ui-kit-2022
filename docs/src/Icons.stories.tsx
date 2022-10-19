import { SvgIconProps } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

export default {
  title: 'Components/Icons',
  component: React.Component<SvgIconProps>,
  argTypes: {
    component: {
      options: Object.keys(Icon),
      mapping: Icon,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<React.FC<SvgIconProps>>;

const Template: ComponentStory<React.FC<SvgIconProps>> = (args: any) => {
  const { component, ...svgArgs } = args;
  return <args.component {...svgArgs} />;
};

export const Icons = Template.bind({});
Icons.args = {
  component: 'AlarmBell',
} as any;
