import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Typography } from '@ui-kit-2022/components';
import { dark, light } from '@ui-kit-2022/theme';

import TickerBar from '../../components/TickerBar';
import { TopBar } from '../building-blocks/common';
import TickerBarMobile from '../building-blocks/table/TickerBarMobile';

const FooterIndexTicker: React.FC = () => {
  const theme = useTheme();
  const customizedTheme = theme === light ? dark : light;
  const matchMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <TopBar title={'Special Table: Footer index ticker'} />
      <Container disableGutters={true}>
        <Box p={5}>
          <Box>
            <Typography variant="h4" mb={3}>
              Purpose
            </Typography>
            <Typography variant="body2">
              This is a guide to the special case footer on the bottom of the page, which
              is composed of modified table cells.
            </Typography>
          </Box>
          <Box mt={7}>
            <Grid container columnSpacing={5} alignItems="center">
              <Grid item md={2} xs={12}>
                <Box>
                  <Typography variant="h4" mb={3}>
                    Cells
                  </Typography>
                  <Typography variant="body2" mb={3}>
                    The footer has three cells, each with:
                  </Typography>

                  <Typography variant="body2">
                    Ticker
                    <br />
                    Current price
                    <br />
                    Direction (indicated by color and an arrow)
                    <br />
                    Price movement and percentage movement amounts
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={10} xs={12}>
                <Box px={matchMd ? 5 : 1} mt={matchMd ? {} : 4}>
                  <TickerBar />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box mt={7}>
            <Grid container columnSpacing={5} alignItems="flex-start">
              <Grid item md={2} xs={12}>
                <Box>
                  <Typography variant="h4" mb={3}>
                    Alignment
                  </Typography>
                  <Typography variant="body2" mb={3}>
                    When in a viewport wide enough to show it this way, all data should be
                    in a left-to-right inline layout. The three tickers should align to
                    the left of the bar, leaving the space to the right open.
                  </Typography>
                  <Typography variant="body2">
                    Smaller views may require a stacked configuration of the cells. Those
                    three cells should be centered within the bounding container.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={10} xs={12}>
                <Box>
                  <ThemeProvider theme={customizedTheme}>
                    <Box
                      bgcolor={customizedTheme.palette.background.paper}
                      color={customizedTheme.palette.text.primary}
                      py={2}
                      px={matchMd ? 5 : 1}
                      mb={2}
                      mt={matchMd ? {} : 4}
                    >
                      <TickerBar />
                    </Box>
                  </ThemeProvider>
                  {matchMd && (
                    <Box display={'flex'}>
                      <ThemeProvider theme={customizedTheme}>
                        <Box
                          bgcolor={customizedTheme.palette.background.paper}
                          color={customizedTheme.palette.text.primary}
                          display="flex"
                          alignItems={'flex-end'}
                          minWidth={'388px'}
                          height={'812px'}
                          mr={4}
                          pb={2}
                        >
                          <TickerBarMobile />
                        </Box>
                      </ThemeProvider>
                      <Box
                        minWidth={'563px'}
                        height={'812px'}
                        border={`1px solid ${theme.palette.divider}`}
                        display="flex"
                        alignItems={'flex-end'}
                        pb={2}
                      >
                        <TickerBarMobile />
                      </Box>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default FooterIndexTicker;
