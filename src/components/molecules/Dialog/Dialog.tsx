import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

export interface SimpleDialogProps {
  isopen?: boolean;
  selectedValue: string;
}

function UnstyledCustomDialog({ isopen = true, ...props }: SimpleDialogProps) {
  const [open, setOpen] = React.useState(isopen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={open} transitionDuration={0} {...props}>
      <Box
        sx={{
          display: 'flex',
          gap: '2em',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1em 2em',
        }}
      >
        <Typography variant='h4'>Dialog</Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, vel?
        </Typography>
        <div className='actions'>
          <Button variant='outlined' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Accept
          </Button>
        </div>
      </Box>
    </Dialog>
  );
}

export const CustomDialog = styled(UnstyledCustomDialog)`
  .actions {
    display: flex;
    justify-content: space-between;
  }
  button {
    align-self: flex-end;
  }
`;
