import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import Paper from '@mui/material/Paper';

import { FC, ReactNode } from 'react';
import { ThemeUpdater } from '../../../helpers/ThemeUpdater';

interface IThemeBar {
  theme?: Theme;
  children?: ReactNode;
}
const unstyledThemeBar: FC<IThemeBar> = ({ ...props }: IThemeBar) => {
  return (
    <Paper {...props}>
      <ThemeUpdater>{props.children}</ThemeUpdater>
    </Paper>
  );
};

export const ThemeBar = styled(unstyledThemeBar)`
  align-items: center;
  padding: 1em 2em;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  max-width: 900px;
  display: inline-block;
  box-sizing: border-box;

  ${(props) => props.theme.breakpoints.down('sm')} {
    min-width: unset;
    gap: unset;
    padding: 0.5em;
    display: flex;
    width: 100%;
    justify-content: space-between;

    .info {
      min-width: unset;
    }
  }
`;
