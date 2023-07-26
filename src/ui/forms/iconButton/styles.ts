import type { ComponentStyleConfig } from '@chakra-ui/theme';

const IconButtonStyles: ComponentStyleConfig = {
  sizes: {
    sm: {
      fontSize: '16px',
      px: 0, // <-- px is short for paddingLeft and paddingRight
      py: 0, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: '24px',
      px: 0, // <-- these values are tokens from the design system
      py: 0, // <-- these values are tokens from the design system
    },
    lg: {
      fontSize: '40px',
      px: 0, // <-- these values are tokens from the design system
      py: 0, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    ghost: {
      bg: 'primary.main',
      color: 'primary.icons',
      borderColor: 'border.component',
    },
    primary: {
      bg: 'primary.main',
      color: 'white',
    },
    link: {
      px: 1,
      py: 0,
      fontSize: '40px',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'lg',
    variant: 'primary',
    color: 'primary.icons',
  },
};

export { IconButtonStyles };
