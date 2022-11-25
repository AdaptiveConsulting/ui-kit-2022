import {
  Box,
  Divider,
  Palette,
  SimplePaletteColorOptions,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as React from 'react';

import * as Icons from '../../icons';

interface SellBugProps {
  sell: SimplePaletteColorOptions;
  buy: SimplePaletteColorOptions;
}

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
const color = (palette: Palette & SellBugProps, changedPrice: number) => {
  if (changedPrice === 0) {
    return {};
  } else if (changedPrice < 0) {
    return { color: palette.sell.main };
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
  const IsBiggerThanSM = useMediaQuery(theme.breakpoints.up('sm'));
  const IsSmallerThanXS = useMediaQuery('(max-width: 375px)');
  const Matches = useMediaQuery('(max-width: 420px)');
  if (IsBiggerThanSM) {
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
                <Icons.ArrowDown
                  sx={{
                    pb: 1,
                    color: (theme.palette as Palette & SellBugProps).sell.main,
                  }}
                />
              ) : (
                <Icons.ArrowUp
                  sx={{
                    pb: 1,
                    color: (theme.palette as Palette & SellBugProps).success.main,
                  }}
                />
              ))}
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={color(theme.palette as Palette & SellBugProps, changedPrice)}
        >
          {changedPrice >= 0
            ? `+${getRoundedToTwo(changedPrice)}`
            : getRoundedToTwo(changedPrice)}
        </Typography>
        <Box mx={1} sx={color(theme.palette as Palette & SellBugProps, changedPrice)}>
          |
        </Box>
        <Typography
          variant="body2"
          mr={4}
          sx={color(theme.palette as Palette & SellBugProps, changedPrice)}
        >
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
      <Box height={IsSmallerThanXS ? '3rem' : '4rem'} display="flex">
        {includeDivider && <Divider orientation="vertical" flexItem />}
        <Box
          mx={Matches ? 2 : 4}
          display="flex"
          flexDirection={'column'}
          justifyContent={'space-evenly'}
        >
          <Box display={'flex'} alignItems="center" justifyContent={'space-between'}>
            <Typography variant="subheader3" fontSize={IsSmallerThanXS ? '8px' : '12px'}>
              {name}
            </Typography>
            <Typography variant="body2" fontSize={IsSmallerThanXS ? '8px' : '12px'}>
              ${getRoundedToTwo(latestPrice)}
            </Typography>
          </Box>
          <Box display={'flex'} alignItems="center">
            <Box width={'1rem'} height={'1rem'} textAlign="center">
              {changedPrice !== 0 &&
                (changedPrice < 0 ? (
                  <Icons.ArrowDown
                    sx={{
                      pb: '3px',
                      color: (theme.palette as Palette & SellBugProps).sell.main,
                    }}
                  />
                ) : (
                  <Icons.ArrowUp
                    sx={{
                      pb: '3px',
                      color: (theme.palette as Palette & SellBugProps).success.main,
                    }}
                  />
                ))}
            </Box>
            <Typography
              variant="body2"
              fontSize={IsSmallerThanXS ? '8px' : '12px'}
              sx={color(theme.palette as Palette & SellBugProps, changedPrice)}
              ml={changedPrice === 0 ? 3 : 1}
            >
              {changedPrice >= 0
                ? `+${getRoundedToTwo(changedPrice)}`
                : getRoundedToTwo(changedPrice)}
            </Typography>
            <Box mx={1} sx={color(theme.palette as Palette & SellBugProps, changedPrice)}>
              |
            </Box>
            <Typography
              variant="body2"
              fontSize={IsSmallerThanXS ? '8px' : '12px'}
              sx={color(theme.palette as Palette & SellBugProps, changedPrice)}
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
