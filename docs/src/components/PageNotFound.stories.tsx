import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageNotFound } from '@ui-kit-2022/components';

export default {
  title: 'Components/PageNotFound',
  component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = (args) => (
  <PageNotFound {...args} />
);

export const PageNotFoundStory = Template.bind({});
PageNotFoundStory.args = {
  onNavigateHome: action('Navigate Home'),
  inputProps: {
    placeholder: 'Enter a stock, symbol, or currency',
    options: [],
  },
};
PageNotFoundStory.storyName = 'PageNotFound';
