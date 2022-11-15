import { ComponentMeta, ComponentStory } from '@storybook/react';

import BrandDocPage from './BrandDocPage';

export default {
  title: 'Design System',
  component: BrandDocPage,
} as ComponentMeta<typeof BrandDocPage>;

const Template: ComponentStory<typeof BrandDocPage> = () => <BrandDocPage />;

export const BrandDoc = Template.bind({});
BrandDoc.storyName = 'Brand';
