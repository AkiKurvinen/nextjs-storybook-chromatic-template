import { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Box, Skeleton, SkeletonProps, Theme, Typography } from '@mui/material';
import {
  StockList,
  StockListSkeleton,
} from '../../organisms/StockList/StockList';
import { Figure, FigureSkeleton } from '../../molecules/Figure/Figure';
import { stock_mock_data } from './mock_data';

const StockPanel_base = css`
  width: 100%;
  text-align: left;

  .stock-panels {
    display: flex;
    margin-top: 0.5em;
    gap: 0.5em;
  }
  .stock-list,
  .stock-preview {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
`;

interface StockPanelProps {
  theme?: Theme;
  admin?: boolean;
  currentItem: string;
  currentImage?: string;
  data: any;
  setcurrentitem: React.Dispatch<React.SetStateAction<any>>;
  imageLoadError?: any;
  listheadline?: string;
  previewheadline?: string;
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
      gap: '1em',
      width: '100%',
    }}
  >
    <Box sx={{ gridArea: 'data' }}>
      <Skeleton width={'100%'} height={'2em'} />
      <StockListSkeleton />
    </Box>
    <Box sx={{ gridArea: 'preview' }}>
      <Skeleton width={'100%'} height={'2em'} />
      <FigureSkeleton />
    </Box>
  </Box>
);

const UnstyledStockPanel: FC<StockPanelProps> = ({
  admin = false,
  currentItem = 'no item',
  currentImage = 'placeholder',
  imageLoadError,
  ...props
}: StockPanelProps) => {
  return (
    <section {...props}>
      <div className='stock-panels'>
        <div className='stock-list'>
          <Typography variant='body1'>{props.listheadline? props.listheadline: 'Items'}</Typography>
          <StockList
            data={props.data}
            admin={admin}
            setcurrentitem={props.setcurrentitem}
            imageLoadError={undefined}
          />
        </div>
        <div />
        <div className='stock-preview'>
          <Typography variant='body1'>{props.previewheadline? props.previewheadline: 'Preview'}</Typography>
          <Figure
            src={`${process.env.NEXT_PUBLIC_BASE_PATH&&process.env.NEXT_PUBLIC_BASE_PATH}/img/${currentImage}.jpg`}
            alt={currentItem}
            figcaption={currentItem}
            imageLoadError={imageLoadError}
          />
        </div>
      </div>
    </section>
  );
};

export const StockPanelView = styled(UnstyledStockPanel)`
  ${StockPanel_base}
  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
    .stock-panels {
      flex-direction: column-reverse;
    }
  }
`;
