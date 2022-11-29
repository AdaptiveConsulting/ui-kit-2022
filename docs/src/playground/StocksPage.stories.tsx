import { ComponentMeta } from '@storybook/react';

import ExamplePage from './ExamplePage';

export default {
  title: 'Playground',
  component: ExamplePage,
} as ComponentMeta<typeof ExamplePage>;

const Template = () => <ExamplePage />;

export const StocksPage = Template.bind({});
