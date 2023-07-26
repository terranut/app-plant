import React, { ReactNode } from 'react';
import { Link } from '../..';

const NavBarItem = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={2}
    fontSize={'md'}
    fontWeight="bold"
    _hover={{
      textDecoration: 'none',
      bg: 'background.main',
    }}
    _activeLink={{ bg: 'primary.main', color: 'white' }}
    href={'#'}
  >
    {children}
  </Link>
);
export default NavBarItem;
