import { ComponentMeta, ComponentStory } from '@storybook/react';

import Stocks from './Stocks';

export default {
  title: 'Docs / Playground',
  component: Stocks,
  decorators: [
    (Story) => (
      //Styling to override global decorator's padding
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Stocks>;

const Template: ComponentStory<typeof Stocks> = () => {
  return <Stocks />;
};

export const Playground = Template.bind({});
