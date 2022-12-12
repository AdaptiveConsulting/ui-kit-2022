import {
  Box,
  Divider,
  Palette,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as React from 'react';

import { ArrowDown, ArrowUp } from '../../icons';

export interface Props {
  name: string;
  latestPrice: number;
  changedPrice: number;
  percentage: number;
  includeDivider?: boolean;
}
const getRoundedToTwo = (num: number) => {
  return Number(num).toFixed(2).padEnd(2, '0');
};
const color = (palette: Palette, changedPrice: number) => {
  if (changedPrice === 0) {
    return {};
  } else if (changedPrice < 0) {
    return { color: palette.error.main };
  } else {
    return { color: palette.success.main };
  }
};
const IndexTickers: React.FC<Props> = ({
  name = 'Name',
  latestPrice = 0,
  changedPrice = 0,
  percentage = 0,
  includeDivider = true,
}) => {
  const theme = useTheme();
  const IsBiggerScreen = useMediaQuery('(min-width: 700px)');
  const IsSmallestScreen = useMediaQuery('(max-width: 410px)');
  const Matches = useMediaQuery('(max-width: 440px)');
  if (IsBiggerScreen) {
    return (
      <Box height={'2rem'} display="flex" alignItems={'center'}>
        {includeDivider && <Divider orientation="vertical" flexItem />}
        <Typography variant="subheader3" sx={{ ml: 4, mr: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2">${getRoundedToTwo(latestPrice)}</Typography>
        <Box px={1} ml={4}>
          <Box width={'1rem'} height={'1rem'} textAlign="center">
            {changedPrice !== 0 &&
              (changedPrice < 0 ? (
                <SvgIcon
                  component={ArrowDown}
                  viewBox="0 0 20 20"
                  sx={{
                    color: theme.palette.error.main,
                  }}
                />
              ) : (
                <SvgIcon
                  component={ArrowUp}
                  viewBox="0 0 20 20"
                  sx={{
                    color: theme.palette.success.main,
                  }}
                />
              ))}
          </Box>
        </Box>
        <Typography variant="body2" sx={color(theme.palette, changedPrice)}>
          {changedPrice >= 0
            ? `+${getRoundedToTwo(changedPrice)}`
            : getRoundedToTwo(changedPrice)}
        </Typography>
        <Box mx={1} sx={color(theme.palette, changedPrice)}>
          |
        </Box>
        <Typography variant="body2" mr={4} sx={color(theme.palette, changedPrice)}>
          {percentage >= 0
            ? `+${getRoundedToTwo(percentage)}`
            : getRoundedToTwo(percentage)}
          %
        </Typography>
        {includeDivider && <Divider orientation="vertical" flexItem />}
      </Box>
    );
  } else {
    return (
      <Box height={IsSmallestScreen ? '3rem' : '4rem'} display="flex">
        {includeDivider && <Divider orientation="vertical" flexItem />}
        <Box
          mx={Matches ? 2 : 4}
          display="flex"
          flexDirection={'column'}
          justifyContent={'space-evenly'}
        >
          <Box display={'flex'} alignItems="center" justifyContent={'space-between'}>
            <Typography
              variant="subheader3"
              fontSize={IsSmallestScreen ? '8px' : '12px'}
              data-testid={'tickers-name'}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              fontSize={IsSmallestScreen ? '8px' : '12px'}
              data-testid={'latestPrice'}
            >
              ${getRoundedToTwo(latestPrice)}
            </Typography>
          </Box>
          <Box
            display={'flex'}
            alignItems="center"
            data-testid={'color-change-part'}
            sx={color(theme.palette, changedPrice)}
          >
            <Box width={'1rem'} height={'1rem'} textAlign="center">
              {changedPrice !== 0 &&
                (changedPrice < 0 ? (
                  <SvgIcon
                    component={ArrowDown}
                    viewBox="0 0 20 20"
                    sx={{
                      color: theme.palette.error.main,
                    }}
                    data-testid={'arrowDown'}
                  />
                ) : (
                  <SvgIcon
                    component={ArrowUp}
                    viewBox="0 0 20 20"
                    sx={{
                      color: theme.palette.success.main,
                    }}
                    data-testid={'arrowUp'}
                  />
                ))}
            </Box>
            <Typography
              variant="body2"
              fontSize={IsSmallestScreen ? '8px' : '12px'}
              ml={changedPrice === 0 ? 3 : 1}
              data-testid={'changedPrice'}
            >
              {changedPrice >= 0
                ? `+${getRoundedToTwo(changedPrice)}`
                : getRoundedToTwo(changedPrice)}
            </Typography>
            <Box mx={1}>|</Box>
            <Typography
              variant="body2"
              fontSize={IsSmallestScreen ? '8px' : '12px'}
              data-testid={'percentage'}
            >
              {percentage >= 0
                ? `+${getRoundedToTwo(percentage)}`
                : getRoundedToTwo(percentage)}
              %
            </Typography>
          </Box>
        </Box>
        {includeDivider && <Divider orientation="vertical" flexItem />}
      </Box>
    );
  }
};
export default IndexTickers;
