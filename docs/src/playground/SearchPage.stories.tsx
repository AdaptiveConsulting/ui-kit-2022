import { ComponentMeta, ComponentStory } from '@storybook/react';

import SearchPage from './SearchPage';

export default {
  title: 'Playground',
  component: SearchPage,
} as ComponentMeta<typeof SearchPage>;

const Template = () => <SearchPage />;

export const SearchPagePlayground: ComponentStory<typeof SearchPage> = Template.bind({});

SearchPagePlayground.storyName = "Search Page"