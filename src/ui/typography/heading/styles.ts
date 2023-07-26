import type { ComponentStyleConfig } from '@chakra-ui/theme';
const HeadingStyles: ComponentStyleConfig = {
  // Styles for the base style
  sizes: {
    '4xl': {
      fontSize: '96px',
      lineHeight: 1,
    },
    '3xl': {
      fontSize: '60px',
      lineHeight: 1,
    },
    '2xl': {
      fontSize: '48px',
      lineHeight: [1.2, null, 1],
    },
    xl: {
      fontSize: '24px',
      lineHeight: [1.33, null, 1.2],
    },
    lg: {
      fontSize: '24px',
      lineHeight: [1.33, null, 1.2],
    },
    md: {},
    sm: {},
    xs: {},
  },
  variants: {
    h1: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: 'textColor.main',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'normal',
      color: 'textColor.main',
    },
    h3: {
      fontFamily: 'DM Sans',
      fontSize: '21px',
      fontWeight: 'bold',
      color: 'textColor.main',
    },
    h4: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: 'textColor.main',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 'normal',
      color: 'gray.500',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 'normal',
      color: 'gray.500',
    },
  },
};

export default HeadingStyles;
