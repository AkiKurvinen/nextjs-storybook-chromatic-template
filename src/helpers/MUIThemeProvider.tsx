import { useTheme } from 'next-themes';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { GlobalStyles } from '../GlobalStyles';

// import all themes
import { light, dark, muiDefault, muiGold } from '../../themes/all_themes';

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<Theme | undefined>();
  const [mounted, setMounted] = useState(false);

  // define all themes
  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setCurrentTheme(dark);
    } else if (resolvedTheme === 'light') {
      setCurrentTheme(light);
    } else if (resolvedTheme === 'muiDefault') {
      setCurrentTheme(muiDefault);
    } else if (resolvedTheme === 'muiGold') {
      setCurrentTheme(muiGold);
    }
  }, [resolvedTheme]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <ThemeProvider theme={currentTheme ? currentTheme : dark}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
