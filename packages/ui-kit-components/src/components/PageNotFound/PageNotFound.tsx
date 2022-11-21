import { Box, Paper, Typography } from '@mui/material';

import { LogoBrand } from '../Branding/LogoBrand';
import { LogoText } from '../Branding/LogoText';
import { Button } from '../Button';
import { ReactComponent as SadFace } from './sad-face.svg';

const styles = {
  paper: {
    minWidth: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'relative',
  },
  sadFace: {
    width: 253,
    height: 253,
  },
  typography: {
    margin: '10px',
    height: '47px',
  },
};

export interface Props {
  onNavigateHome: (e: React.BaseSyntheticEvent) => void;
}

const PageNotFound = ({ onNavigateHome }: Props) => (
  <Paper sx={styles.paper} elevation={0} square={true}>
    <Box sx={{ position: 'absolute', top: 30, left: 30 }}>
      <LogoBrand height={74} width={76} />
    </Box>
    <SadFace sx={styles.sadFace} />
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h3" align="center" sx={styles.typography}>
        Page not found!
      </Typography>
      <Typography variant="h1" align="center" sx={styles.typography}>
        We’re sorry, the page you have requested does not exist.
      </Typography>
      <Button variant="SECONDARY" click={onNavigateHome}>
        Go Back Home
      </Button>
    </Box>
    <Box sx={styles.sadFace} />
    <Box sx={{ position: 'absolute', bottom: 30, right: 30 }}>
      <LogoText width={116} height={34} />
      <Typography variant="body2">© 2022 Reactive Analytics</Typography>
    </Box>
  </Paper>
);

export default PageNotFound;
