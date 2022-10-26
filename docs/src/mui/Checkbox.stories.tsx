import { Checkbox as MuiCheckbox } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Material UI/Checkbox',
  component: MuiCheckbox,
  argTypes: {
    size: {
      name: 'Size',
      control: 'radio',
      options: ['medium', 'small'],
      defaultValue: 'medium',
    },
    color: {
      name: 'Color',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      defaultValue: 'primary',
    },
    indeterminate: {
      name: 'Indeterminate',
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      defaultValue: false,
    },
    disableRipple: {
      name: 'Disable Ripple',
      control: 'boolean',
      defaultValue: false,
    },
    defaultChecked: {
      name: 'Default Checked',
      control: 'boolean',
      defaultValue: false,
    },
    onChange: {
      action: true,
    },
  },
} as ComponentMeta<typeof MuiCheckbox>;

const Template: ComponentStory<typeof MuiCheckbox> = ({ ...args }) => {
  return <MuiCheckbox {...args} />;
};

export const Checkbox = Template.bind({});
