import { Box, Divider, ThemeProvider } from '@mui/material';
import { dark, light } from '@ui-kit-2022/theme';

export interface Props {
  variant?: 'fullWidth' | 'bold' | 'inset' | 'middle';
}
const DividerCompositionExample: React.FC<Props> = ({ variant }) => {
  return (
    <Box display={'flex'} justifyContent="space-around">
      <ThemeProvider theme={dark}>
        <Box
          p={2}
          display={'flex'}
          alignItems={'center'}
          bgcolor={dark.palette.background.paper}
        >
          <Divider
            variant={variant}
            orientation="horizontal"
            sx={{ width: '53px', mr: 3 }}
          />
          <Divider variant={variant} orientation="vertical" sx={{ height: '81px' }} />
        </Box>
      </ThemeProvider>
      <ThemeProvider theme={light}>
        <Box
          p={2}
          display={'flex'}
          alignItems={'center'}
          bgcolor={light.palette.background.paper}
        >
          <Divider
            variant={variant}
            orientation="horizontal"
            sx={{ width: '53px', mr: 3 }}
          />
          <Divider variant={variant} orientation="vertical" sx={{ height: '81px' }} />
        </Box>
      </ThemeProvider>
    </Box>
  );
};
export default DividerCompositionExample;
