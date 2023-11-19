import type { Meta, StoryObj } from '@storybook/react';
import { CustomDialog } from './Dialog';

const meta: Meta<typeof CustomDialog> = {
  title: 'Components/Molecules/Dialog',
  component: CustomDialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomDialog>;

export const Default: Story = {
  args: {},
};
