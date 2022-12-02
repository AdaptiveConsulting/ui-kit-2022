import { Box, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Logo, LogoText } from '@ui-kit-2022/components';

const AppBar = () => {
  const theme = useTheme();
  const logoContainerStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    margin: `${theme.spacing(6)} 0`,
  };

  const appBarStyling = {
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    background:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
    width: '129px',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      minHeight: 'min-content',
      padding: `${theme.spacing(4)} 0`,
    },
  };

  return (
    <Box sx={{ ...appBarStyling }}>
      {useMediaQuery(theme.breakpoints.up('md')) ? (
        <Box sx={{ ...logoContainerStyling }}>
          <Logo variant="large" />
          <LogoText width={63} height={23} />
        </Box>
      ) : (
        <Box sx={{ zIndex: 1 }}>
          <Logo variant="maximized" />
        </Box>
      )}
    </Box>
  );
};

export default AppBar;
