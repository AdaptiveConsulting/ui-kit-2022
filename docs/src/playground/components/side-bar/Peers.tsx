import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Pill } from '@ui-kit-2022/components';

//TODO:  Update styling once Figma designs are finished.  The live RA, which is where the styling is from,
// doesn't match up with the design system.
export default function Peers() {
  const theme = useTheme();

  const PeersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px;
    ${useMediaQuery(theme.breakpoints.down('lg')) ? 'justify-content: flex-start' : null}
  `;

  const PeersCard = styled.div`
    ${useMediaQuery(theme.breakpoints.down('md'))
      ? 'grid-column: 1/-1; grid-row: 2; padding: 24px 20px;'
      : null}
    ${useMediaQuery(theme.breakpoints.down('sm')) ? 'grid-column: 1; grid-row: 3;' : null}
  `;

  const PeersLink = styled.a`
    text-decoration: none;
  `;

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
    <PeersCard>
      <Typography
        variant="h1"
        sx={{
          padding: 0,
          margin: 0,
          marginBottom: '15px',
          fontWeight: 300,
          fontSize: '16px',
          color: theme.palette.grey[800],
          fontFamily: 'Merriweather, sans-serif',
        }}
      >
        Top Peers
      </Typography>
      <PeersWrapper>
        {mockPeers.map((peer) => (
          <PeersLink key={peer} href="javascript:;">
            <Pill
              label={peer}
              variant="outlined"
              className="MuiButtonBase-root hover"
              sx={{
                backgroundColor: 'transparent',
                borderColor: '#d8d9d9',
                color: '#707070',
                '&:hover': {
                  color: `${theme.palette.grey[800]} !important`,
                  backgroundColor: '#d8d9d9',
                },
              }}
            />
          </PeersLink>
        ))}
      </PeersWrapper>
    </PeersCard>
  );
}
