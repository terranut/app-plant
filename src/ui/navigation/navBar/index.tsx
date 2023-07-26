import React, { ReactNode } from 'react';

import { Box, Divider, Flex, HStack, Icon, Stack } from '../..';
import NavBarItem from './NavBarItem';
import type { LinkItemProps } from '../../types';

const NavBar = ({ logo, items, children }: { logo: string; items: LinkItemProps[]; children?: ReactNode }) => {
  return (
    <Box
      bg={'white'}
      minW={'100%'}
      as="header"
      px={1}
      h={'72px'}
      borderBottom="1px solid"
      borderColor={'border.layout'}
    >
      <Flex alignItems={'center'} height={'100%'} justifyContent={'space-between'} px={'2.4rem'}>
        <Stack direction="row" align={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>{logo}</Box>

            <Divider orientation="vertical" h="26px" />
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} color="primary.icons">
              {items.map((link) => (
                <NavBarItem key={link.name}>
                  <Flex align={'center'}>
                  </Flex>
                </NavBarItem>
              ))}
            </HStack>
          </HStack>
        </Stack>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={'24px'} alignItems="center">
            {children}
            <Icon iconName="DirectNotification" fontSize="24px" />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export { NavBar, NavBarItem };
