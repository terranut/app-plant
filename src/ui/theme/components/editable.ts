import type { ComponentStyleConfig } from '@chakra-ui/theme';

const EditableNameStyles: ComponentStyleConfig = {
  variants: {
    primary: {
      preview: {
        fontSize: '20px',
        color: 'textColor.main',
        letterSpacing: '-0.5px',
        fontWeight: 'black',
      },
    },
  },
};

export { EditableNameStyles };
