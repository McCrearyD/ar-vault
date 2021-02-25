import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { PasswordForm } from './forms/password-form'
import { useMediaQuery, useTheme } from '@material-ui/core';


export default function NewDialog({entryType}) {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" variant="extended" onClick={handleClickOpen}>
      <AddIcon />
      {entryType}
    </Fab>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New {entryType}</DialogTitle>
        <PasswordForm handleClose={handleClose}></PasswordForm>
      </Dialog>
    </div>
  );
}
