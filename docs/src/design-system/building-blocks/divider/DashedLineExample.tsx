import { Box, ThemeProvider } from '@mui/material';
import { dark, light } from '@ui-kit-2022/theme';
const DashedLineExample = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <Box p={2} bgcolor={dark.palette.background.paper} mb={3}>
          <Box
            sx={{
              height: '8px',
              borderTop: `1px dashed ${dark.palette.primary.light}`,
              borderBottom: `1px dashed ${dark.palette.primary.main}`,
            }}
          ></Box>
        </Box>
      </ThemeProvider>
      <ThemeProvider theme={light}>
        <Box p={2} bgcolor={light.palette.background.paper}>
          <Box
            sx={{
              height: '8px',
              borderTop: `1px dashed ${dark.palette.primary.dark}`,
              borderBottom: `1px dashed ${dark.palette.primary.main}`,
            }}
          ></Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default DashedLineExample;
