import styled from '@emotion/styled';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

export default function KeyStatistics() {
  const theme = useTheme();

  const KeyStats = styled.div`
    display: grid;
    grid-template-columns: 100%;
    overflow: hidden;
    padding: 24px 32px;
  `;

  const StatsWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    ${useMediaQuery(theme.breakpoints.up('md'))
      ? 'grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));'
      : null}
    column-gap: 30px;
    row-gap: 8px;
    font-size: 12px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -2px;
      left: 0;
      height: 4px;
      width: 100%;
      background-color: #f9fafa;
    }
  `;

  const Stat = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const StatContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 8px 0 8px;
  `;

  const mockStats = [
    { key: 1, label: 'Previous Close', value: '$136.83' },
    { key: 2, label: 'Day Range', value: '$135.71 - $136.43' },
    { key: 3, label: 'Volume', value: '266.54 k' },
    { key: 4, label: 'Market Cap', value: '124.95 b' },
    { key: 5, label: 'P/E Ratio', value: '99.01' },
    { key: 6, label: 'Open', value: 'N/A' },
    {
      key: 7,
      label: '52 Week Range',
      value: '110.45 - 142.93',
    },
    {
      key: 8,
      label: 'Total Avg. Volume',
      value: '5.41 m',
    },
    { key: 9, label: 'Earnings Per Share', value: '1.44' },
    { key: 10, label: 'Dividend Yield', value: '0.05' },
  ];

  const StatLabel = styled.span`
    font-weight: 500;
    color: ${theme.palette.grey[800]};
  `;

  const StatValue = styled.span`
    color: #828282;
  `;

  return (
    <KeyStats>
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
        Key Statistics
      </Typography>
      <StatsWrapper>
        {mockStats.map((stat) => {
          return (
            <Stat key={stat.key}>
              <Divider color={'#EAEBEB'} variant="middle" sx={{ margin: 0 }} />
              <StatContent>
                <StatLabel>{stat.label}</StatLabel>
                <StatValue>{stat.value}</StatValue>
              </StatContent>
            </Stat>
          );
        })}
      </StatsWrapper>
    </KeyStats>
  );
}
