import { FC, useEffect, useState } from 'react';
import { Theme, Typography } from '@mui/material';
import { stock_mock_data } from './mock_data';
import { StockPanelSkeleton, StockPanelView } from './StockPanelView';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

interface StockPanelControllerProps {
  theme?: Theme;
  admin?: boolean;
}

export interface iItems {
  [key: string]: number | string | undefined;
  Apples?: number;
  Bananas?: number;
  Oranges?: number;
}

export interface iResponse {
  items: iItems;
}

export const StockPanelController: FC<StockPanelControllerProps> = ({
  admin = false,
  ...props
}: StockPanelControllerProps) => {
  const [data, setData] = useState<iResponse | null>(null);
  const [currentItem, setcurrentitem] = useState('placeholder');
  const [currentImage, setCurrentImage] = useState(currentItem);

  const { t } = useTranslation();

  function setAll(name: string) {
    setcurrentitem(name);
    setCurrentImage(name);
  }
  useEffect(() => {
    data && Object.keys(data.items)[0]
      ? setAll(Object.keys(data.items)[0])
      : setCurrentImage('placeholder');
  }, [data]);

  useEffect(() => {
    setCurrentImage(currentItem.toLocaleLowerCase());
  }, [currentItem]);

  useEffect(() => {
    /* 
    const fetchData = async () => {
        const res = await fetch('https://someapi.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apikey: process.env.NEXT_PUBLIC_TEST_API_KEY as string,
          somedata: 'anydata'
        })
      })
      const data = await res.json()
      setData (data)
    };
    */

    const fetchMockData = async () => {
      const data = stock_mock_data;
      setData(data);
    };

    // test skeleton
    setTimeout(() => {
      fetchMockData();
    }, 1000);
  }, []);

  const imageLoadErrorFun = () => {
    setCurrentImage('placeholder');
  };
  return (
    <>
      <Typography variant='h4' sx={{ textAlign: 'left' }}>
        {t('stockpanel.headline')}
      </Typography>
      {!data ? (
        <StockPanelSkeleton />
      ) : (
        <StockPanelView
          listheadline={t('stockpanel.listheadline')}
          previewheadline={t('stockpanel.previewheadline')}
          data={data}
          admin={admin}
          currentItem={currentItem}
          currentImage={currentImage}
          setcurrentitem={setcurrentitem}
          imageLoadError={imageLoadErrorFun}
        />
      )}
    </>
  );
};
