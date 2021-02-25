import Link from '../src/Link';
import Button from '@material-ui/core/Button';

export default function New({ type }) {
    return (
          <Button variant="contained" color="primary" naked>
            Create New {type}
          </Button>
    )
}