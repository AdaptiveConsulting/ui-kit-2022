import {
  Box,
  Grid,
  List,
  ListItem,
  Palette,
  SvgIcon,
  Typography,
  useTheme,
} from '@mui/material';
import { Icon } from '@ui-kit-2022/components';
import * as React from 'react';

import { SubTitle } from '../common';
import { WITH_TEXT } from './icons.constants';

const Text: React.FC = () => {
  return (
    <Grid item xs={4}>
      <SubTitle subTitle={WITH_TEXT.subTitle} />
      <Grid item xs={12}>
        <Typography variant="body2">{WITH_TEXT.paragraph1}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{WITH_TEXT.paragraph2}</Typography>
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
          {WITH_TEXT.textList.map((value) => (
            <ListItem key={value} sx={{ display: 'list-item', padding: '0 0' }}>
              {value}
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

type variantType = 'body1' | 'body2' | 'h1';

const DoIconWithLabel: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <Grid item xs={2.5}>
      <Grid container rowGap={2}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ color: palette.success.main }}>
            Do:
          </Typography>
        </Grid>
        {WITH_TEXT.column1.map((value) => (
          <Grid key={JSON.stringify(value)} item xs={12}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '0.5rem',
              }}
            >
              <Icon.Cog sx={value.iconStyle} />
              <Typography variant={value.fontVariant as variantType}>
                {value.label}
              </Typography>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
          >
            {WITH_TEXT.exampleExplanation.column1}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const DontIconWithLabel: React.FC<{ palette: Palette }> = ({ palette }) => {
  return (
    <Grid item xs={2.5}>
      <Grid container rowGap={2}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ color: palette.error.main }}>
            Don&apos;t:
          </Typography>
        </Grid>
        {WITH_TEXT.column2.map((value, index) => (
          <React.Fragment key={JSON.stringify(value)}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  gap: '0.5rem',
                }}
              >
                <Icon.Cog sx={value.iconStyle} />
                <Typography
                  variant={value.fontVariant as variantType}
                  sx={{
                    color: index === 3 ? palette.error.light : 'inherit',
                    alignSelf: index === 2 ? 'end' : 'center',
                  }}
                >
                  {value.label}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body2"
                sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
              >
                {value.explanation}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
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
            alignItems="center"
            sx={{
              width: '100px',
              height: '110px',
              bgcolor: palette.grey[50],
              padding: '0.5rem 0rem 0rem',
            }}
          >
            {WITH_TEXT.column3.icons.map((value) => (
              <React.Fragment key={value.label}>
                <Grid item xs={6}>
                  {value.icon && (
                    <SvgIcon
                      component={value.icon}
                      viewBox="-4 -3 18 18"
                      sx={{ color: palette.grey[600] }}
                    />
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" sx={{ color: palette.common.black }}>
                    {value.label}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
          >
            {WITH_TEXT.exampleExplanation.column3}
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
            alignItems="center"
            sx={{
              width: '100px',
              height: '110px',
              bgcolor: palette.grey[50],
              padding: '0.25rem 0rem',
            }}
          >
            {WITH_TEXT.column4.icons.map((value) => (
              <React.Fragment key={value.label}>
                <Grid item xs={6}>
                  {value.icon && (
                    <SvgIcon
                      component={value.icon}
                      viewBox="-4 -3 18 18"
                      sx={{ color: palette.grey[600] }}
                    />
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" sx={{ color: palette.common.black }}>
                    {value.label}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ fontSize: '11px', fontWeight: '300', fontStyle: 'italic' }}
          >
            {WITH_TEXT.exampleExplanation.column4}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const WithText: React.FC = () => {
  const { palette } = useTheme();

  return (
    <Grid container columns={{ xs: 1, sm: 2, md: 4 }} columnSpacing={6} rowGap={5}>
      <Grid item xs={1} sm={1.5} md={1}>
        <Text />
      </Grid>
      <Grid item xs={2} display="flex" gap={6}>
        <DoIconWithLabel palette={palette} />
        <DontIconWithLabel palette={palette} />
      </Grid>
      <Grid item xs={2} md={1} display="flex" gap={6}>
        <DoIconWithActions palette={palette} />
        <DontIconWithActions palette={palette} />
      </Grid>
    </Grid>
  );
};

export default WithText;
