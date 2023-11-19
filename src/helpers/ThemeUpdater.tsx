// https://codesandbox.io/s/nextjs-typescript-with-mui-material-and-next-themes-04z4m9?file=/README.md

import { FC, ReactNode, useEffect, useState } from 'react';
import { MenuItem, Select, Theme, Typography } from '@mui/material';
import { useTheme } from 'next-themes';
import styled from '@emotion/styled';

interface IThemeUpdater {
  theme?: Theme;
  children?: ReactNode;
}
const UnstyledThemeUpdater: FC<IThemeUpdater> = ({
  ...props
}: IThemeUpdater) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div {...props}>
      <div className='info'>
        <Typography variant='body1' gutterBottom>
          Theme options
        </Typography>
        <Typography variant='body2' gutterBottom>
          Persisted mode:{' '}
          {resolvedTheme !== theme ? `${theme} (${resolvedTheme})` : theme}{' '}
        </Typography>
      </div>
      <div className='settings'>
        {/* multiple themes */}
        {props.children}
        <Select
          value={theme}
          onChange={(a) => setTheme(a.target.value)}
          className='anyclass'
        >
          <MenuItem value='light'>Light</MenuItem>
          <MenuItem value='dark'>Dark</MenuItem>
          <MenuItem value='muiDefault'>muiDefault</MenuItem>
          <MenuItem value='muiGold'>muiGold</MenuItem>
        </Select>

        {/* only two themes
          <Button
            variant="contained"
            endIcon={
              resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />
            }
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          >
            Toggle theme
          </Button>
          */}
      </div>
    </div>
  );
};

export const ThemeUpdater = styled(UnstyledThemeUpdater)`
  display: flex;
  gap: 2em;
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    flex-direction: column;
  }
  .settings {
    display: flex;
    align-items: center;
    gap: 1em;
  }
  .settings div,
  .settings button {
    min-width: 120px;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    .settings {
      flex-direction: column;
    }
  }
`;
