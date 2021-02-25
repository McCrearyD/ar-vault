import TextField from '@material-ui/core/TextField'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button, DialogActions, makeStyles } from '@material-ui/core';
import { Lock } from '@material-ui/icons';
import Arweave from 'arweave';
import { useAddress } from '../../src/hooks/address';

const enc = new TextEncoder()
const dec = new TextDecoder()

const passwordEntryKeys = ['identifier', 'email', 'username', 'password']

const useStyles = makeStyles((theme) => ({
  lock: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

function extractJSONFromFormSubmitEvent(event, keys) {
  const entry = {}
  keys.forEach(key => {
    entry[key] = event.target[key].value
  })
  return entry
}

async function handleSubmit(event, pubKey) {
  event.preventDefault()
  const entry = extractJSONFromFormSubmitEvent(event, passwordEntryKeys)
  const entryStr = JSON.stringify(entry)
  const data = enc.encode(entryStr)
  const encryptedEntry = await Arweave.crypto.encrypt(data, pubKey)
  console.log(entry)
  console.log(data)
  console.log('was encrypted with pubkey')
  console.log(pubKey)
  console.log('output of which is')
  console.log(dec.decode(encryptedEntry))
}


export function PasswordForm({handleClose}) {
  const classes = useStyles();
  const pubKey = '1394571934750981743095'; // TODO: use wallet pubkey
  
  return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={e => handleSubmit(e, pubKey)}>
      <DialogContent>
        <DialogContentText>
          Create a new password entry to be stored on the <a target='_blank' href="https://arweave.org">arweave.org</a> network.{' '}
          All information will be encrypted using your{' '}
          <a target='_blank' href="https://docs.arweave.org/info/wallets/wallet-faq">arweave wallet</a>{' '}
          private key before being sent to the arweave backend.{' '}
        </DialogContentText>       

        <DialogContentText>
          <Lock className={classes.lock} />
          Warning: do NOT share your private key or passphrase with anyone.
        </DialogContentText>

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
      </DialogContent>


      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Create
        </Button>
      </DialogActions>
      </form>
  )
}