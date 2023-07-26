import type { ComponentStyleConfig } from '@chakra-ui/theme';
const FlexStyles: ComponentStyleConfig = {
  variants: {
    ghost: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: '#a4633f',
    },
    primary: {
      bg: 'primary.main',
      color: 'white',
    },
    navBar: {
      bg: 'danger',
    },
  },
  defaultProps: {
    variant: 'primary',
  },
};
export default FlexStyles;
