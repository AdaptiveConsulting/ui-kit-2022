import { Grid } from '@mui/material';

export default function ExamplePage() {
  return (
    <Grid
      container
      columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
      sx={{ height: '100%' }}
    ></Grid>
  );
}
