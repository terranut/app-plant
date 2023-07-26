import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { TabsProps } from '.';
import { TabsCustom } from '.';

const defaultItems = [
  {
    title: 'One',
    children: <p>Click the tabs or pull the slider around</p>,
  },
  { title: 'Two', children: <p>Yeah yeah. Whats up?</p>, disabled: true },
  { title: 'Three', children: <p>Oh, hello there.</p>, disabled: true },
];
export default {
  title: 'Disclosure/Tabs',
  component: TabsCustom,
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
  },
  args: {
    tabsItems: defaultItems,
  },
} as ComponentMeta<typeof TabsCustom>;
const Template: ComponentStory<typeof TabsCustom> = (args: TabsProps) => <TabsCustom {...args} />;
export const DefaultTabs = Template.bind({});

export const VerticalTabs = Template.bind({});
VerticalTabs.args = {
  orientation: 'vertical',
};
VerticalTabs.argTypes = {};
export const NextStepTabs = Template.bind({});
NextStepTabs.args = {
  isSequency: true,
};
NextStepTabs.argTypes = {};
