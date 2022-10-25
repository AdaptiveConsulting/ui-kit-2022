import { Box, SvgIcon, useTheme } from '@mui/material';
import { Typography } from '@ui-kit-2022/components';

import { Check, Close } from '../../packages/ui-kit-components/src/icons';
import DosDontsExample from './DosDontsExample';

const DosDontsPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '717px',
        backgroundColor: '#323232',
        color: theme.palette.common.white,
        paddingTop: '2rem',
        paddingLeft: '2.1875rem',
        paddingRight: '2.1875rem',
        paddingBottom: '2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ width: '271px' }}>
        <DosDontsExample exampleType="Do" />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '0.625rem',
            marginBottom: '0.625rem',
          }}
        >
          <Typography variant="subheader1">DO</Typography>
          <SvgIcon
            component={Check}
            viewBox="-3 0 16 16"
            sx={{ width: '12px', height: '9.82px' }}
          />
        </Box>
        <Typography variant="body2">
          <Typography variant="subheader3">Right Aligned: </Typography>Primary alignment.
          Call to action and next steps will be shown right aligned.
        </Typography>
      </Box>
      <Box sx={{ width: '271px' }}>
        <DosDontsExample exampleType="Dont" />
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '0.625rem' }}>
          <Typography variant="subheader1">DONT</Typography>
          <SvgIcon
            component={Close}
            viewBox="-3 0 16 16"
            sx={{ width: '12px', height: '9.82px' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DosDontsPage;
