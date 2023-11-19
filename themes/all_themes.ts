import { createTheme } from '@mui/material/styles';
import { set_all_fonts } from './_overrrideFonts';

import light_theme from './light_theme.json';
import dark_theme from './dark_theme.json';
import gold_theme from './gold_theme.json';

import {
  Open_Sans,
  Kalam,
  Raleway,
  Courier_Prime,
  Cutive_Mono,
} from 'next/font/google';
import { set_families } from './_setFamliles';

const open_sans = Open_Sans({
  weight: ['300', '400', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const kalam = Kalam({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const raleway = Raleway({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const courier_prime = Courier_Prime({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const cutive_mono = Cutive_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    primary?: React.CSSProperties;
    secondary?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

const font_obj = {
  fontFamily: raleway,
  h1: raleway,
  h2: raleway,
  h3: raleway,
  h4: raleway,
  h5: raleway,
  h6: raleway,
  body1: raleway,
  body2: raleway,
  button: raleway,
  caption: raleway,
  overline: raleway,
};

// All Themes. Override MUI default theme options
export const muiDefault = createTheme();
export const light = createTheme({
  palette: light_theme.palette,
  ...set_families(font_obj, light_theme),
});
export const dark = createTheme({
  palette: dark_theme.palette,
  ...set_all_fonts(cutive_mono, dark_theme),
});
export const muiGold = createTheme({
  palette: gold_theme.palette,
  ...set_all_fonts(kalam, gold_theme),
});
