import { Box, Container, Typography, useTheme } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageNotFound } from '@ui-kit-2022/components';

import TopBar from '../building-blocks/common/top-bar';

const PageNotFoundDesignDoc = () => {
  const theme = useTheme();
  const borderColor = {
    light: theme.palette.common.black,
    dark: theme.palette.common.white,
  }[theme.palette.mode];

  return (
    <>
      <TopBar title="Page Not Found" />
      <Container maxWidth={false}>
        <Typography variant="h1" sx={{ my: 6 }}>
          Usage
        </Typography>
        <Box sx={{ my: 6 }}>
          <Typography variant="subheader1">Definition</Typography>
          <Typography variant="body1">
            A 404 page is also known as an “error page” or “Page Not Found” page. This
            page indicates that the user reached the domain they requested, but the URL
            path provided no information.
          </Typography>
        </Box>
        <Typography variant="subheader1" sx={{ my: 3, display: 'block' }}>
          {{ dark: 'Dark mode', light: 'Light mode' }[theme.palette.mode]}
        </Typography>
        <Box sx={{ height: '100vh', border: `1px solid ${borderColor}` }}>
          <PageNotFound onNavigateHome={() => null} fitContainer={true} />
        </Box>
      </Container>
    </>
  );
};

export default {
  title: 'Design System/Page Not Found Design',
  component: PageNotFoundDesignDoc,
} as ComponentMeta<typeof PageNotFoundDesignDoc>;

const Template: ComponentStory<typeof PageNotFoundDesignDoc> = () => {
  return <PageNotFoundDesignDoc />;
};

export const PageNotFoundDesign = Template.bind({});
