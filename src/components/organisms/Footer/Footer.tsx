import styled from '@emotion/styled';
import { Theme } from '@mui/material';

type SectionProps = {
  id?: string;
  name?: string;
  children?: React.ReactNode;
  className?: string;
  theme?: Theme;
};

const unstyledFooter = ({ children, ...props }: SectionProps) => {
  return (
    <div {...props}>
      <div className='content'>
        <p>
          Atomic Design System, Figma Tokens, Next.js, Storybook, Emotion, MUI,
          Chromatic example in TypeScript 2023
        </p>
        {children}
      </div>
    </div>
  );
};

export const Footer = styled(unstyledFooter)`
  width: 100%;
  padding: 1em;

  padding-bottom: 3em;
  position: relative;
  box-sizing: border-box;
  border-top: solid thin ${(props) => props.theme.palette.primary.main};
  background-color: ${(props) => props.theme.palette.background.paper};
  .content {
    text-align: left;
    margin: 0 auto;
    max-width: 900px;
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100vw;
    box-sizing: border-box;
    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;
