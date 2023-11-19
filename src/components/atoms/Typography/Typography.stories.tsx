import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Components/Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    // stories/FontGallery.stories.tsx
    chromatic: { disableSnapshot: true },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const h1: Story = {
  args: {
    children: ['Typography'],
    variant: 'h1',
  },
};
export const h2: Story = {
  args: {
    children: ['Typography'],
    variant: 'h2',
  },
};
export const h3: Story = {
  args: {
    children: ['Typography'],
    variant: 'h3',
  },
};
export const h4: Story = {
  args: {
    children: ['Typography'],
    variant: 'h4',
  },
};
export const h5: Story = {
  args: {
    children: ['Typography'],
    variant: 'h5',
  },
};
export const h6: Story = {
  args: {
    children: ['Typography'],
    variant: 'h6',
  },
};

export const body1: Story = {
  args: {
    children: ['Typography'],
    variant: 'body1',
  },
};
export const body2: Story = {
  args: {
    children: ['Typography'],
    variant: 'body1',
  },
};
export const overline: Story = {
  args: {
    children: ['Typography'],
    variant: 'overline',
  },
};
export const subtitle1: Story = {
  args: {
    children: ['Typography'],
    variant: 'subtitle1',
  },
};
