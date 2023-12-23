import React, { FC } from 'react';
import { Theme } from '@mui/material';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavItem } from '../../atoms/NavItem/NavItem';

interface NavProps {
  logo?: React.ReactNode;
  children?: React.ReactNode;
  search?: React.ReactNode;
  name?: string;
  theme?: Theme;
}
const nav_base = (theme: Theme) => css`
  position: -webkit-sticky;
  position: sticky;
  background-color: ${theme.palette.text.primary};

  width: 100%;
  height: 50px;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    width: fit-content;
    width: -moz-fit-content;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    right: 0;
  }

  ul li {
    float: left;
    width: auto;
  }
  ul li a {
    color: ${theme.palette.background.paper};
    text-decoration: none;
  }

  .burger {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    display: none;
    color: var(--paper);
    text-align: center;
    padding: 6px 25px;
    text-decoration: none;
    height: 50px;
    font-size: 2em;
    float: right;
    cursor: pointer;
    background-color: ${theme.palette.text.primary};
    color: ${theme.palette.background.paper};
    border: none;
  }
  .burger:hover {
    background-color: ${theme.palette.background.paper};
    color: ${theme.palette.text.primary};
  }
  .logo a {
    display: flex;
    align-items: center;
    float: left;
    text-decoration: none;
    color: ${theme.palette.background.paper};
  }
  .logo svg {
    height: 48px;
    width: auto;
  }
  .logo:hover {
    opacity: 0.9;
  }
  .logo svg path {
    fill: ${theme.palette.background.paper};
  }
`;
const mobile_styles = (theme: Theme) => css`
  ul {
    display: block;
    clear: both;
    margin-right: 0;
    background-color: inherit;
    max-height: 80vh;
    overflow-y: auto;
    top: 50px;
    box-sizing: border-box;
  }
  ul {
    display: none;
  }
  ul li {
    float: none;
    display: block; /* change to block */
  }
  .expanded {
    position: absolute;
    top: 50px;
    display: block;
  }

  .burger {
    display: block;
  }
`;

const StyledNav: FC<NavProps> = ({
  logo,
  children,
  search,
  name,
  ...props
}: NavProps) => {
  const links = React.Children.toArray(children);
  const [open, setOpen] = React.useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <div {...props}>
      <span className='logo'>{logo && logo}</span>

      {search && search}

      {!open ? (
        <button className='burger' onClick={openMenu}>
          &equiv;
        </button>
      ) : (
        <button className='burger' onClick={openMenu}>
          &times;
        </button>
      )}

      <ul className={open ? 'expanded' : ''}>
        {links && (
          <>
            {links.map((link, idx) => {
              return <NavItem key={idx}>{link}</NavItem>;
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export const Nav = styled(StyledNav)`
  ${(props) => nav_base(props.theme)}
  ${(props) => props.theme.breakpoints.down('md')} {
    ${(props) => mobile_styles(props.theme)}
  }
`;
