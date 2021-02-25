import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { PasswordForm } from './forms/password-form'
import { useMediaQuery, useTheme } from '@material-ui/core';
import { LoginForm } from './forms/login-form';


const specs = {
  'password': {
    'icon': <AddIcon />,
    'form': handleClose => <PasswordForm handleClose={handleClose} />
  },
  'login': {
    'icon': () => null,
    'form': handleClose => <LoginForm handleClose={handleClose} />
  }
}


export default function PopupDialog({entryType, title}) {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const entryId = entryType.toLowerCase()
  const spec = specs[entryId]

  return (
    <div>
      <Fab color="primary" variant="extended" onClick={handleClickOpen}>
      {spec.icon}
      {entryType}
    </Fab>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        {spec.form(handleClose)}
      </Dialog>
    </div>
  );
}
