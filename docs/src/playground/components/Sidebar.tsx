import { Box, Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Pill, Typography } from '@ui-kit-2022/components';
import React from 'react';

interface Props {
  loading?: boolean;
}

export default function Sidebar({ loading }: Props) {
  const theme = useTheme();

  const isTiny = useMediaQuery('(max-width: 375px)');

  const containerStyling = {
    minHeight: '100%',
    padding: `${theme.spacing(5)} ${theme.spacing(6)}`,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
    [theme.breakpoints.down('md')]: {
      maxHeight: 'none',
    },
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
    <Grid
      container
      sx={containerStyling}
      columnSpacing={{ xs: theme.spacing(2), sm: theme.spacing(6), md: 0 }}
      rowSpacing={{ xs: theme.spacing(6), md: 0 }}
    >
      <Grid
        item
        xs={6}
        sm={4}
        md={12}
        sx={{ flexBasis: isTiny ? '100%' : null, maxWidth: isTiny ? '100%' : null }}
      >
        <Box sx={companyContainer}>
          <Typography variant="h4" sx={{ marginBottom: theme.spacing(3) }}>
            Company Summary
          </Typography>
          <Typography
            variant="subheader3"
            loading={loading}
            sx={{ marginBottom: theme.spacing(2) }}
          >
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
            <Typography
              variant="subheader3"
              loading={loading}
              sx={loading ? { width: '40%' } : {}}
            >
              www.apple.com
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            loading={loading}
            sx={[{ marginTop: theme.spacing(4) }, loading ? { height: 200 } : {}]}
          >
            Apple Inc. is an American multinational technology company headquartered in
            Cupertino, California, that designs, develops, and sells consumer electronics,
            computer software, and online services. The company&apos;s hardware products
            include the iPhone smartphone, the iPad tablet computer, the Mac personal
            computer, the iPod portable media player, the Apple Watch smartwatch, the
            Apple TV digital media player, the AirPods wireless earbuds and the HomePod
            smart speaker. Apple&apos;s software includes the macOS, iOS, iPadOS, watchOS,
            and tvOS operating systems, the i…
          </Typography>
          {useMediaQuery(theme.breakpoints.up('md')) || isTiny ? (
            <Divider orientation="horizontal" sx={{ marginTop: theme.spacing(6) }} />
          ) : null}
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sm={4}
        md={12}
        sx={{ flexBasis: isTiny ? '100%' : null, maxWidth: isTiny ? '100%' : null }}
      >
        <Box sx={newsContainer}>
          <Typography variant="h4" sx={{ marginBottom: theme.spacing(4) }}>
            Latest News
          </Typography>
          <Box display="flex" flexDirection="column" rowGap={theme.spacing(4)}>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="subheader2"
                loading={loading}
                sx={{ marginBottom: theme.spacing(3) }}
              >
                Samsung&apos;s answer to AirDrop finally arrived with the Galaxy S20
              </Typography>
              <Typography variant="caption" loading={loading}>
                31 minutes ago - Mac Rumors
              </Typography>
              <Divider orientation="horizontal" sx={newsDivider} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="subheader2"
                loading={loading}
                sx={{ marginBottom: theme.spacing(3) }}
              >
                Samsung&apos;s answer to AirDrop finally arrived with the Galaxy S20
              </Typography>
              <Typography variant="caption" loading={loading}>
                31 minutes ago - Mac Rumors
              </Typography>
              <Divider orientation="horizontal" sx={newsDivider} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="subheader2"
                loading={loading}
                sx={{ marginBottom: theme.spacing(3) }}
              >
                Samsung&apos;s answer to AirDrop finally arrived with the Galaxy S20
              </Typography>
              <Typography variant="caption" loading={loading}>
                31 minutes ago - Mac Rumors
              </Typography>
              {useMediaQuery(theme.breakpoints.up('md')) || isTiny ? (
                <Divider orientation="horizontal" sx={newsDivider} />
              ) : null}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} md={12}>
        {useMediaQuery(theme.breakpoints.down('sm')) && !isTiny ? (
          <Grid item xs={12}>
            <Divider orientation="horizontal" sx={{ marginBottom: theme.spacing(5) }} />
          </Grid>
        ) : null}
        <Box sx={peersContainer}>
          <Typography variant="h4" sx={{ marginBottom: theme.spacing(3) }}>
            Top Peers
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap="4px"
            sx={{
              [theme.breakpoints.down('md')]: { justifyContent: isTiny ? null : 'start' },
            }}
          >
            {mockPeers.map((peer) => {
              return (
                <>
                  <Pill label={peer} variant="outlined" ticker={true} key={peer} />
                </>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
