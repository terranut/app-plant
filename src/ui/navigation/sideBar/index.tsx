import { useRouter } from 'next/router';
import React from 'react';
import { Box, List, Flex, Icon, Tooltip, Stack } from '../..';
import type { LinkItemProps } from '../../types';
import SideBarItem from './SideBarItem';

const SideBar = ({ items }: { items: LinkItemProps[] }) => {
  const router = useRouter();

  const handlerOption = (option: any) => {
    if (!option) router.push('/');
    else router.push(option.path);
  };

  return (
    <Box bg={'white'} w={'94px'} as="aside">
      <Flex direction={'column'} height={'100%'} pt={'40px'}>
        <Flex as="nav" direction="column" align={'center'}>
          <List>
            <Stack direction={'column'} spacing={4}>
              {items.map((link) => (
                <SideBarItem key={link.name}>
                  <Tooltip hasArrow label={link.name} placement="right">
                    <Flex align={'center'} justify="center" w={'44px'} h={'44px'} onClick={() => handlerOption(link)}>
                      <Icon fontSize="24px" color={'primary.main'} iconName={link.icon} />
                    </Flex>
                  </Tooltip>
                </SideBarItem>
              ))}
            </Stack>
          </List>
        </Flex>
      </Flex>
    </Box>
  );
};
export { SideBar, SideBarItem };
