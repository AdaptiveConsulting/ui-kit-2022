import { ComponentMeta, ComponentStory } from '@storybook/react';

import FooterIndexTicker from './FooterIndexTicker';

export default {
  title: 'Design System / Tables',
  component: FooterIndexTicker,
} as ComponentMeta<typeof FooterIndexTicker>;

const Template: ComponentStory<typeof FooterIndexTicker> = () => <FooterIndexTicker />;

export const FooterIndexTickerStory = Template.bind({});
FooterIndexTickerStory.storyName = 'Footer Index Ticker';
