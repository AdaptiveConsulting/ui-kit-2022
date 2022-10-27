import { Button as MuiButton, ButtonProps } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

const ICON_NAMES = Object.keys(Icon);
const ICON_MAPPINGS = Object.fromEntries(
  Object.entries(Icon).map(([k, v]) => [k, React.createElement(v)]),
);

export default {
  title: 'Material UI/Button',
  component: MuiButton,
  argTypes: {
    children: {
      name: 'Text',
      type: { name: 'string', required: true },
      defaultValue: 'Label',
    },
    variant: {
      name: 'Variant',
      control: 'radio',
      options: ['text', 'contained', 'outlined'],
      defaultValue: 'text',
    },
    color: {
      name: 'Color',
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      defaultValue: 'primary',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      defaultValue: false,
    },
    startIcon: {
      name: 'Start Icon',
      description: 'The left aligned icon.',
      control: 'select',
      options: ICON_NAMES,
      mapping: ICON_MAPPINGS,
    },
    endIcon: {
      name: 'End Icon',
      description: 'The right aligned icon.',
      control: 'select',
      options: ICON_NAMES,
      mapping: ICON_MAPPINGS,
    },
  },
} as ComponentMeta<typeof MuiButton>;

const Template: ComponentStory<typeof MuiButton> = ({
  children,
  ...args
}: ButtonProps) => {
  return <MuiButton {...args}>{children}</MuiButton>;
};

export const Button = Template.bind({});
