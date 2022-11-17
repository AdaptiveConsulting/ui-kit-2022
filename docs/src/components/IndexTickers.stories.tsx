import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IndexTickers } from '@ui-kit-2022/components';
export default {
  title: 'Components/Index Tickers',
  component: IndexTickers,
  argTypes: {
    name: {
      name: 'Name',
      type: { name: 'string', required: true },
      defaultValue: 'Name',
    },
    latestPrice: {
      name: 'LatestPrice',
      type: { name: 'number', required: true },
      defaultValue: '333.98',
    },
    changedPrice: {
      name: 'ChangedPrice',
      type: { name: 'number', required: true },
      defaultValue: '-1.86',
    },
    percentage: {
      name: 'Percantage',
      type: { name: 'number', required: true },
      defaultValue: '-0.64',
    },
    includeDivider: {
      name: 'IncludeDivider',
      control: 'boolean',
      defaultValue: true,
    },
    screen: {
      options: ['mobile', 'desktop'],
      control: { type: 'radio' },
      defaultValue: 'desktop',
    },
  },
} as ComponentMeta<typeof IndexTickers>;

const Template: ComponentStory<typeof IndexTickers> = (args) => (
  <IndexTickers {...args} />
);

export const IndexTickersStory = Template.bind({});

IndexTickersStory.storyName = 'Index Tickers';
