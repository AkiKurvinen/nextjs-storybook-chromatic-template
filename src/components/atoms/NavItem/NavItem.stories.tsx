import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Components/Atoms/NavItem',
  component: NavItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    children: ['item'],
  },
};
export const Invert: Story = {
  args: {
    children: ['item'],
    invert: true,
  },
};
