import { ComponentMeta, ComponentStory } from '@storybook/react';

import Example from './example';

export default {
  title: 'Components/Example',
  component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {};

export const accessible = () => (
  <Example borderColor="#000" textColor="#000" backgroundColor="#faf0e6" />
);
export const inaccessible = () => (
  <Example borderColor="#000" textColor="#fff" backgroundColor="#ffff00" />
);
export const inaccessibleInput = () => (
  <form>
    <input type="text" id="name" name="name" required />
  </form>
);
