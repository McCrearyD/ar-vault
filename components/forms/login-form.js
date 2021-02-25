import TextField from '@material-ui/core/TextField'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button, DialogActions, makeStyles } from '@material-ui/core';
import { Lock } from '@material-ui/icons';
import {DropzoneArea} from 'material-ui-dropzone'
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    lock: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }));


async function handleSubmit(event, keyFile) {
  event.preventDefault()
  console.log(event)
  console.log(keyFile)

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
  const classes = useStyles()
  
  const [keyFile, setKeyFile] = useState()
  
  return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={e => handleSubmit(e, keyFile)}>
      <DialogContent>
        <DialogContentText>
          Drag & drop or click & select your arweave keyfile. If you don't have one, you can get one{' '}
          <a target='_blank' href="https://www.arweave.org/wallet">here</a>.
        </DialogContentText>       

        <DialogContentText>
          <Lock className={classes.lock} />
          Your keyfile does NOT leave your device. It is stored locally and is used for encrypting/decrypting your vault entries.
        </DialogContentText>

        <br />
        <br />

        {/* <TextField
          autoFocus
          required
          margin="dense"
          id="identifier"
          label="Website/Identifier"
          type="identifier"
          fullWidth/> */}
        <DropzoneArea onChange={setKeyFile} filesLimit={1} dropzoneText="Select keyfile" />
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