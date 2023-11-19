import type { Meta, StoryObj } from '@storybook/react';
import { StockList, StockListSkeleton } from './StockList';
import { chromaticThemeDeviceModes } from '../../../../.storybook/modes';

const meta: Meta<typeof StockList> = {
  title: 'Components/Organisms/StockList',
  component: StockList,
  tags: ['autodocs'],
  parameters: {
    chromatic: { modes: chromaticThemeDeviceModes },
  },
  argTypes: {
    data: {
      type: 'string',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StockList>;

const mock_json = { items: { Apples: 10, Bananas: 4, Oranges: undefined } };

export const Default: Story = {
  args: {
    heading: 'Items',
    data: mock_json,
  },
};

export const Loading: Story = {
  render: () => <StockListSkeleton />,
};
