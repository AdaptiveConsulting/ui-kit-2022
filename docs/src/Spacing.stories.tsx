import { Card } from '@mui/material';
import { useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { spacing } from '@ui-kit-2022/theme';

const control = { type: 'range', min: 0, max: spacing.length - 1 };

export default {
  title: 'Theme/Spacing',
  component: Grid,
  argTypes: {
    rowSpacing: {
      name: 'Row Spacing',
      defaultValue: 0,
      control,
    },
    columnSpacing: {
      name: 'Column Spacing',
      defaultValue: 0,
      control,
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = ({ ...args }) => {
  const theme = useTheme();
  const rowSize = theme.spacing(Number(args.rowSpacing));
  const colSize = theme.spacing(Number(args.columnSpacing));
  return (
    <Grid container {...args} textAlign="center">
      <Grid xs={12}>
        <Card>
          <h1>Spacing</h1>
        </Card>
      </Grid>
      <Grid xs={6}>
        <Card>
          <h1>Row: {rowSize}</h1>
        </Card>
      </Grid>
      <Grid xs={6}>
        <Card>
          <h1>Column: {colSize}</h1>
        </Card>
      </Grid>
    </Grid>
  );
};

export const Spacing = Template.bind({});
