import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import PopupDialog from '../components/popup-dialog'

export default function Index() {
    return (
        <Container maxWidth="sm">
        <Box my={4}>
            <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
            ArVault
          </Typography>
            </Box>

          <PopupDialog title='Login' entryType='Login' />
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    )
}