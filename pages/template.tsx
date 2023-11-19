import { useState } from 'react';
import { ThemeBar } from '../src/components/organisms/ThemeBar/ThemeBar';
import { PrimaryPage } from '../src/components/templates/PrimaryPage/PrimaryPage';
import { WeatherWidget } from '../src/components/organisms/WeatherWidget/WeatherWidget';
import { Footer } from '../src/components/organisms/Footer/Footer';
import { StockPanel } from '../src/components/organisms/OldStockPanel/OldStockPanel';
import {
  Experimental_CssVarsProvider,
  experimental_extendTheme,
} from '@mui/material';
import { useTheme } from '@emotion/react';

export default function Admin(props: any) {
  const basetheme = useTheme();
  const [admin, setAdmin] = useState(false);
  const theme = experimental_extendTheme({
    cssVarPrefix: 'mui',
    ...basetheme,
  });
  return (
    <Experimental_CssVarsProvider theme={theme}>
      <PrimaryPage
        nav={<ThemeBar {...props} />}
        article={<StockPanel admin={admin} />}
        footer={
          <Footer>
            <WeatherWidget></WeatherWidget>
          </Footer>
        }
      />
    </Experimental_CssVarsProvider>
  );
}

function extendTheme(arg0: { cssVarPrefix: string }) {
  throw new Error('Function not implemented.');
}
