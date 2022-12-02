import { Box, Button, ButtonGroup as MUIButtonGroup } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Material UI/Button Group',
  component: MUIButtonGroup,
  argTypes: {
    variant: {
      name: 'Variant',
      options: ['primary', 'outlined', 'text', 'contained'],
      defaultValue: 'primary',
      control: 'radio',
    },
    disabled: {
      name: 'Disabled',
      options: [false, true],
      defaultValue: false,
      control: 'boolean',
    },
    disableElevation: {
      name: 'Disable Elevation',
      options: [false, true],
      defaultValue: false,
      control: 'boolean',
    },
    disableFocusRipple: {
      name: 'Disable Focus Ripple',
      options: [false, true],
      control: 'boolean',
    },
    disableRipple: {
      name: 'Disable Ripple',
      options: [false, true],
      control: 'boolean',
    },
    fullWidth: {
      name: 'Full Width',
      options: [false, true],
      defaultValue: false,
      control: 'boolean',
    },
    orientation: {
      name: 'Orientation',
      options: ['horizontal', 'vertical'],
      control: 'radio',
    },
    size: {
      name: 'Size',
      options: ['small', 'medium', 'large'],
      control: 'radio',
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4 }}>
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof MUIButtonGroup>;

const Template: ComponentStory<typeof MUIButtonGroup> = (args) => (
  <MUIButtonGroup {...args}>
    <Button variant="PRIMARY">1D</Button>
    <Button>5D</Button>
    <Button>1M</Button>
    <Button>3M</Button>
    <Button>6M</Button>
    <Button>YTD</Button>
    <Button>1Y</Button>
    <Button>5Y</Button>
    <Button>All</Button>
  </MUIButtonGroup>
);

export const ButtonGroup = Template.bind({});
