import { ReactNode } from 'react';
import { ListItem, Link } from '../..';

const SideBarItem = ({ children }: { children: ReactNode }) => (
  <ListItem borderRadius={6}>
    <Link
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      h="100%"
      rounded={6}
      fontSize={'sm'}
      color="primary.icons"
      _hover={{
        textDecoration: 'none',
        bg: 'background.main',
        color: 'primary.main',
      }}
      _activeLink={{ bg: 'primary.main', color: 'white' }}
      href={'#'}
    >
      {children}
    </Link>
  </ListItem>
);

export default SideBarItem;
