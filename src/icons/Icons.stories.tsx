import { SvgIconProps } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import * as icons from './';

export default {
  title: 'Icons/SvgIcon',
  component: React.Component<SvgIconProps>,
  argTypes: {
    component: {
      options: Object.keys(icons),
      mapping: icons,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<React.FC<SvgIconProps>>;

const Template: ComponentStory<React.FC<SvgIconProps>> = (args: any) => {
  const { component, ...svgArgs } = args;
  return <args.component {...svgArgs} />;
};

export const Icon = Template.bind({});
Icon.args = {
  component: 'AlarmBell',
};
