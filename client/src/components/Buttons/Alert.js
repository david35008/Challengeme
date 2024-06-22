import React, { useCallback } from 'react';
import { styled } from '@mui/system';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Box } from '@mui/material';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Root = styled(Box)(({ theme }) => ({
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
}));

export default function CustomizedSnackbars({
  open = true,
  type = 'success',
  setOpen,
  text = 'Success!',
}) {
  const handleClose = useCallback(
    (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    },
    [setOpen],
  );

  return (
    <Root>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {text}
        </Alert>
      </Snackbar>
    </Root>
  );
}
