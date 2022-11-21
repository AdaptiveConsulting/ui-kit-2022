import { ComponentMeta } from '@storybook/react';

import ExamplePage from './ExamplePage';

export default {
  title: 'Playground',
  component: ExamplePage,
  decorators: [
    (Story) => (
      //Styling to override global decorator's padding
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ExamplePage>;

const Template = () => <ExamplePage />;

export const StocksPage = Template.bind({});
