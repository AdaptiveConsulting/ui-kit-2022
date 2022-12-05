import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoaderSpinner from './LoaderSpinner';

export default {
  title: 'Design System',
  component: LoaderSpinner,
} as ComponentMeta<typeof LoaderSpinner>;

const Template: ComponentStory<typeof LoaderSpinner> = () => <LoaderSpinner />;

export const LoaderSpinnerStory = Template.bind({});
LoaderSpinnerStory.storyName = 'Loaders/Spinners';
