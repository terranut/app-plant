import React from 'react';
import { Heading as ChakraHeading, HeadingProps as ChakraHeadingProps } from '@chakra-ui/react';

export interface HeadingProps extends ChakraHeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const Heading = ({ type, children, ...props }: HeadingProps) => {
  return (
    <ChakraHeading variant={type} as={type} {...props}>
      {children}
    </ChakraHeading>
  );
};

export default Heading;
