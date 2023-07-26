import React from 'react';
import { IconButton as IconButtonUI } from '@chakra-ui/react';
import { Icon } from '../../media';
import type { IconTypes } from '../../types';

interface ButtonType {
  iconName: IconTypes;
  fontSize?: string;
}

const IconButton: React.FC<React.ComponentProps<typeof IconButtonUI> & ButtonType> = ({
  iconName,
  fontSize,
  ...props
}) => {
  return <IconButtonUI {...props} fontSize={fontSize} icon={<Icon iconName={iconName} />} />;
};

export default IconButton;
