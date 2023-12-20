import { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, Skeleton, SkeletonProps, Theme, Typography } from '@mui/material';
import { openweathermap_mock_data } from './mock_data';
import Image from 'next/image';

interface WeatherWidgetProps {
  theme?: Theme;
}
interface Resp {
  cod?: number;
  error?: string;
  message?: string;
}
export const WeatherWidgetSkeleton: FC<SkeletonProps> = ({ ...props }) => (
  <Box
    sx={{
      width: '100%',
      maxWidth: '300px',
      height: 70,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25em',
      flexGrow: 1,
    }}
  >
    <Skeleton
      variant='rectangular'
      animation='wave'
      width={'100%'}
      height={'100%'}
    />
    <Skeleton
      variant='rectangular'
      animation='wave'
      width={'100%'}
      height={'100%'}
    />
  </Box>
);

const UnstyledWeatherWidget: FC<WeatherWidgetProps> = ({ ...props }: any) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {}, [data]);
  useEffect(() => {
    const fetchData = async () => {
      if (process.env.NEXT_PUBLIC_WEATHER_API_KEY as string) {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=60.192059&lon=24.945831&units=metric&appid=${
            process.env.NEXT_PUBLIC_WEATHER_API_KEY as string
          }`
        );
        let data = (await res.json()) as Resp;
        if (data.cod && data.cod == 200) {
          setData(data);
          return;
        } else if (data.message) {
          data = { ...data, error: data.message };
          setData(data);
          return;
        }
      }
      const data = { ...openweathermap_mock_data, mock: true };
      setData(data);
    };

    // test skeleton
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <Box {...props}>
      <Typography sx={{ fontWeight: 'bold' }}>
        Weather{data?.mock && <i>*</i>}
      </Typography>

      {!data ? (
        <WeatherWidgetSkeleton />
      ) : (
        <>
          <p>{!data.error ? data?.name : '--'}</p>

          {!data.error ? (
            <span>{data?.main.temp} &deg; C</span>
          ) : (
            <span>{data.error}</span>
          )}

          {data?.mock ? (
            <Image
              className='weatherimg'
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH &&
                process.env.NEXT_PUBLIC_BASE_PATH
              }/img/04d.png`}
              alt={'Cloudy'}
              width={50}
              height={50}
            ></Image>
          ) : (
            <Image
              className='weatherimg'
              src={`https://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
              unoptimized
              alt='Weather'
              width={50}
              height={50}
            />
          )}
        </>
      )}
    </Box>
  );
};

export const WeatherWidget = styled(UnstyledWeatherWidget)`
  width: 100%;
  max-width: 300px;
  text-align: left;
  border: solid thin ${(props) => props.theme.palette.grey[400]};
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: 1em;
  position: relative;

  .weatherimg {
    position: absolute;
    right: 1em;
    bottom: 1em;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
    max-width: unset;
  }
`;
