import React, { FC, useState } from 'react';
import { Button, Theme } from '@mui/material';

import styled from '@emotion/styled';
import {useTranslation,useLanguageQuery,LanguageSwitcher,} from "next-export-i18n";

interface LangNavProps {
  logo?: React.ReactNode;
  children?: React.ReactNode;
  search?: React.ReactNode;
  name?: string;
  theme?: Theme;
}


const StyledLangNav: FC<LangNavProps> = ({...props}: LangNavProps) => {
  return (
    <span {...props}>
        <LanguageSwitcher lang="fi">FI</LanguageSwitcher> |
        <LanguageSwitcher lang="en">EN</LanguageSwitcher>
    </span>
  );
};

export const LangNav = styled(StyledLangNav)`
    color: ${(props) => props.theme.palette.background.paper};
    span{
        color: ${(props) => props.theme.palette.primary.contrastText};
        margin: 0 0.5em;
    }
    span:hover{
        text-decoration: underline;
        background-color: transparent;
        cursor: pointer;
    }
`;
