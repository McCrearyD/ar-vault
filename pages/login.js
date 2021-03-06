import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { useHasAddress } from '../src/hooks/address'
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Login() {
  const classes = useStyles()
  const hasAddress = useHasAddress()

  let inner = (
    <div>
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )

  if (!hasAddress) {
    inner = (
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Log In
          </Typography>

          Method 1:{' '}
          <Link href="https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap" color="secondary">
            Download ArConnect from the google webstore
          </Link>

          Method 2:{' '}
          <input type="file" />
          <ProTip />
          <Copyright />
        </Box>
    )
  } 

  return (
      <Container maxWidth="sm">
        {inner}
      </Container>
  )
}
