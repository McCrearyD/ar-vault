import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../../src/ProTip';
import Link from '../../src/Link';
import Copyright from '../../src/Copyright';
import New from '../../components/new';

export default function Dashboard() {
    return (
        <Container maxWidth="sm">
        <Box my={4}>
            <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
            Dashboard
          </Typography>
            </Box>
          <New entryType='Password' />
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    )
}