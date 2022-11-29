import { Grid } from '@mui/material';

import AppBar from './components/AppBar';
import Sidebar from './components/Sidebar';

export default function ExamplePage() {
  return (
    <Grid container columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}>
      <AppBar />
      <Grid item md={3}>
        <Sidebar />
      </Grid>
    </Grid>
  );
}
