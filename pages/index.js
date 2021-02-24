import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { useAddress } from '../src/hooks/useAddress'
import { ArConnectInstructions } from '../components/instructions'

export default function Index() {
  const address = useAddress()

  let inner
  if (address.length <= 0) {
    inner = <ArConnectInstructions />
  } else {
    inner = (
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
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
