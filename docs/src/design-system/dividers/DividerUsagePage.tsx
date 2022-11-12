import { Box, Container, Grid } from '@mui/material';
import { useTheme } from '@mui/material';
import { Typography } from '@ui-kit-2022/components';

import { TopBar } from '../building-blocks/common';
import DashedLineExample from '../building-blocks/divider/DashedLineExample';
import DividerCompositionExample from '../building-blocks/divider/DividerCompositionExample';
import TableDividerExample from '../building-blocks/divider/TableDividerExample';

const DividerUsagePage = () => {
  const { palette } = useTheme();
  return (
    <>
      <TopBar title="Dividers" />
      <Container disableGutters={true}>
        <Box p={5}>
          <Box>
            <Typography variant="h4" mb={3}>
              Purpose
            </Typography>
            <Typography variant="body2">
              Dividers are decorative lines that separate pieces of content into groups or
              sections. They can also be part of data visualizations and can provide a
              sense of scale to charts.
              <br />
              <br />
              Use dividers with purpose:
              <br />
              <br />
              Is this use of a divider adding noise to the design? <br />
              Can I consider separating these content pieces with just extra space?
            </Typography>
          </Box>
          <Box mt={5}>
            <Grid container columnSpacing={5} alignItems="center">
              <Grid item xs={2}>
                <Box>
                  <Typography variant="h4" mb={3}>
                    Color
                  </Typography>
                  <Typography variant="body2">
                    Dividers are either faint for decorative use, or bold. <br />
                    <br />A <b>decorative divider</b> is the brightest white or darkest
                    black, at a 20% opacity. Choose based on the background. They will
                    usually not meet color contrast standards.
                    <br />
                    <br /> People with color blindness may have trouble seeing them. Your
                    use of space also should also tell the user how you have separated
                    your content.
                    <br />
                    <br />
                    <Typography variant="caption">
                      Don’t use decorative dividers in a way that makes them essential to
                      the function of the site. Try hiding the dividers to see if the
                      content design is still effective when they’re invisible.{' '}
                    </Typography>
                    <br />
                    <br />
                    The <b>bold</b> divider style is for uses that are essential to
                    function and comprehension, such as the axes of a graph. It is set at
                    80% opacity for the color. These should have at least a 3:1 contrast
                    ratio against their backgrounds.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2}>
                Graph
              </Grid>
              <Grid item xs={8}></Grid>
            </Grid>
          </Box>
          <Box mt={5}>
            <Grid container columnSpacing={5} alignItems="center">
              <Grid item xs={2}>
                <Box>
                  <Typography variant="h4" mb={3}>
                    Composition
                  </Typography>
                  <Typography variant="body2">
                    Decorative dividers are rectangles of 1 pixel thickness, whether
                    vertical or horizontal, with rounded caps. There should be at least 4
                    pixels of space above and below a horizontal divider, or left/right of
                    a vertical one. A dotted line in an accent color might be useful in
                    graphs and charts.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Grid container columnSpacing={4} alignItems="center">
                  <Grid item xs={4}>
                    <DividerCompositionExample variant="fullWidth" />
                  </Grid>
                  <Grid item xs={4}>
                    <DividerCompositionExample variant="bold" />
                  </Grid>
                  <Grid item xs={4}>
                    <Box mr={6}>
                      <DashedLineExample />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box mt="82px">
            <Grid container columnSpacing={5}>
              <Grid item xs={2}>
                <Box>
                  <Typography variant="h4" mb={3}>
                    Usage
                  </Typography>
                  <Typography variant="body2">
                    Dividers can help guide the user’s eye along a desired reading
                    direction. Try not to mix horizontal and vertical dividers in the same
                    table.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8.5}>
                <Box>
                  <Typography variant="h2" color={palette.success.main} mb={1}>
                    Do:
                  </Typography>
                  <Box>
                    {/* This part will be updated by the corresponding componenet later!!! */}
                    <img
                      src="IndexDividerExample.png"
                      width={'100%'}
                      alt="Index Divider Example"
                    />
                  </Box>
                  <Typography
                    variant="caption"
                    color={
                      palette.mode === 'dark' ? palette.grey[300] : palette.grey[500]
                    }
                    lineHeight={'1.3'}
                    display="block"
                    mb={6}
                  >
                    Consider using vertical or horizontal dividers to separate blocks of
                    similarly formatted content.
                  </Typography>
                  <Grid container columnSpacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h2" color={palette.success.main} mb={3}>
                        Do:
                      </Typography>
                      <TableDividerExample dividerDo />
                      <Typography
                        variant="caption"
                        color={
                          palette.mode === 'dark' ? palette.grey[300] : palette.grey[500]
                        }
                        display="block"
                        mt={3}
                        lineHeight={'1.3'}
                      >
                        The horizontal divider helps guide your eye from the label to the
                        matching data point.
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h2" color={palette.error.main} mb={3}>
                        {"Don't:"}
                      </Typography>
                      <TableDividerExample />
                      <Typography
                        variant="caption"
                        color={
                          palette.mode === 'dark' ? palette.grey[300] : palette.grey[500]
                        }
                        display="block"
                        mt={3}
                        lineHeight={'1.3'}
                      >
                        The intersecting vertical divider adds noise and weakens the
                        relationship between the label and the data.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={1.5}></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default DividerUsagePage;
