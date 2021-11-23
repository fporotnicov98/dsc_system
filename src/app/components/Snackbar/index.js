import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';

const SnackbarContainer = (props) => {
  const {
    openSnack,
    duration,
    message,
    action,
    anchorOrigin,
    classes,
    variant
  } = props

  const [open, setOpen] = React.useState(openSnack);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const hideDuration = duration || 5000
  const anchorOriginDefault = { vertical: 'top', horizontal: 'right' } || anchorOrigin

  return (
      <Snackbar
        open={open}
        classes={classes}
        autoHideDuration={hideDuration}
        anchorOrigin={anchorOriginDefault}
        onClose={handleClose}
        action={action || ''}
      >
        <Alert
          onClose={handleClose}
          severity={variant || 'success'}
        >
          {message}
        </Alert>
      </Snackbar>
  );
};

export default SnackbarContainer;