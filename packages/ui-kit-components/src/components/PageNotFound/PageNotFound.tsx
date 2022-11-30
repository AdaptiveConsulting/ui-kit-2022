import { Box, Paper, Theme, Typography } from '@mui/material';

import { LogoText } from '../Branding/branding';
import { Button } from '../Button';
import {
  default as TextSearch,
  TextSearchOptionBase,
  TextSearchProps,
} from '../TextSearch/TextSearch';
import { ReactComponent as SadFace } from './sad-face.svg';

const styles = {
  svgColor: ({ palette }: Theme) => ({
    color: palette.mode === 'light' ? 'paper.black' : 'paper.white',
  }),
  paper: ({ breakpoints }: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: 5,
    [breakpoints.down('sm')]: {
      p: 4,
    },
  }),
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  sadFace: ({ breakpoints }: Theme) => ({
    height: 128,
    width: 'auto',
    alignSelf: 'center',
    [breakpoints.down('sm')]: {
      height: 96,
    },
  }),
  header: {
    textTransform: 'none',
  },
  logo: {
    width: 76,
    height: 'auto',
  },
  logoText: {
    width: 116,
    height: 'auto',
  },
  textSearch: {
    maxWidth: 400,
    mx: 'auto',
    width: '100%',
    p: 2,
  },
  button: {
    '& > .MuiButton-root': { p: 3 },
    textAlign: 'center',
  },
};

export interface Props<T extends TextSearchOptionBase> {
  onNavigateHome: (e: React.BaseSyntheticEvent) => void;
  fitContainer: boolean;
  inputProps: TextSearchProps<T>;
}

const PageNotFound = <T extends TextSearchOptionBase>({
  onNavigateHome,
  fitContainer,
  inputProps,
}: Props<T>) => (
  <Paper
    sx={[
      {
        minWidth: `100${fitContainer ? '%' : 'vw'}`,
        minHeight: `100${fitContainer ? '%' : 'vh'}`,
      },
      styles.paper,
    ]}
    elevation={0}
    square={true}
  >
    <Box
      sx={[styles.container, { maxHeight: '646px' }]}
      flex="1 1 0"
      justifyContent="center"
      gap={6}
    >
      <SadFace sx={[styles.sadFace, styles.svgColor]} />
      <Box sx={styles.container} gap={2}>
        <Typography variant="h4" sx={styles.header} align="center">
          We couldn&apos;t find this page.
        </Typography>
        <Typography variant="body2" align="center">
          Let’s help you find what you’re looking for.
        </Typography>
      </Box>
      <Box sx={styles.textSearch}>
        <TextSearch {...inputProps} fullWidth={true} />
      </Box>
      <Box sx={styles.button}>
        <Button variant="SECONDARY" click={onNavigateHome}>
          Take Me Back
        </Button>
      </Box>
    </Box>
    <Box sx={styles.container} justifyContent="flex-end">
      <Box alignSelf="flex-end">
        <LogoText sx={[styles.logoText, styles.svgColor]} />
        <Typography variant="body2" sx={styles.logoText}>
          © 2022 Reactive Analytics
        </Typography>
      </Box>
    </Box>
  </Paper>
);

export default PageNotFound;
