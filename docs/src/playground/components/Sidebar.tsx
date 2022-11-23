import { Box, Divider, Typography, useTheme } from '@mui/material';
import { Pill } from '@ui-kit-2022/components';
import React from 'react';

export default function Sidebar() {
  const theme = useTheme();

  const containerStyling = {
    height: '100%',
    padding: `${theme.spacing(5)} ${theme.spacing(6)}`,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
    overflowY: 'scroll',
  };

  const companyContainer = { display: 'flex', flexDirection: 'column' };
  const newsContainer = {
    [theme.breakpoints.up('md')]: { marginTop: theme.spacing(4) },
  };
  const peersContainer = {
    [theme.breakpoints.up('md')]: { marginTop: theme.spacing(5) },
  };
  const newsDivider = { marginTop: theme.spacing(5) };

  const mockPeers = [
    'MSFT',
    'HPQ',
    'ORCL',
    'SAP',
    'INTC',
    'CSCO',
    'ACN',
    'VMW',
    'GOOGL',
    'AAPL',
  ];

  return (
    <Box sx={containerStyling}>
      <Box sx={companyContainer}>
        <Typography variant="h4" sx={{ marginBottom: theme.spacing(3) }}>
          Company
        </Typography>
        <Typography variant="subheader3" sx={{ marginBottom: theme.spacing(2) }}>
          Apple, Inc. (AAPL)
        </Typography>
        {/* Didn't use a real hyperlink here to prevent eslint error for inaccessible link */}
        <Typography
          variant="subheader4"
          sx={{
            textTransform: 'none',
            '> span': {
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : theme.palette.primary.dark,
              textDecoration: 'underline',
              textTransform: 'none',
              cursor: 'pointer',
            },
          }}
        >
          <Typography variant="subheader3">www.apple.com</Typography>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: theme.spacing(4) }}>
          Apple Inc. is an American multinational technology company headquartered in
          Cupertino, California, that designs, develops, and sells consumer electronics,
          computer software, and online services. The company&apos;s hardware products
          include the iPhone smartphone, the iPad tablet computer, the Mac personal
          computer, the iPod portable media player, the Apple Watch smartwatch, the Apple
          TV digital media player, the AirPods wireless earbuds and the HomePod smart
          speaker. Apple&apos;s software includes the macOS, iOS, iPadOS, watchOS, and
          tvOS operating systems, the i…
        </Typography>
        <Divider orientation="horizontal" sx={{ marginTop: theme.spacing(6) }} />
      </Box>
      <Box sx={newsContainer}>
        <Typography variant="h4" sx={{ marginBottom: theme.spacing(4) }}>
          News
        </Typography>
        <Box display="flex" flexDirection="column" rowGap={theme.spacing(4)}>
          <Box display="flex" flexDirection="column">
            <Typography variant="subheader2" sx={{ marginBottom: theme.spacing(3) }}>
              Samsung’s answer to AirDrop finally arrived with the Galaxy S20
            </Typography>
            <Typography variant="caption">31 minutes ago - Mac Rumors</Typography>
            <Divider orientation="horizontal" sx={newsDivider} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="subheader2" sx={{ marginBottom: theme.spacing(3) }}>
              Samsung’s answer to AirDrop finally arrived with the Galaxy S20
            </Typography>
            <Typography variant="caption">31 minutes ago - Mac Rumors</Typography>
            <Divider orientation="horizontal" sx={newsDivider} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="subheader2" sx={{ marginBottom: theme.spacing(3) }}>
              Samsung’s answer to AirDrop finally arrived with the Galaxy S20
            </Typography>
            <Typography variant="caption">31 minutes ago - Mac Rumors</Typography>
            <Divider orientation="horizontal" sx={newsDivider} />
          </Box>
        </Box>
      </Box>
      <Box sx={peersContainer}>
        <Typography variant="h4" sx={{ marginBottom: theme.spacing(3) }}>
          Peers
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap="4px">
          {mockPeers.map((peer) => {
            return (
              <>
                <Pill label={peer} variant="outlined" key={peer} />
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
