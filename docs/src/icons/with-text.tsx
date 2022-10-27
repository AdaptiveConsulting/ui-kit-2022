import { Box, Grid, List, ListItem, Palette, Typography, useTheme } from '@mui/material';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

import { SubTitle } from '../common';

const Text: React.FC = () => {
  return (
    <Grid item xs={2}>
      <SubTitle subTitle="With Text" />
      <Grid item xs={12}>
        <Typography variant="body2">
          Almost always use icons with accompanying text. When this is impossible, ensure
          an aria-label that can identify the icon on hover, and which is detectable by
          screen reader users.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Create a harmonious relationship between the icon and its label with...
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <List
          sx={{
            listStyleType: 'disc',
            fontSize: '12px',
            ml: '1rem',
            padding: '0 0 ',
          }}
        >
          <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
            Center vertical alignment between text and icon
          </ListItem>
          <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
            Consistent pairing of label and icon across the experience
          </ListItem>
          <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
            A match-or near-match in height between the text and the icon
          </ListItem>
          <ListItem sx={{ display: 'list-item', padding: '0 0' }}>
            Text and icon the same color. (This will usually mean that you will seek even
            higher contrast ratios to accomodate the text. That ratio should be 4.5:1)
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

const DoIconWithLabel: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <Grid item xs={2.5}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ color: palette.success.main }}>
          Do:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            gap: '0.5rem',
          }}
        >
          <Icon.Cog sx={{ width: '9px', height: '9px' }} />
          <Typography variant="body2">Settings</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            gap: '0.5rem',
          }}
        >
          <Icon.Cog sx={{ width: '12px', height: '12px' }} />
          <Typography variant="body1">Settings</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            gap: '0.5rem',
          }}
        >
          <Icon.Cog sx={{ width: '18px', height: '18px' }} />
          <Typography variant="h1">Settings</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
        >
          Icons and labels are equal or similar in height, consistently applied, with the
          same color, and center alignment.
        </Typography>
      </Grid>
    </Grid>
  );
};

const DontIconWithLabel: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <Grid item xs={2.5}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ color: palette.error.main }}>
            Don&apos;t:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              gap: '0.5rem',
            }}
          >
            <Icon.Cog sx={{ width: '9px', height: '9px' }} />
            <Typography variant="h1">Settings</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
          >
            Type noticeably larger than icon.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              gap: '0.5rem',
            }}
          >
            <Icon.Cog sx={{ width: '18px', height: '18px' }} />
            <Typography variant="body2">Settings</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
          >
            Type noticeably smaller than icon.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              gap: '0.5rem',
            }}
          >
            <Icon.Cog sx={{ width: '9px', height: '9px' }} />
            <Typography variant="h2">Settings</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
          >
            Type has top alignment with icon. Use center alignment.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              gap: '0.5rem',
            }}
          >
            <Icon.Cog sx={{ width: '9px', height: '9px' }} />
            <Typography variant="body2" sx={{ color: palette.error.light }}>
              Settings
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
          >
            Type is a different color than icon.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              gap: '0.5rem',
            }}
          >
            <Icon.Cog sx={{ width: '9px', height: '9px' }} />
            <Typography variant="body2">Configure</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
          >
            Icon has a different label than it does elsewhere in the experience.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const DoIconWithActions: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <Grid item xs={2}>
      <Grid container rowGap={2}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ color: palette.success.main }}>
            Do:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            columnGap={3}
            alignItems="center"
            sx={{
              width: '90px',
              height: '110px',
              bgcolor: palette.grey[50],
              padding: '0.25rem 0rem',
            }}
          >
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: palette.common.black }}>
                Edit
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: palette.common.black }}>
                Setting
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: palette.common.black }}>
                Close
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                color: palette.common.black,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <Icon.Plus />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: palette.common.black }}>
                And new
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
          >
            Use an icon to add special interest to identify an frequent or primary action,
            or a key piece of information.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const DontIconWithActions: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <Grid item xs={2}>
      <Grid container rowGap={2}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ color: palette.error.main }}>
            Don&apos;t:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            columnGap={3}
            alignItems="center"
            sx={{
              width: '90px',
              height: '110px',
              bgcolor: palette.grey[50],
              padding: '0.25rem 0rem',
            }}
          >
            <Grid
              item
              xs={3}
              sx={{
                color: palette.common.black,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <Icon.Edit />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: palette.common.black }}>
                Edit
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                color: palette.common.black,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <Icon.Settings />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: palette.common.black }}>
                Setting
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                color: palette.common.black,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <Icon.Close />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: palette.common.black }}>
                Close
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                color: palette.common.black,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <Icon.Plus />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: palette.common.black }}>
                And new
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
          >
            Label every item in a list or menu with unique icons. If every item is
            special, then no item is special.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const WithText: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Grid item xs={12}>
      <Grid container columnGap={3}>
        <Text />
        <DoIconWithLabel palette={palette} />
        <DontIconWithLabel palette={palette} />
        <DoIconWithActions palette={palette} />
        <DontIconWithActions palette={palette} />
      </Grid>
    </Grid>
  );
};

export default WithText;
