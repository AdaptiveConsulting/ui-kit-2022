import { ComponentMeta, ComponentStory } from '@storybook/react';

import DashedLineExample from './DashedLineExample';

export default {
  title: 'Design System / Building Blocks / Divider',
  component: DashedLineExample,
} as ComponentMeta<typeof DashedLineExample>;

const Template: ComponentStory<typeof DashedLineExample> = () => <DashedLineExample />;
export const DashedLine = Template.bind({});
