import {
  Box,
  Divider,
  Palette,
  SimplePaletteColorOptions,
  Typography,
  useTheme,
} from '@mui/material';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

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

const IndexTickerMobile: React.FC<Props> = ({
  name = 'Name',
  latestPrice = 0,
  changedPrice = 0,
  percentage = 0,
  includeDivider = true,
}) => {
  const { palette } = useTheme();
  return (
    <Box height={'4rem'} display="flex">
      {includeDivider && <Divider orientation="vertical" flexItem />}
      <Box mx={4} display="flex" flexDirection={'column'} justifyContent={'space-evenly'}>
        <Box display={'flex'} alignItems="center" justifyContent={'space-between'}>
          <Typography variant="subheader3">{name}</Typography>
          <Typography variant="body2">${getRoundedToTwo(latestPrice)}</Typography>
        </Box>
        <Box display={'flex'} alignItems="center">
          <Box width={'1rem'} height={'1rem'} textAlign="center">
            {changedPrice !== 0 &&
              (changedPrice < 0 ? (
                <Icon.ArrowDown
                  sx={{
                    pb: '3px',
                    color: (palette as Palette & SellBugProps).sell.main,
                  }}
                />
              ) : (
                <Icon.ArrowUp
                  sx={{
                    pb: '3px',
                    color: (palette as Palette & SellBugProps).success.main,
                  }}
                />
              ))}
          </Box>
          <Typography
            variant="body2"
            sx={color(palette as Palette & SellBugProps, changedPrice)}
            ml={changedPrice === 0 ? 3 : 1}
          >
            {changedPrice >= 0
              ? `+${getRoundedToTwo(changedPrice)}`
              : getRoundedToTwo(changedPrice)}
          </Typography>
          <Box mx={1} sx={color(palette as Palette & SellBugProps, changedPrice)}>
            |
          </Box>
          <Typography
            variant="body2"
            sx={color(palette as Palette & SellBugProps, changedPrice)}
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
};
export default IndexTickerMobile;
