import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pill as PillComponent } from '@ui-kit-2022/components';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

const ICON_NAMES = Object.keys(Icon);
const ICON_MAPPINGS = Object.fromEntries(
  Object.entries(Icon).map(([k, v]) => [k, React.createElement(v)]),
);

export default {
  title: 'Components/Pill',
  component: PillComponent,
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
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      defaultValue: 'primary',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      defaultValue: false,
    },
    ticker: {
      name: 'Ticker',
      description: 'Enable if this pill is intended to be used as a stock ticker',
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
    rightIcon: {
      name: 'Right Icon',
      description: 'The right aligned icon.',
      control: 'select',
      if: { arg: 'onClickIcon' },
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
    onClickIcon: {
      name: 'Enable On Click Icon',
      description: 'Adds an onClickIcon handler, which displays the right icon.',
      control: 'boolean',
      defaultValue: false,
      mapping: {
        true: action('click-icon'),
        false: undefined,
      },
    },
  },
} as ComponentMeta<typeof PillComponent>;

const Template: ComponentStory<typeof PillComponent> = (args) => {
  return <PillComponent {...args} />;
};

export const Pill = Template.bind({});
