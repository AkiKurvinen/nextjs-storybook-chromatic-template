import { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '@mui/material';

interface LinkProps {
  children?: React.ReactNode;
  theme?: Theme;
  invert?: boolean;
}

const link_base = css`
  box-sizing: border-box;
  display: flex !important;
  align-items: center;
  text-align: center;
  height: 50px;
  text-decoration: none;

  a {
    padding: 1em 1.5em;
    box-sizing: border-box;
    width: 100%;
  }

  a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 800px) {
    text-align: left;
  }
`;

const StyledNavItem: FC<LinkProps> = ({
  children,
  invert = false,
  ...props
}: LinkProps) => {
  return <li {...props}>{children}</li>;
};
const invert_styles = (theme: Theme) => css`
  background-color: ${theme.palette.text.primary};
  color: ${theme.palette.background.paper};
`;
export const NavItem = styled(StyledNavItem)`
  ${link_base};
  ${(props) => props.invert && invert_styles(props.theme)};
`;
