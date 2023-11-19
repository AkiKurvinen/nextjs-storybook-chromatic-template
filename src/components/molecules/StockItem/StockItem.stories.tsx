import type { Meta, StoryObj } from '@storybook/react';
import { StockItem, StockItemSkeleton } from './StockItem';
import { chromaticThemeDeviceModes } from '../../../../.storybook/modes';

const meta: Meta<typeof StockItem> = {
  title: 'Components/Molecules/StockItem',
  component: StockItem,
  tags: ['autodocs'],
  parameters: {
    chromatic: { modes: chromaticThemeDeviceModes },
  },
  argTypes: {
    label: {
      type: 'string',
      control: 'text',
    },
    amount: {
      type: 'number',
      control: 'number',
    },
    isAdmin: {
      type: 'boolean',
      control: 'boolean',
    },
    isOut: {
      type: 'boolean',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StockItem>;

export const Default: Story = {
  args: {
    label: 'Apples',
    amount: 10,
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=48-545&mode=dev',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
};
/*
export const OutOfStock: Story = {
  args: {
    label: 'Apples',
    isOut: 'Sold out!',
  },
};
*/
export const WithoutAmount: Story = {
  args: {
    label: 'Apples',
  },
};

export const Admin: Story = {
  args: {
    label: 'Apples',
    amount: 20,
    isAdmin: true,
  },
};

export const Loading: Story = {
  render: () => <StockItemSkeleton />,
};
