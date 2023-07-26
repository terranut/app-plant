import type { Icons } from './media/icon';
type IconTypes = keyof typeof Icons;

interface LinkItemProps {
  name: string;
  icon: IconTypes;
  path?: string;
}

interface OptionItemProps {
  label: string;
  value: string;
}
export type { LinkItemProps, IconTypes, OptionItemProps };
