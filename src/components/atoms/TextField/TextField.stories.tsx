import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@mui/material';

const meta: Meta<typeof TextField> = {
  title: 'Components/Atoms/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=103-288&mode=dev',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Input',
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=103-287&mode=dev',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
};

export const Value: Story = {
  args: {
    label: 'Input',
    value: 'Value here',
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=103-295&mode=dev',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
};
