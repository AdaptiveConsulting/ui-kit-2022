import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Material UI/Select',
  component: MuiSelect,
  argTypes: {
    variant: {
      name: 'Variant',
      control: { type: 'radio' },
      options: ['standard', 'filled', 'outlined'],
      defaultValue: 'standard',
    },
    label: {
      name: 'Label',
      control: { type: 'text' },
    },
    size: {
      name: 'Form Control Size',
      control: { type: 'radio' },
      options: ['medium', 'small'],
      defaultValue: 'medium',
    },
    color: {
      name: 'Color',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error'],
      defaultValue: 'primary',
    },
    onChange: {
      action: true,
    },
    onClose: {
      action: true,
    },
    onOpen: {
      action: true,
    },
  },
} as ComponentMeta<typeof MuiSelect>;

const Template: ComponentStory<typeof MuiSelect> = ({
  size,
  variant,
  color,
  ...args
}) => {
  return (
    <FormControl fullWidth size={size} variant={variant} color={color}>
      <InputLabel id="uikit-storybook-select-label">{args.label}</InputLabel>
      <MuiSelect {...args} labelId="uikit-storybook-select-label">
        <MenuItem value={1}>Option One</MenuItem>
        <MenuItem value={2}>Option Two</MenuItem>
        <MenuItem value={3}>Option Three</MenuItem>
        <MenuItem value={4}>Option Four</MenuItem>
      </MuiSelect>
    </FormControl>
  );
};

export const Select = Template.bind({});
