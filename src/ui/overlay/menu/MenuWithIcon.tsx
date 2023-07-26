import React from 'react';

import { Menu, MenuButton, MenuList, MenuItem, Flex, Icon } from '../..';
import type { IconTypes, LinkItemProps } from '../../types';

const MenuWithIcon = ({ iconName, items }: { iconName: IconTypes; items: LinkItemProps[] }) => (
  <Menu>
    <MenuButton cursor={'pointer'}>
      <Icon iconName={iconName} />
    </MenuButton>

    <MenuList fontSize={'md'}>
      {items.map((link) => (
        <MenuItem key={link.name} px={4} py={2}>
          <Flex align={'center'}>
            <Icon fontSize="18px" iconName={link.icon} color={'textColor.secondary'} mr={'8px'} /> {link.name}
          </Flex>
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);
export default MenuWithIcon;
