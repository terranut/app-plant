// Button.stories.ts|tsx

import React from 'react';

import { Button } from '.';

const ButtonStory = {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    buttonText: { control: { type: 'text' }, description: 'Only used for Storybook' },
    variant: {
      control: { type: 'select' },
      options: ['ghost', 'primary', 'navBar'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};
export default ButtonStory;
export const DefaultButton = ({ variant }: { variant: 'ghost' | 'primary' | 'navBar' }) => {
  return (
    <Button variant={variant} onClick={() => {}}>
      Button
    </Button>
  );
};
export const GhostButton = () => {
  return (
    <Button variant="ghost" onClick={() => {}}>
      Button
    </Button>
  );
};
