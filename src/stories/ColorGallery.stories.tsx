import type { Meta, StoryObj } from '@storybook/react';
import { ColorGallery } from './ColorGallery';

const meta: Meta<typeof ColorGallery> = {
  title: 'Design Tokens/Colors',
  component: ColorGallery,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ColorGallery>;

export const Colors: Story = {};
