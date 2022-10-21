import { Switch as MuiSwitch } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Material UI/Switch',
  component: MuiSwitch,
  argTypes: {
    edge: {
      name: 'Edge',
      control: 'radio',
      options: [false, 'start', 'end'],
      mapping: {
        false: false,
      },
      defaultValue: false,
    },
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
} as ComponentMeta<typeof MuiSwitch>;

const Template: ComponentStory<typeof MuiSwitch> = ({ ...args }) => {
  return <MuiSwitch {...args} />;
};

export const Switch = Template.bind({});
