import { LoadingButton } from '@mui/lab';
import { IconButton } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowForward } from '@mui/icons-material';

const meta: Meta<typeof LoadingButton> = {
  title: 'Components/Atoms/Button',
  component: LoadingButton,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=34-25',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
  argTypes: {
    endIcon: {
      control: {
        type: 'select',
        options: {
          ArrowForward: 'ArrowForward',
          ArrowBack: 'ArrowBack',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingButton>;

export const Contained: Story = {
  args: {
    children: ['Button'],
    variant: 'contained',
    endIcon: <ArrowForward />,
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=34-14&mode=dev',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
};

export const Outlined: Story = {
  args: {
    children: ['Button'],
    variant: 'outlined',
    endIcon: <ArrowForward />,
  },
};

export const Text: Story = {
  args: {
    children: ['Button'],
    variant: 'text',
    endIcon: <ArrowForward />,
  },
};

export const Icon: Story = {
  render: () => (
    <IconButton color='primary'>
      <ArrowForward />
    </IconButton>
  ),
};

export const Loading: Story = {
  args: {
    children: ['Button'],
    variant: 'contained',
    loading: true,
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/vnrByYRolXqdr2ui1oCHBU/Untitled?type=whiteboard&node-id=0%3A1&t=QAtVS7e2SaGmzmI4-1',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
};
