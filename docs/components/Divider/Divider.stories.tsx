import { Divider as MuiDivider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Divider',
  component: MuiDivider,
  argTypes: {
    variant: {
      name: 'Variant',
      options: ['fullWidth', 'bold', 'inset', 'middle'],
      defaultValue: 'fullWidth',
      control: {
        type: 'select',
      },
    },
    orientation: {
      name: 'Orientation',
      options: ['vertical', 'horizontal'],
      defaultValue: 'horizontal',
      control: {
        type: 'radio',
        labels: {
          vertical: 'Vertical',
          horizontal: 'Horizontal',
        },
      },
    },
    textAlign: {
      name: 'Text Align',
      options: ['center', 'left', 'right'],
      defaultValue: 'center',
      control: {
        type: 'select',
      },
    },
    children: {
      name: 'Text',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof MuiDivider>;

const Template: ComponentStory<typeof MuiDivider> = (args) => {
  return <MuiDivider {...args} />;
};

export const Divider = Template.bind({});
