import { useState } from 'react';
import { PrimaryPage } from '../src/components/templates/PrimaryPage/PrimaryPage';
import { StockPanelController } from '../src/components/organisms/StockPanel/StockPanelController';
import { Footer } from '../src/components/organisms/Footer/Footer';
import { WeatherWidget } from '../src/components/organisms/WeatherWidget/WeatherWidget';
import { NavController } from '../src/components/organisms/Nav/NavController';

export default function Home(props: any) {
  const [admin, setAdmin] = useState(false);
  return (
    <PrimaryPage
      nav={<NavController />}
      main={<StockPanelController admin={admin} />}
      footer={
        <Footer>
          <WeatherWidget />
        </Footer>
      }
    />
  );
}
