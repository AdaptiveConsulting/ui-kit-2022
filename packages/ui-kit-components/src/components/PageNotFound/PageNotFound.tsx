import { Box, Paper, Typography } from '@mui/material';

import { LogoLarge, LogoText } from '../Branding/branding';
import { Button } from '../Button';
import { ReactComponent as SadFace } from './sad-face.svg';

const styles = {
  paper: {
    display: 'flex',
    flexDirection: 'column',
    p: 6,
    ['@media (max-height:600px)']: {
      p: 4,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sadFace: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    ['@media (max-height:600px)']: {
      width: 150,
      height: 150,
    },
  },
  typography: {
    margin: '10px',
    textTransform: 'none',
  },
  logo: {
    height: 74,
    width: 76,
    ['@media (max-height:600px)']: {
      height: 53,
      width: 56,
    },
  },
  logoText: {
    width: 116,
    height: 34,
  },
};

export interface Props {
  onNavigateHome: (e: React.BaseSyntheticEvent) => void;
  fitContainer: boolean;
}

const PageNotFound = ({ onNavigateHome, fitContainer }: Props) => (
  <Paper
    sx={{
      minWidth: `100${fitContainer ? '%' : 'vw'}`,
      minHeight: `100${fitContainer ? '%' : 'vh'}`,
      ...styles.paper,
    }}
    elevation={0}
    square={true}
  >
    <Box sx={{ flex: '1 1 0', ...styles.container }}>
      <Box>
        <LogoLarge sx={styles.logo} />
      </Box>
      <SadFace sx={styles.sadFace} />
      <Typography variant="h3" align="center" sx={styles.typography}>
        Page not found!
      </Typography>
    </Box>
    <Box sx={{ flex: '1 0 0', ...styles.container }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h1" align="center" sx={styles.typography}>
          We’re sorry, the page you have requested does not exist.
        </Typography>
        <Box sx={{ mt: 6, '& > .MuiButton-root': { p: 3 } }}>
          <Button variant="SECONDARY" click={onNavigateHome}>
            Go Back Home
          </Button>
        </Box>
      </Box>
      <Box sx={{ alignSelf: 'flex-end' }}>
        <LogoText sx={styles.logoText} />
        <Typography variant="body2">© 2022 Reactive Analytics</Typography>
      </Box>
    </Box>
  </Paper>
);

export default PageNotFound;
