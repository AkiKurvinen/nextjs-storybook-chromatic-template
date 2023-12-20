import { useState } from 'react';
import { PrimaryPage } from '../src/components/templates/PrimaryPage/PrimaryPage';
import { StockPanelController } from '../src/components/organisms/StockPanel/StockPanelController';
import { Footer } from '../src/components/organisms/Footer/Footer';
import { WeatherWidget } from '../src/components/organisms/WeatherWidget/WeatherWidget';
import { NavController } from '../src/components/organisms/Nav/NavController';
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from 'next-export-i18n';
import Link from 'next/link';
export default function Home(props: any) {
  const [admin, setAdmin] = useState(false);

  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <PrimaryPage
      nav={
        <>
          <NavController />
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
