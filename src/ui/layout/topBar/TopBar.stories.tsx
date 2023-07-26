import TopBar from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Layout/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = () => <TopBar title="HOLA" />;
export const TopBarStory = Template.bind({});
