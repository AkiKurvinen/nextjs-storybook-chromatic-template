import type { Meta, StoryObj } from '@storybook/react';
import { FontGallery } from './FontGallery';

const meta: Meta<typeof FontGallery> = {
  title: 'Design Tokens/Fonts',
  component: FontGallery,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=6-116&mode=dev',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FontGallery>;

export const Fonts: Story = {};
