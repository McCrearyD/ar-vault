import TextField from '@material-ui/core/TextField'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button, DialogActions, makeStyles } from '@material-ui/core';
import { Lock } from '@material-ui/icons';
import Arweave from 'arweave';
import { useAddress } from '../../src/hooks/address';

const useStyles = makeStyles((theme) => ({
    lock: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }));


async function handleSubmit(event) {
  event.preventDefault()
  console.log(event)

  /*
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
  */
}


export function LoginForm({handleClose}) {
  const classes = useStyles();
  
  return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <DialogContent>
        <DialogContentText>
          Drag and drop your arweave keyfile. If you don't have one, you can get one{' '}
          <a target='_blank' href="https://www.arweave.org/wallet">here</a>.
        </DialogContentText>       

        <DialogContentText>
          <Lock className={classes.lock} />
          Your keyfile does not leave your computer. It is stored locally and is used for encrypting/decrypting your vault entries.
        </DialogContentText>

        {/* <TextField
          autoFocus
          required
          margin="dense"
          id="identifier"
          label="Website/Identifier"
          type="identifier"
          fullWidth/> */}
      </DialogContent>


      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Login
        </Button>
      </DialogActions>
      </form>
  )
}