import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import { Box, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Figure_styles = () => css`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  object-fit: contain;

  figcaption {
    text-align: center;
  }
`;
interface FigureProps {
  src: string;
  alt: string;
  figcaption?: string;
  overline?: string;
  imageLoadError?: any;
}
export const FigureSkeleton = () => (
  <Box sx={{ aspectRatio: '3 / 2' }}>
    <Skeleton
      variant='rectangular'
      animation='wave'
      width={'100%'}
      height={'100%'}
    />
  </Box>
);

export const StyledFigure = ({
  src,
  alt,
  figcaption,
  overline,
  ...props
}: FigureProps) => {
  const [currentImage, setCurrentImage] = useState(src);

  useEffect(() => {
    setCurrentImage(src);
  }, [src]);

  const imageLoadErrorFunc = () => {
    setCurrentImage(`${process.env.NEXT_PUBLIC_BASE_PATH}/img/placeholder.jpg`);
  };

  return (
    <>
      <figure {...props}>
        {overline && <Typography variant='body1'>{overline}</Typography>}

        <Image
          src={currentImage}
          alt={alt}
          width={0}
          height={0}
          sizes='100vw'
          onError={() => imageLoadErrorFunc()}
          {...props}
        />

        {figcaption && <figcaption>{figcaption}</figcaption>}
      </figure>
    </>
  );
};
export const Figure = styled(StyledFigure)`
  ${Figure_styles}
`;
