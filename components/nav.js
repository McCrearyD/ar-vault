import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VpnKey from '@material-ui/icons/VpnKey'
import Help from '@material-ui/icons/Help'
import Settings from '@material-ui/icons/Settings'
import Dashboard from '@material-ui/icons/Dashboard'
import Note from '@material-ui/icons/Note'
import {trimAddress, useAddress, useHasAddress} from '../src/hooks/address'
import CircularProgress from '@material-ui/core/CircularProgress';

const upperMap = {
  'Dashboard': <Dashboard />, 
  'Passwords': <VpnKey />, 
  'Secret Notes': <Note />
}

const lowerMap = {
  'Help': <Help />, 
  'Settings': <Settings />
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  // TODO: fix display (move to right)
  addressDisplay: {
    position: 'relative',
    float: 'right'
  },
}));

export default function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const address = useAddress();
  const hasAddress = useHasAddress();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let sideMenu = undefined
  if (hasAddress) {
    sideMenu = (
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
    )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="relative"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {sideMenu}

          <Typography variant="h6" noWrap>
            ArVault
          </Typography>

          <div className={classes.addressDisplay}>
            {address.length > 0
              ? <a>{trimAddress(address)}</a>
              : <CircularProgress color="secondary"/>}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {Object.keys(upperMap).map(key => {
            return (
              <ListItem button key={key}>
                <ListItemIcon>{upperMap[key]}</ListItemIcon>
                <ListItemText primary={key} />
              </ListItem>
            )
          })}
        </List>
        <Divider />
        <List>
        {Object.keys(lowerMap).map(key => {
            return (
              <ListItem button key={key}>
                <ListItemIcon>{lowerMap[key]}</ListItemIcon>
                <ListItemText primary={key} />
              </ListItem>
            )
          })}
        </List>
      </Drawer>
    </div>
  );
}