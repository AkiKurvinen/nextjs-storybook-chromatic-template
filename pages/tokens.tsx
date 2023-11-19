import { Box, Button, Typography } from '@mui/material';
import { ColorGallery } from '../src/stories/ColorGallery';
import { FontGallery } from '../src/stories/FontGallery';
import { ThemeBar } from '../src/components/organisms/ThemeBar/ThemeBar';
import { PrimaryPage } from '../src/components/templates/PrimaryPage/PrimaryPage';
import Link from 'next/link';

export interface iItems {
  [key: string]: number | string | undefined;
  Apples?: number;
  Bananas?: number;
  Oranges?: number;
}

export interface iResponse {
  items: iItems;
}

export default function Tokens(props: any) {
  return (
    <PrimaryPage
      nav={
        <ThemeBar {...props}>
          <Link href='/' passHref>
            <Button color='secondary' variant='outlined'>
              Home
            </Button>
          </Link>
        </ThemeBar>
      }
      main={
        <Box
          sx={{
            paddingTop: '4em',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}
        >
          <Typography variant='h2' sx={{ textAlign: 'left' }}>
            Color palette
          </Typography>
          <ColorGallery />
          <Typography variant='h2' sx={{ textAlign: 'left', margin: '1em 0' }}>
            Typography
          </Typography>
          <FontGallery />
        </Box>
      }
    />
  );
}
