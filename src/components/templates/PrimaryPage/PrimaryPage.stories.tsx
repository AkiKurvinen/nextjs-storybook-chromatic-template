import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryPage } from './PrimaryPage';
import * as React from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Box } from '@mui/material';

const meta: Meta<typeof PrimaryPage> = {
  title: 'Components/Templates/PrimaryPage',
  component: PrimaryPage,
  tags: ['autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XcEEa8xxSoDs7sANZKmZTV/TemplateDesignSystem?type=design&node-id=74-177&mode=dev',
      accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
    },
  },
  argTypes: {
    children: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PrimaryPage>;

const PrimaryPageContent = (color: string): EmotionJSX.Element => (
  <Box sx={{ backgroundColor: color, width: '100%', height: '100%' }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
    voluptates sint officia quod odit possimus quaerat aperiam! Recusandae
    suscipit veritatis, fugiat atque, doloremque, maiores laudantium labore
    tenetur illum ducimus similique.
  </Box>
);
export const Default: Story = {
  render: (args: React.ComponentProps<typeof PrimaryPage>) => (
    <PrimaryPage
      nav={PrimaryPageContent('#999')}
      article={PrimaryPageContent('#888')}
      aside={PrimaryPageContent('#777')}
      footer={PrimaryPageContent('#666')}
    />
  ),
};
