import { Preview, ReactRenderer } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { light, dark, muiDefault, muiGold } from '../themes/all_themes';
import { chromaticThemeModes } from './modes';

// Load Material UI fonts
// import "@fontsource/roboto/300.css";

export const decorators = [
  withThemeFromJSXProvider<ReactRenderer>({
    themes: {
      light: light,
      dark: dark,
      muiDefault: muiDefault,
      muiGold: muiGold,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  globalTypes: {
    is_chromatic: { value: false },
  },
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        desktop: {
          name: 'desktop',
          styles: { width: '1920px', height: '1080px' },
        },
        mobile: { name: 'mobile', styles: { width: '200px', height: '400px' } }, // Viewport width range [200, 2560]
        defaultViewport: 'responsive',
      },
    },
    chromatic: {
      modes: chromaticThemeModes,
      diffThreshold: 0.063, // default 0.063
    },

    actions: { argTypesRegex: '^on[A-Z].*' },

    backgrounds: {
      values: [
        {
          name: 'light',
          value: light.palette.background.paper,
        },
        {
          name: 'dark',
          value: dark.palette.background.paper,
        },
        {
          name: 'muiGold',
          value: muiGold.palette.background.paper,
        },
        {
          name: 'muiDefault',
          value: muiDefault.palette.background.paper,
        },
      ],
    },

    decorators: decorators,
  },
};

export default preview;
