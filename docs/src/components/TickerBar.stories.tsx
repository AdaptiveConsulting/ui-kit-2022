import { ComponentMeta, ComponentStory } from '@storybook/react';

import TickerBar from './TickerBar';
export default {
  title: 'Components/Index Tickers',
  component: TickerBar,
} as ComponentMeta<typeof TickerBar>;

const Template: ComponentStory<typeof TickerBar> = (args) => <TickerBar {...args} />;

export const TickerBarStory = Template.bind({});

TickerBarStory.storyName = 'Ticker Bar';
