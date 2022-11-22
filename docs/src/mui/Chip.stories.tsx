import { Chip as MuiChip } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

const ICON_NAMES = Object.keys(Icon);
const ICON_MAPPINGS = Object.fromEntries(
  Object.entries(Icon).map(([k, v]) => [k, React.createElement(v)]),
);

export default {
  title: 'Material UI/Chip',
  component: MuiChip,
  argTypes: {
    label: {
      name: 'Label',
      type: { name: 'string', required: true },
      defaultValue: 'Label',
    },
    variant: {
      name: 'Variant',
      control: 'inline-radio',
      options: ['filled', 'outlined'],
      defaultValue: 'filled',
    },
    color: {
      name: 'Color',
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      defaultValue: 'default',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      defaultValue: false,
    },
    icon: {
      name: 'Icon',
      description: 'The left aligned icon.',
      control: 'select',
      options: ICON_NAMES,
      mapping: ICON_MAPPINGS,
    },
    deleteIcon: {
      name: 'Delete Icon',
      description: 'The right aligned icon.',
      control: 'select',
      if: { arg: 'onDelete' },
      options: ICON_NAMES,
      mapping: ICON_MAPPINGS,
    },
    onClick: {
      name: 'Enable On Click',
      description: 'Adds an onClick handler, which enables basic button functionality.',
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: action('click'),
        false: undefined,
      },
    },
    onDelete: {
      name: 'Enable On Delete',
      description: 'Adds an onDelete handler, which displays the right (delete) icon.',
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: action('delete'),
        false: undefined,
      },
    },
  },
} as ComponentMeta<typeof MuiChip>;

const Template: ComponentStory<typeof MuiChip> = (args) => {
  return <MuiChip {...args} />;
};

export const Chip = Template.bind({});
