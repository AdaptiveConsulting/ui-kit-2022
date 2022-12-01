import { Box, LinearProgress as MuiLinearProgress } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Material UI/Linear Progress',
  component: MuiLinearProgress,
  argTypes: {
    variant: {
      name: 'Variant',
      options: ['indeterminate', 'determinate', 'buffer', 'query'],
      defaultValue: 'indeterminate',
      control: 'radio',
    },
    color: {
      name: 'Color',
      options: ['inherit', 'primary', 'secondary'],
      control: 'radio',
      defaultValue: 'secondary',
    },
    value: {
      name: 'Value',
      if: { arg: 'variant', neq: 'indeterminate' },
      control: {
        type: 'number',
        min: 0,
        max: 100,
      },
    },
    valueBuffer: {
      name: 'Value Buffer',
      if: { arg: 'variant', eq: 'buffer' },
      control: {
        type: 'number',
        min: 0,
        max: 100,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4 }}>
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof MuiLinearProgress>;

const Template: ComponentStory<typeof MuiLinearProgress> = (args) => (
  <MuiLinearProgress {...args} />
);

export const LinearProgress = Template.bind({});
