import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#020202',
    },
    secondary: {
      main: '#260005',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#595959',
    },
  },
});

export default theme;
