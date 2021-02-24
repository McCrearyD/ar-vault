import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';


export function ArConnectInstructions() {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            ArConnect is not set up!
          </Typography>
          <Link href="https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap" color="secondary">
            Download it from the google webstore
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    )
}