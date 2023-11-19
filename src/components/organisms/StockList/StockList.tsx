import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  StockItem,
  StockItemSkeleton,
} from '../../molecules/StockItem/StockItem';
import { Box, SkeletonProps, Theme, Typography } from '@mui/material';
import { FC } from 'react';

const StockList_base = css`
  width: 100%;
  padding: 0;
  margin: 0 auto;
  text-align: left;
  box-sizing: border-box;
  list-style: none;
`;

interface StockListProps {
  data?: any;
  heading?: string;
  admin?: boolean;
  theme?: Theme;
  setcurrentitem: React.Dispatch<React.SetStateAction<any>>;
  imageLoadError: any;
}

export const StockListSkeleton: FC<SkeletonProps> = ({ ...props }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.25em' }}>
    <StockItemSkeleton width={'100%'} />
    <StockItemSkeleton width={'100%'} />
    <StockItemSkeleton width={'80%'} />
  </Box>
);

const UnstyledStockList = ({ heading, admin, ...props }: StockListProps) => {
  return (
    <ul {...props}>
      {heading && <Typography variant='body1'>{heading}</Typography>}
      {!props.data && <StockItemSkeleton width={'100%'} />}
      {props.data &&
        props.data.items &&
        Object.keys(props.data.items).map((key, i) => (
          <StockItem
            label={key}
            key={key}
            amount={props.data.items[key] as number}
            isAdmin={admin}
            setcurrentitem={props.setcurrentitem}
          />
        ))}
    </ul>
  );
};

export const StockList = styled(UnstyledStockList)`
  ${StockList_base}
`;
