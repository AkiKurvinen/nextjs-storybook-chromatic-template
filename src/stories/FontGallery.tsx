import styled from '@emotion/styled';
import { Typography, useTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';

function RenderRow(theme: Theme, val: string, index: number) {
  // prettier-ignore
  {/*// @ts-ignore */}
  let font_name = theme.typography[val].fontFamily as string;
  try {
    if (font_name.includes('__')) {
      font_name = font_name
        .split(',')[0]
        .replaceAll("'", '')
        .replaceAll('__', '')
        .split('_')
        .slice(0, -1)
        .join(' ');
    } else {
      throw new Error('Failed to convert font name');
    }
  } catch (error) {
    // prettier-ignore
    {/*// @ts-ignore */}
    font_name = theme.typography[val].fontFamily as string;
  }

  return (
    <div key={`${index}g0`} className='grid-items'>
      <span key={`${index}g1`}>{val}</span>
      {/*// @ts-ignore */}
      <span key={`${index}g2`}>{theme.typography[val].fontSize}</span>
      {/*// @ts-ignore */}
      <span key={`${index}g3`}>{theme.typography[val].fontWeight}</span>
      <span key={`${index}g4`}>
        <Typography
          key={`${index}g5`}
          variant={val as keyof typeof Typography}
          sx={{ textAlign: 'left' }}
        >
          {/*// @ts-ignore */}
          {font_name}
        </Typography>
      </span>
    </div>
  );
}

const UnstyledFontGallery = ({ ...props }: { theme?: Theme }) => {
  const theme: Theme = useTheme();
  const exclude = [
    'htmlFontSize',
    'pxToRem',
    'fontFamily',
    'fontSize',
    'fontWeightLight',
    'fontWeightRegular',
    'fontWeightMedium',
    'fontWeightBold',
  ];

  return (
    <section key={`gg`} {...props}>
      <div key={`headers`} className='grid-items headers'>
        <span key={`headers1`}>
          <b>element</b>
        </span>
        {/*// @ts-ignore */}
        <span key={`headers2`}>
          <b>size</b>
        </span>
        {/*// @ts-ignore */}
        <span key={`headers3`}>
          <b>weight</b>
        </span>
        <span key={`headers4`}>
          <b>sample</b>
        </span>
      </div>
      {Object.keys(theme.typography).map((val, index) => {
        return exclude.includes(val) ? null : RenderRow(theme, val, index);
      })}
    </section>
  );
};
export const FontGallery = styled(UnstyledFontGallery)`
  padding-bottom: 1em;
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1em;
  .headers {
    border-bottom: solid thin ${(props) => props.theme.palette.text.primary};
    margin-bottom: 0.5em;
  }
  .grid-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 3fr;
    flex-direction: column;
  }
  .grid-items span:last-child {
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;
