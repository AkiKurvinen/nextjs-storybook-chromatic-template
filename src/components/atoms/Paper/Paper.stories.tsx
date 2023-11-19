import { Paper, Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Paper> = {
  title: 'Components/Atoms/Paper',
  component: Paper,
  tags: ['autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Elevation0: Story = {
  args: {
    children: [
      <Box key={'1'} sx={{ p: 2 }}>
        Elevation 0
      </Box>,
    ],
    variant: 'elevation',
    elevation: 0,
  },
};
export const Outlined: Story = {
  args: {
    children: [
      <Box key={'o'} sx={{ p: 2 }}>
        Outlined
      </Box>,
    ],
    variant: 'outlined',
  },
};
export const Elevation1: Story = {
  args: {
    children: [
      <Box key={'1'} sx={{ p: 2 }}>
        Elevation 1
      </Box>,
    ],
    variant: 'elevation',
    elevation: 1,
  },
};
export const Elevation2: Story = {
  args: {
    children: [
      <Box key={'2'} sx={{ p: 2 }}>
        Elevation 2
      </Box>,
    ],
    variant: 'elevation',
    elevation: 2,
  },
};
export const Elevation3: Story = {
  args: {
    children: [
      <Box key={'3'} sx={{ p: 2 }}>
        Elevation 3
      </Box>,
    ],
    variant: 'elevation',
    elevation: 3,
  },
};
export const Elevation4: Story = {
  args: {
    children: [
      <Box key={'4'} sx={{ p: 2 }}>
        Elevation 4
      </Box>,
    ],
    variant: 'elevation',
    elevation: 4,
  },
};
export const Elevation6: Story = {
  args: {
    children: [
      <Box key={'6'} sx={{ p: 2 }}>
        Elevation 6
      </Box>,
    ],
    variant: 'elevation',
    elevation: 6,
  },
};
export const Elevation8: Story = {
  args: {
    children: [
      <Box key={'8'} sx={{ p: 2 }}>
        Elevation 8
      </Box>,
    ],
    variant: 'elevation',
    elevation: 8,
  },
};
export const Elevation16: Story = {
  args: {
    children: [
      <Box key={'16'} sx={{ p: 2 }}>
        Elevation 16
      </Box>,
    ],
    variant: 'elevation',
    elevation: 16,
  },
};
export const Elevation24: Story = {
  args: {
    children: [
      <Box key={'24'} sx={{ p: 2 }}>
        Elevation 24
      </Box>,
    ],
    variant: 'elevation',
    elevation: 24,
  },
};
