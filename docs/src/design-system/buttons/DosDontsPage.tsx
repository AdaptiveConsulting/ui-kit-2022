import { Box } from '@mui/material';
import { Typography } from '@ui-kit-2022/components';
import { Icon } from '@ui-kit-2022/components';

import DosDontsExample from '../building-blocks/button/DosDontsExample';
import TopBar from '../building-blocks/common/top-bar';

const DosDontsPage = () => {
  return (
    <>
      <Box>
        <TopBar title={"DO'S AND DONT'S"} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            minWidth: '717px',
            padding: '2rem 2.1875rem 2.5rem',
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
                my: '0.625rem',
              }}
            >
              <Typography variant="subheader1">DO</Typography>
              <Icon.Check viewBox="-5 -2 21 19" sx={{ width: '21px', height: '19px' }} />
            </Box>
            <Typography variant="body2">
              <Typography variant="subheader3">Right Aligned: </Typography>Primary
              alignment. Call to action and next steps will be shown right aligned.
            </Typography>
          </Box>
          <Box sx={{ width: '271px' }}>
            <DosDontsExample exampleType="Dont" />
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '0.625rem' }}>
              <Typography variant="subheader1">{"DON'T"}</Typography>
              <Icon.Close viewBox="-4 0 16 16" sx={{ width: '13px', height: '13px' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DosDontsPage;
