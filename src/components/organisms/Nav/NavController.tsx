import { Nav } from './Nav';
import Pear from '../../../../public/img/svg/pear.svg';
import { SearchForm } from '../../molecules/SearchForm/SearchForm';
import Link from 'next/link';
import { useMediaQuery, useTheme } from '@mui/material';
import {useTranslation,useLanguageQuery,LanguageSwitcher,} from "next-export-i18n";
import { LangNav } from '../LangNav/LangNav';

export const NavController = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const isExtraSmallSize = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Nav
      logo={<Link href={{ pathname: t('nav.index.route'), query: query }}><Pear />Fruity Oy</Link>}
      search={<SearchForm onlyicon={isExtraSmallSize} />}
    >
    <LangNav/>
    <Link href={{ pathname: t('nav.stock.route'), query: query }}>{t('nav.stock.text')}</Link>
    <Link href={{ pathname: t('nav.tokens.route'), query: query }}>{t('nav.tokens.text')}</Link>
    <Link href={{ pathname: t('nav.admin.route'), query: query }}>{t('nav.admin.text')}</Link>
    </Nav>
  );
};
