import { useState } from 'react';
import { ThemeBar } from '../src/components/organisms/ThemeBar/ThemeBar';
import { PrimaryPage } from '../src/components/templates/PrimaryPage/PrimaryPage';
import { WeatherWidget } from '../src/components/organisms/WeatherWidget/WeatherWidget';
import { StockPanelController } from '../src/components/organisms/StockPanel/StockPanelController';
import { Footer } from '../src/components/organisms/Footer/Footer';
import { NavController } from '../src/components/organisms/Nav/NavController';

export default function Admin(props: any) {
  const [admin, setAdmin] = useState(true);
  return (
    <PrimaryPage
      nav={
        <>
          <NavController />
          <ThemeBar {...props} />
        </>
      }
      main={<StockPanelController admin={admin} />}
      footer={
        <Footer>
          <WeatherWidget />
        </Footer>
      }
    />
  );
}
