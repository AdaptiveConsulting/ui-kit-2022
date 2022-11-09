import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextSearch } from '@ui-kit-2022/components';
import * as React from 'react';

export default {
  title: 'Components/TextSearch',
  component: TextSearch,
  argTypes: {
    options: {
      name: 'Options',
      required: true,
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      defaultValue: 'Search text.',
    },
    size: {
      name: 'Size',
      control: 'radio',
      options: ['medium', 'small'],
      defaultValue: 'medium',
    },
    loading: {
      name: 'Loading',
      control: 'boolean',
      defaultValue: false,
    },
    loadingText: {
      name: 'Loading Text',
      control: 'text',
      defaultValue: 'Loading...',
    },
    noOptionsText: {
      name: 'No Options Text',
      control: 'text',
      defaultValue: 'No Options',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      defaultValue: false,
    },
    disableCloseOnSelect: {
      name: 'Disable Close on Select',
      control: 'boolean',
      defaultValue: false,
    },
    filterSelectedOptions: {
      name: 'Filter Selected Options',
      control: 'boolean',
      defaultValue: false,
    },
    open: {
      name: 'Open',
      control: 'boolean',
    },
    onOpen: {
      defaultValue: action('open'),
    },
    onClose: {
      defaultValue: action('close'),
    },
    onChange: {
      defaultValue: action('change'),
    },
    onInputChange: {
      defaultValue: action('input change'),
    },
    onHighlightChange: {
      defaultValue: action('highlight change'),
    },
    getOptionLabel: {
      table: {
        disable: true,
      },
    },
    groupBy: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof TextSearch>;

const Template: ComponentStory<typeof TextSearch> = (args) => <TextSearch {...args} />;

export const BasicTextSearch = Template.bind({});
BasicTextSearch.args = {
  options: [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Another Option' },
    { label: 'A fourth option' },
  ],
};

export const TickerSearch = Template.bind({});
TickerSearch.args = {
  placeholder: 'Enter a stock, symbol, or currency.',
  options: [
    { label: 'AAPL - Apple Inc.', type: 'stock' },
    { label: 'AMZN - Amazon Inc.', type: 'stock' },
    { label: 'HOV - Hovercraft Partners', type: 'stock' },
    { label: 'GBP - Great British Pound', type: 'currency' },
    { label: 'USD - US Dollar', type: 'currency' },
  ],
  groupBy: (opt: any) => (({ stock: 'Stock', currency: 'FX' } as any)[opt.type]),
};
