import { TextField as MuiTextField } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Material UI/TextField',
  component: MuiTextField,
  argTypes: {
    variant: {
      name: 'Variant',
      control: { type: 'radio' },
      options: ['outlined', 'filled', 'standard'],
      defaultValue: 'outlined',
    },
    label: {
      name: 'Label',
      control: 'text',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
    },
    helperText: {
      name: 'Helper Text',
      control: 'text',
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
    error: {
      name: 'Error',
      control: 'boolean',
      defaultValue: false,
    },
    margin: {
      name: 'Margin',
      control: 'radio',
      options: ['none', 'normal', 'dense'],
      defautlValue: 'none',
    },
    multiline: {
      name: 'Multi-line',
      control: 'boolean',
      defaultValue: false,
    },
    rows: {
      name: 'Rows',
      control: 'number',
      if: { arg: 'multiline', truthy: true },
    },
    maxRows: {
      name: 'Max. Rows',
      control: 'number',
      if: { arg: 'multiline', truthy: true },
    },
    minRows: {
      name: 'Min. Rows',
      control: 'number',
      if: { arg: 'multiline', truthy: true },
    },
    onChange: {
      action: true,
    },
  },
} as ComponentMeta<typeof MuiTextField>;

const Template: ComponentStory<typeof MuiTextField> = ({ ...args }) => {
  return <MuiTextField {...args} />;
};

export const TextField = Template.bind({});
