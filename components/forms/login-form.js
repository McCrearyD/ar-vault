import { useRouter } from 'next/router'
import TextField from '@material-ui/core/TextField'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button, DialogActions, makeStyles, Snackbar } from '@material-ui/core';
import { Lock } from '@material-ui/icons';
import {DropzoneArea} from 'material-ui-dropzone'
import { useState } from 'react';
import { storeKey, getAddress } from '../../src/stores/keyFileStore';
import MuiAlert from '@material-ui/lab/Alert';

const successDuration = 1000

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    lock: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }));

async function logIn(jwk) {
    await storeKey(jwk)
    
}

async function handleSubmit(event, keyFile, onSuccess) {
  event.preventDefault()
  console.log(event)
  console.log(keyFile)

  if (keyFile.length !== 1) {
    throw Error('keyfile should have length = 1.')
  }
  keyFile = keyFile[0]

  if (keyFile.type !== "application/json") {
    throw Error(`expected keyFile type to be "application/json", not "${keyFile.type}".`)
  }

  const reader = new FileReader();
  reader.onload = async () => {
    if (typeof reader.result !== "string") return goto("/");

    // reader.result contains the text in the keyfile
    await logIn(reader.result)
    onSuccess()
  };

  reader.readAsText(keyFile);
}


export function LoginForm({handleClose}) {
  const classes = useStyles()
  const router = useRouter()

  const [keyFile, setKeyFile] = useState()
  const [open, setOpen] = useState()

  const onSuccess = () => {
    setOpen(true)
  }

  const toDashboard = () => {
    router.push('/dashboard')
  }
  
  return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={e => handleSubmit(e, keyFile, onSuccess)}>
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

      <Snackbar open={open} autoHideDuration={successDuration} onClose={toDashboard}>
        <Alert onClose={handleClose} severity="success">
            Login success! Sending you to the dashboard...
        </Alert>
        </Snackbar>
      </form>
  )
}