export const allModes = {
  // theme
  light: {
    backgrounds: 'light',
    theme: 'light',
  },
  dark: {
    backgrounds: 'dark',
    theme: 'dark',
  },

  // theme + device
  'light desktop': {
    viewport: 'desktop',
    backgrounds: 'light',
    theme: 'light',
  },
  'light mobile': {
    viewport: 'mobile',
    backgrounds: 'light',
    theme: 'light',
  },
  'dark desktop': {
    viewport: 'desktop',
    backgrounds: 'dark',
    theme: 'dark',
  },
  'dark mobile': {
    viewport: 'mobile',
    backgrounds: 'dark',
    theme: 'dark',
  },

  // locale
  en: {
    locale: 'en-GB',
  },
  fi: {
    viewport: 'fi-FI',
  },
};

// Chromatic Story Modes snap shot test matrix presets
export const chromaticThemeModes = {
  light: allModes['light'],
  dark: allModes['dark'],
};
export const chromaticThemeDeviceModes = {
  light_desktop: allModes['light desktop'],
  light_mobile: allModes['light mobile'],
  dark_desktop: allModes['dark desktop'],
  dark_mobile: allModes['dark mobile'],
  // disable top level modes set in preview.ts
  light: { disable: true },
  dark: { disable: true },
};
// not implemented
export const chromaticLanguageModes = {
  english: allModes['en'],
  finnish: allModes['fi'],
};
