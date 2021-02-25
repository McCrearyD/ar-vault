import TextField from '@material-ui/core/TextField'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


export function PasswordForm() {
  return (
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We will send
        updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Email Address"
        type="email"
        fullWidth/>
    </DialogContent>
  )
}