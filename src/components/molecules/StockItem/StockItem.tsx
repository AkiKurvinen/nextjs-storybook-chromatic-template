import {
  IconButton,
  Skeleton,
  SkeletonProps,
  Theme,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import styled from '@emotion/styled';

interface StockItemProps {
  label?: string;
  amount?: number;
  isLoading?: boolean;
  theme?: Theme;
  error?: boolean;
  isAdmin?: boolean;
  isOut?: string | undefined;
  color?: 'primary' | 'secondary' | undefined;
  setcurrentitem: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const StockItemSkeleton: FC<SkeletonProps> = ({ ...props }) => (
  <Skeleton
    variant='rectangular'
    animation='wave'
    width={props.width ? props.width : '100%'}
  >
    <li>
      <p>StockItem</p>
    </li>
  </Skeleton>
);

const UnstyledStockItem: FC<StockItemProps> = ({
  label,
  amount,
  isAdmin,
  isOut,
  color = 'primary',
  ...props
}: StockItemProps) => {
  // Cases for Storybook demo:
  // {amount ? amount : 'N/A'}
  // {isOut || amount ? isOut: (amount ? amount : 'N/A')}
  // {isOut ? isOut: (amount ? amount : 'N/A')}

  return (
    <li
      {...props}
      onClick={() => {
        props.setcurrentitem(label);
      }}
    >
      <Typography variant='body1' sx={{ margin: 0, padding: 0 }}>
        {label}
      </Typography>
      <Typography
        variant='body1'
        sx={{ margin: 0, padding: 0, fontWeight: 'bold' }}
      >
        {isOut ? isOut : amount ? amount : 'N/A'}
      </Typography>
      {isAdmin && (
        <IconButton>
          <HiExternalLink title='Make order' size={32} />
        </IconButton>
      )}
    </li>
  );
};

export const StockItem = styled(UnstyledStockItem)`
  margin-bottom: 0.25em;
  padding: 1em 3em 1em 2em;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.palette.background.paper};

  background-color: ${(props) =>
    props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.primary.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
    cursor: pointer;
  }
  button {
    height: 2em;
    position: absolute;
    right: 0;
    color: ${(props) => props.theme.palette.background.paper};
  }
`;
