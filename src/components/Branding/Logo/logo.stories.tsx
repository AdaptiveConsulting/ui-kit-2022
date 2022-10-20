import { ComponentMeta, ComponentStory } from '@storybook/react';

import Logo from './Logo';

export default {
  title: 'Components/Branding',
  component: Logo,
  argTypes: {
    variant: {
      options: ['small', 'large', 'maximized'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const BrandingLogo = Template.bind({});

BrandingLogo.storyName = 'Logo';
