import type { Meta, StoryObj } from '@storybook/react';
import { Figure, FigureSkeleton } from './Figure';

const meta: Meta<typeof Figure> = {
  title: 'Components/Molecules/Figure',
  component: Figure,
  tags: ['autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;
type Story = StoryObj<typeof Figure>;

export const WithFigcaption: Story = {
  args: {
    src: './img/apples.jpg',
    alt: 'Picture of apples',
    figcaption: 'Picture of apples',
  },
};

export const WithoutFigcaption: Story = {
  args: {
    src: './img/apples.jpg',
    alt: 'Picture of apples',
  },
};

export const Loading: Story = {
  render: (args: React.ComponentProps<typeof FigureSkeleton>) => (
    <FigureSkeleton />
  ),
};

export const MissingImage: Story = {
  args: {
    src: './img/failed.jpg',
    alt: 'Picture of apples',
  },
};
