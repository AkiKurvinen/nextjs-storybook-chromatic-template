import { FC, useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  Skeleton,
  SkeletonProps,
  Theme,
  Typography,
} from '@mui/material';
import { stock_mock_data } from '../StockPanel/mock_data';
import styles from './OldStockPanel.module.css';
import { StockItemSkeleton } from '../../molecules/StockItem/StockItem';
import { HiExternalLink } from 'react-icons/hi';
import { StockListSkeleton } from '../StockList/StockList';

interface StockPanelProps {
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

export const StockPanelSkeleton: FC<SkeletonProps> = ({ ...props }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
      gridTemplateAreas: { xs: '"preview" "data"', sm: '"data preview"' },
      gap: '0.25em',
      width: '100%',
    }}
  >
    <Box sx={{ gridArea: 'data' }}>
      <Skeleton width={'100%'} height={'2em'} />
      <StockListSkeleton />
    </Box>
    <Box sx={{ gridArea: 'preview' }}>
      <Skeleton width={'100%'} height={'2em'} />
      <Box sx={{ aspectRatio: '3 / 2' }}>
        <Skeleton
          variant='rectangular'
          animation='wave'
          width={'100%'}
          height={250}
        />
      </Box>
    </Box>
  </Box>
);

export const StockPanel: FC<StockPanelProps> = ({
  admin = false,
  ...props
}: StockPanelProps) => {
  const [data, setData] = useState<iResponse | null>(null);
  const [currentItem, setcurrentitem] = useState<string | undefined>('apples');
  const [currentImage, setCurrentImage] = useState('placeholder');

  useEffect(() => {}, [currentImage]);
  useEffect(() => {
    data
      ? setCurrentImage(Object.keys(data.items)[0])
      : setCurrentImage('placeholder');
  }, [data]);

  useEffect(() => {
    if (currentItem) {
      setCurrentImage(currentItem.toLocaleLowerCase());
    }
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

  return (
    <section className={styles.StockPanel} {...props}>
      <Typography variant='h4'>Stock</Typography>
      {!data ? (
        <StockPanelSkeleton />
      ) : (
        <div className={styles.StockPanels}>
          <div>
            <Typography variant='body1'>Items</Typography>
            <ul className={styles.StockList}>
              {!data && <StockItemSkeleton width={'100%'} />}
              {data &&
                data.items &&
                Object.keys(data.items).map((key, i) => (
                  <li
                    key={i}
                    {...props}
                    onClick={() => {
                      setcurrentitem(key);
                    }}
                    className={styles.StockItem}
                  >
                    <Typography variant='body1' sx={{ margin: 0, padding: 0 }}>
                      {key}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{ margin: 0, padding: 0, fontWeight: 'bold' }}
                    >
                      {(data.items[key] as number)
                        ? (data.items[key] as number)
                        : 'N/A'}
                    </Typography>
                    {admin && (
                      <IconButton>
                        <HiExternalLink title='Make order' size={32} />
                      </IconButton>
                    )}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <Typography variant='body1'>Preview</Typography>
            <figure className={styles.StockFigure}>
              {/* eslint-disable */}
              <img
                src={`./img/${currentImage.toLocaleLowerCase()}.jpg`}
                alt={currentItem}
              />
              <figcaption className={styles.StockFigcaption}>
                {currentItem}
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </section>
  );
};
