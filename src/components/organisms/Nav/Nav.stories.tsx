import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';
import { Link } from '@mui/material';
import Pear from '../../../../public/img/svg/pear.svg';

const meta: Meta<typeof Nav> = {
  title: 'Components/Organisms/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  args: {
    logo: (
      <a href='#'>
        <Pear />
        Fruity Oy
      </a>
    ),
    name: 'Fruity Oy',
    children: [
      <Link key='1' href='/stock'>
        stock
      </Link>,
      <Link key='2' href='/about'>
        about
      </Link>,
      <Link key='3' href='/contact'>
        contact
      </Link>,
    ],
  },
};
