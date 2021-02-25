import TextField from '@material-ui/core/TextField'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button, DialogActions, makeStyles } from '@material-ui/core';
import { Lock } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  lock: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

export function PasswordForm({handleClose}) {
  const classes = useStyles();
  
  return (
    <>
      <DialogContent>
        <DialogContentText>

          Create a new password entry to be stored on the <a target='_blank' href="https://arweave.org">arweave.org</a> network.{' '}
          All information will be encrypted using your{' '}
          <a target='_blank' href="https://docs.arweave.org/info/wallets/wallet-faq">arweave wallet</a>{' '}
          private key before being sent to the arweave backend.
        </DialogContentText>       

        <DialogContentText>
          <Lock className={classes.lock} />
          Warning: do NOT share your private key or passphrase with anyone.
        </DialogContentText>

        <form className={classes.root} noValidate autoComplete="off">
        <TextField
          autoFocus
          required
          margin="dense"
          id="identifier"
          label="Website/Identifier"
          type="identifier"
          fullWidth/>

      {/* TODO: email suggestions */}
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth/>

        <TextField
          margin="dense"
          id="username"
          label="Username/Login ID"
          type="username"
          fullWidth/>

        {/* TODO: show/hide button for password */}
        {/* TODO: add password generator button */}
        <TextField
          required
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth/>
      </form>
      </DialogContent>


      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Create
        </Button>
      </DialogActions>
    </>
  )
}