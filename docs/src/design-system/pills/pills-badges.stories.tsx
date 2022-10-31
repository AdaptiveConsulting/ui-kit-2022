import { ComponentMeta, ComponentStory } from '@storybook/react';

import PillsBadgesUsageDoc from './pills-badges-usage';

export default {
  title: 'Design System/Pills and Badges',
  component: PillsBadgesUsageDoc,
} as ComponentMeta<typeof PillsBadgesUsageDoc>;

const Template: ComponentStory<typeof PillsBadgesUsageDoc> = () => {
  return <PillsBadgesUsageDoc />;
};

export const PillsDesignDoc = Template.bind({});
PillsDesignDoc.parameters = {
  pseudo: {
    hover: '.hover',
    focus: '.focus',
    active: '.active',
  },
};
PillsDesignDoc.storyName = 'Pills and Badges';
