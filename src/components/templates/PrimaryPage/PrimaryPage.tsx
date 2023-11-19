import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import React from 'react';

type TemplateProps = {
  nav?: React.ReactNode;
  main?: React.ReactNode;
  article?: React.ReactNode;
  aside?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  theme?: Theme;
};

const unstyledPrimaryPage = ({ ...props }: TemplateProps) => {
  return (
    <div id='container' {...props}>
      {props.children ? ( // if children are passed, override template
        props.children // else render elements to their slots
      ) : (
        <>
          <nav>{props.nav}</nav>
          <main>
            {props.main ? ( // if main is passed, render as it is
              props.main // else render elements to their slots
            ) : (
              <>
                <article>{props.article}</article>
                <aside>{props.aside}</aside>
              </>
            )}
          </main>
          <footer>{props.footer}</footer>
        </>
      )}
    </div>
  );
};

export const PrimaryPage = styled(unstyledPrimaryPage)`
  // layout root styles
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  text-align: center;
  display: grid;
  min-height: 100vh;
  gap: 0;
  place-items: center;
  grid-template-rows: auto 1fr auto;
  grid-auto-flow: column;
  grid-template-areas:
    'nav'
    'main'
    'footer';

  nav {
    grid-area: nav;
    width: 100%;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 999;
  }

  main {
    grid-area: main;
    display: grid;
    grid-template-areas: 'article ${(props) => props.aside && 'aside'}';
    grid-template-columns: 2fr ${(props) => props.aside && '1fr'};
    grid-template-rows: auto;
    height: 100%;
    width: 100%;
    gap: ${(props) => props.aside && '2em'};
    padding: 2em;
    max-width: ${(props) => props.theme.breakpoints.values.md}px;
  }
  article {
    grid-area: article;
  }
  aside {
    grid-area: aside;
  }
  footer {
    grid-area: footer;
    width: 100%;
    height: auto;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    main {
      grid-template-areas:
        'article'
        'aside';
      grid-template-columns: 1fr;
    }
  }
`;
