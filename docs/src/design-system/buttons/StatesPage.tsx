import { Box } from '@mui/material';
import { Typography } from '@ui-kit-2022/components';
import { dark, light } from '@ui-kit-2022/theme';

import ButtonStatesExample from '../building-blocks/button/ButtonStatesExample';
import TopBar from '../building-blocks/common/top-bar';

const StatesPage = () => {
  return (
    <>
      <Box>
        <TopBar title={'STATES'} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: '900px',
            paddingLeft: '1.25rem',
            paddingTop: '1.875rem',
            paddingBottom: '3.5rem',
          }}
        >
          {/* primary-any background */}
          <Box sx={{ marginBottom: '2.5rem' }}>
            <Box sx={{ paddingLeft: '5.2rem' }}>
              <Typography variant="subheader1">Primary - any background</Typography>
            </Box>
            <ButtonStatesExample variantType="PRIMARY" />
          </Box>
          {/* secondary-on light background */}
          <Box sx={{ marginBottom: '1.1875rem' }}>
            <Box sx={{ paddingLeft: '5.4rem' }}>
              <Typography variant="subheader1">
                Secondary - On light background
              </Typography>
            </Box>
            <ButtonStatesExample variantType="SECONDARY" overrideTheme={light} />
          </Box>
          {/* secondary-on dark background */}
          <Box sx={{ marginBottom: '2.5rem' }}>
            <Box sx={{ paddingLeft: '5.5rem' }}>
              <Typography variant="subheader1">Secondary - On dark background</Typography>
            </Box>
            <ButtonStatesExample variantType="SECONDARY" overrideTheme={dark} />
          </Box>
          {/* tertiary-on light background */}
          <Box sx={{ marginBottom: '1.1875rem' }}>
            <Box sx={{ paddingLeft: '5.4rem' }}>
              <Typography variant="subheader1">Tertiary - On light background</Typography>
            </Box>
            <ButtonStatesExample variantType="TERTIARY" overrideTheme={light} />
          </Box>
          {/* tertiary-on dark background */}
          <Box>
            <Box sx={{ paddingLeft: '5.5rem' }}>
              <Typography variant="subheader1">Tertiary - On dark background</Typography>
            </Box>
            <ButtonStatesExample variantType="TERTIARY" overrideTheme={dark} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default StatesPage;
