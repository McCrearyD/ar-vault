import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import { trimAddress, useAddress } from '../src/hooks/useAddress'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  addressDisplay: {
    float: 'right'
  },
  title: {
    flexGrow: 1
  }
}));

export default function Nav() {
  const classes = useStyles();
  const address = useAddress()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ArVault
          </Typography>
          
          <div className={classes.addressDisplay}>
            {address.length > 0
              ? <a>{trimAddress(address)}</a>
              : <CircularProgress color="secondary" />
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}