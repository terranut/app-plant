import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AcademyTheme from './theme';

const UIProvider = ({ children }: { children: JSX.Element }) => (
  <ChakraProvider theme={AcademyTheme}>{children}</ChakraProvider>
);

export default UIProvider;
