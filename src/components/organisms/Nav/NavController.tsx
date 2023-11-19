import { Nav } from './Nav';
import Pear from '../../../../public/img/svg/pear.svg';
import { SearchForm } from '../../molecules/SearchForm/SearchForm';
import Link from 'next/link';
import { useMediaQuery, useTheme } from '@mui/material';

export const NavController = () => {
  const theme = useTheme();
  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Nav
      logo={<Pear />}
      name='Fruity Oy'
      search={<SearchForm onlyicon={isExtraSmallSize} />}
    >
      <Link href='/stock'>stock</Link>
      <Link href='/contact'>contact</Link>
      <Link href='/admin'>admin</Link>
    </Nav>
  );
};
