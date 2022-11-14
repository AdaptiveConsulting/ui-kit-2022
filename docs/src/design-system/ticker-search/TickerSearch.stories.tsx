import { ComponentMeta, ComponentStory } from '@storybook/react';

import TickerSearchDesignPage from './TickerSearchDesignPage';

export default {
  title: 'Design System/Ticker Search',
  component: TickerSearchDesignPage,
} as ComponentMeta<typeof TickerSearchDesignPage>;

const Template: ComponentStory<typeof TickerSearchDesignPage> = () => {
  return <TickerSearchDesignPage />;
};

export const TickerSearch = Template.bind({});
TickerSearch.parameters = {
  pseudo: {
    hover: '.hover',
  },
};
