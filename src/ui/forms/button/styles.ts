import type { ComponentStyleConfig } from '@chakra-ui/theme';

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const ButtonStyles: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
    _disabled: {
      backgroundColor: 'background.disabled',
      borderColor: 'border.component',
      color: 'textColor.secondary',
    },
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
    lg: {
      fontSize: 'lg',
      px: 8, // <-- these values are tokens from the design system
      py: 6, // <-- these values a
    },
  },
  // Two variants: outline and solid
  variants: {
    primary: {
      bg: 'primary.main',
      color: 'white',
      _hover: {
        backgroundColor: 'primary.dark',
      },
      _disabled: {
        color: 'textColor.disabled',
        backgroundColor: 'background.disabled',
        _hover: {
          color: 'textColor.disabled',
          backgroundColor: 'background.disabled',
        },
      },
    },

    colors: {
      invert_primary: {
        backgroundColor: 'white',
        color: 'primary.main',
      },
    },

    ghost: {
      border: '1px solid',
      borderColor: 'border.component',
      color: 'textColor.secondary',
      bg: 'white',
      _hover: {
        backgroundColor: 'background.main',
        color: 'primary.main',
        borderColor: 'primary.main',
      },
      _disabled: {
        color: 'textColor.disabled',
        borderColor: 'border.component',
        bg: 'white',
        _hover: {
          color: 'textColor.disabled',
          borderColor: 'border.component',
          bg: 'white',
        },
      },
    },

    link: {
      border: '0px solid',
      borderColor: 'transparent',
      color: 'textColor.secondary',
      bg: 'transparent',
      _hover: {
        color: 'primary.main',
      },
      _disabled: {
        color: 'textColor.disabled',
        bg: 'white',
        _hover: {
          color: 'textColor.secondary',
        },
      },
    },

    navBar: {
      borderRadius: '50%',
      bg: 'primary.main',
      fontSize: '22px',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};

export { ButtonStyles };
