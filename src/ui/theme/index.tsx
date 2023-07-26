import { extendTheme, theme as base, withDefaultVariant } from '@chakra-ui/react';

import { ButtonStyles as Button } from '../forms/button/styles';
import { EditableNameStyles as Editable } from './components/editable';
import { HeadingStyles as Heading } from '../';
import { IconButtonStyles as IconButton } from '../';
import { IconStyles as Icon } from '../';
import { TagStyles as Tag } from '../';

const styles = {
  global: (props: any) => ({
    'html, body': {
      height: '100%',
      fontSize: 'md',
      lineHeight: 'tall',
      background: props.colorMode === 'light' ? 'white' : 'white',
      overflow: 'hidden',
    },
    ' #__next': {
      display: 'flex',
      flexDirection: 'column',
      height: ' 100%',
    },
  }),
};

const AcademyTheme = extendTheme(
  withDefaultVariant({
    variant: 'outline',
    components: ['Input', 'NumberInput', 'select'],
  }),
  {
    styles,
    colors: {
      primary: {
        main: '#5051F9',
        dark: '#273C80',
        light: '#A6BBFF',
        icons: '#5F6388',
      },

      background: {
        main: '#F3F4F8',
        disabled: '#f0f3ff',
      },

      textColor: {
        main: '#181818',
        secondary: '#5C5C5C',
        accent: '#273C80',
        disabled: '#323338',
        placeholder: '#747474',
        link: '#5051F9',
        title: '#293a6f',
      },

      status: {
        warning: '#FACD58',
        success: '#64F0A4',
        error: '#FF4D4D',
      },

      border: {
        component: '#D7D7D7',
        layout: '#ededef',
        tabs: '#e2e8f0',
      },

      white: '#fff',
    },

    fontWeights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },

    fonts: {
      heading: `'Nunito', sans-serif, ${base.fonts?.heading}`,
      body: `'DM Sans', sans-serif, ${base.fonts?.body}`,
    },

    components: {
      Button,
      Heading,
      IconButton,
      Icon,
      Editable,
      Tag,
    },
  }
);

export default AcademyTheme;
