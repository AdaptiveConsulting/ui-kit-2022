import { ComponentMeta, ComponentStory } from '@storybook/react';

import Stocks from './Stocks';

export default {
  title: 'Docs / Playground',
  component: Stocks,
} as ComponentMeta<typeof Stocks>;

const Template: ComponentStory<typeof Stocks> = () => {
  return <Stocks />;
};

export const Playground = Template.bind({});
