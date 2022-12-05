import { ComponentMeta, ComponentStory } from '@storybook/react';

import Perlin from '../utils/perlin';
import ExamplePage from './ExamplePage';

const perlin = new Perlin();
let y = 0.008;

const labels = Array(24 * 60)
  .fill(0)
  .map((_, i) => {
    return (~~(i / 60) + ':0' + Math.round(60 * ((i / 60) % 1))).replace(
      /\d(\d\d)/g,
      '$1',
    );
  })
  .filter((time) => {
    const [hour, minute] = time.split(':');
    return (
      ['9', '10', '11', '12', '13', '14', '15'].includes(hour) ||
      (hour === '16' && minute === '00')
    );
  });

export default {
  title: 'Playground',
  component: ExamplePage,
} as ComponentMeta<typeof ExamplePage>;

const Template: ComponentStory<typeof ExamplePage> = (args) => <ExamplePage {...args} />;

export const StocksPage = Template.bind({});
StocksPage.args = {
  graphProps: {
    yLabelStep: 50,
    xLabelStep: 60,
    labels,
    data: [
      labels.map(() => {
        y += 0.008;
        return perlin.get(1, y) * 300 + 200;
      }),
    ],
    previousData: Math.random() * 150,
  },
  tickerSearchProps: {
    placeholder: 'Enter a stock, symbol, or currency.',
    value: 'AAPL - Apple Inc.',
    options: [
      { label: 'AAPL - Apple Inc.', type: 'stock' },
      { label: 'AMZN - Amazon Inc.', type: 'stock' },
      { label: 'HOV - Hovercraft Partners', type: 'stock' },
      { label: 'GBP - Great British Pound', type: 'currency' },
      { label: 'USD - US Dollar', type: 'currency' },
    ],
    groupBy: (opt: unknown) =>
      ({ stock: 'Stock', currency: 'FX' }[
        (opt as { type: string }).type as string
      ] as string),
  },
};
