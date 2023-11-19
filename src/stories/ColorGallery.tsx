import styled from '@emotion/styled';
import { Grid, Palette } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

interface IColorSwatch {
  name: string;
  value: string;
  idx: any;
}

const unstyledColorSwatch = ({ name, value, idx, ...props }: IColorSwatch) => {
  return (
    <div key={`${idx}g1`} {...props}>
      <span
        key={`${idx}g2`}
        style={{
          backgroundColor: value,
          display: 'block',
          height: '2em',
          width: '150px',
        }}
      ></span>
      <span key={`${idx}g3`}>{name}</span> <span> {value}</span>
    </div>
  );
};

const ColorSwatch = styled(unstyledColorSwatch)`
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
`;
const unstyledColorSwatches = ({ color, ...props }: any) => {
  return (
    <div {...props}>
      {Object.keys(color).map((key, idx) => {
        return key.endsWith('Opacity') ? null : (
          <ColorSwatch
            key={idx}
            name={key}
            value={color[key]}
            idx={idx}
          ></ColorSwatch>
        );
      })}
    </div>
  );
};
const ColorSwatches = styled(unstyledColorSwatches)`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;

export const UnstyledColorGallery = ({ ...props }: { theme?: Theme }) => {
  const theme: Theme = useTheme<Theme>();

  const exclude = [
    'mode',
    'divider',
    'contrastThreshold',
    'getContrastText',
    'augmentColor',
    'tonalOffset',
  ];

  return (
    <Grid container spacing={2} sx={{ textAlign: 'left' }} {...props}>
      {Object.keys(theme.palette).map((key, idx) => {
        return exclude.includes(key) ? null : (
          <div key={`${idx}_please`} className='row'>
            <Grid key={`${idx}_no`} item xs={3}>
              {key}{' '}
            </Grid>
            <Grid key={`${idx}_more`} item xs={8}>
              <ColorSwatches
                key={`${idx}_keys`}
                color={theme.palette[key as keyof Palette]}
              ></ColorSwatches>
            </Grid>
          </div>
        );
      })}
    </Grid>
  );
};
export const ColorGallery = styled(UnstyledColorGallery)`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  margin: 0%;
  padding: 1em;
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
  .row {
    display: flex;
    width: 100%;
    margin-bottom: 2em;
  }
`;
