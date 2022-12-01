import { Box, Slider as MuiSlider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Material UI/Slider',
  component: MuiSlider,
  argTypes: {
    size: {
      name: 'Size',
      control: { type: 'radio' },
      options: ['medium', 'small'],
      defaultValue: 'medium',
    },
    color: {
      name: 'Color',
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    orientation: {
      name: 'Orientation',
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
    valueLabelDisplay: {
      name: 'Value Label Display',
      control: { type: 'radio' },
      options: ['off', 'auto', 'on'],
      defaultValue: 'off',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      defaultValue: false,
    },
    track: {
      name: 'Track',
      control: 'radio',
      options: ['normal', 'inverted', false],
      mapping: {
        false: false,
      },
      defaultValue: 'normal',
    },
    min: {
      name: 'Min. Value',
      control: { type: 'number' },
      defaultValue: 0,
    },
    max: {
      name: 'Max. Value',
      control: 'number',
      defaultValue: 100,
    },
    step: {
      name: 'Step',
      control: { type: 'number' },
      defaultValue: 1,
    },
    onChange: {
      action: true,
    },
    onChangeCommitted: {
      action: true,
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 4 }}>
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof MuiSlider>;

const Template: ComponentStory<typeof MuiSlider> = ({ ...args }) => {
  const styles =
    args.orientation === 'vertical'
      ? { marginLeft: 5, minHeight: 100 }
      : { marginTop: 5 };
  return <MuiSlider {...args} sx={styles} />;
};

export const Slider = Template.bind({});

export const SliderWithMarks = Template.bind({});
SliderWithMarks.args = {
  step: 0,
  marks: [{ value: 10 }, { value: 50, label: 'Hello' }],
};
