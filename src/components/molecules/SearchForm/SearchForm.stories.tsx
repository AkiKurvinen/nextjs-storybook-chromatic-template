import type { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from './SearchForm';

const meta: Meta<typeof SearchForm> = {
  title: 'Components/Molecules/SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;
type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
  args: {
    textfieldlabel: 'Keywords',
    buttonlabel: 'Search',
  },
};
export const OnlyIcon: Story = {
  args: {
    onlyicon: true,
  },
};
