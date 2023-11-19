import type { Meta, StoryObj } from '@storybook/react';
import { StockPanelView, StockPanelSkeleton } from './StockPanelView';
import * as React from 'react';
import { chromaticThemeDeviceModes } from '../../../../.storybook/modes';
import { stock_mock_data } from './mock_data';

const meta: Meta<typeof StockPanelView> = {
  title: 'Components/Organisms/StockPanel',
  component: StockPanelView,
  tags: ['autodocs'],
  parameters: {
    chromatic: { modes: chromaticThemeDeviceModes },
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=48-1460',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
  argTypes: {
    admin: {
      control: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof StockPanelView>;

export const Deault: Story = {
  args: {
    data: stock_mock_data,
    currentItem: 'Apples',
    currentImage: 'apples',
  },
};

export const Loading: Story = {
  render: () => <StockPanelSkeleton />,
};
