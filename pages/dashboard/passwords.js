import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../../src/ProTip';
import Copyright from '../../src/Copyright';
import New from '../../components/new';

export default function Passwords() {
    return (
        <Container maxWidth="sm">
        <Box my={4}>
            <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
            Passwords
          </Typography>
            </Box>
          <New entryType='Password' />
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    )
}