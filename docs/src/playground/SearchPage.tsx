import { Grid, useTheme } from '@mui/material';
import { Logo, TextSearch } from '@ui-kit-2022/components';
import * as React from 'react';
type Option = { label: string; type: string };
const placeholder = 'Enter a stock, symbol, or currency.';
const options = [
  { label: 'AAPL - Apple Inc.', type: 'stock' },
  { label: 'AMZN - Amazon Inc.', type: 'stock' },
  { label: 'HOV - Hovercraft Partners', type: 'stock' },
  { label: 'PRED - Predictive Technology Group Inc.' },
  { label: 'GBP - Great British Pound', type: 'currency' },
  { label: 'USD - US Dollar', type: 'currency' },
  { label: 'QOM - Shiba Predator', type: 'currency' },
] as Option[];
const groupBy = (opt: Option) => ({ stock: 'Stock', currency: 'FX' }[opt.type] as string);
const SearchPage = () => {
  const { palette } = useTheme();
  const [input, setInput] = React.useState<string>('');

  console.log('input', input);
  return (
    <Grid container sx={{ minHeight: '100vh' }} rowGap={4}>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
          bgcolor: palette.mode === 'light' ? palette.grey[100] : palette.grey[900],
        }}
      >
        <Logo variant="maximized" />
      </Grid>
      <Grid item xs={12} sx={{ height: '70vh' }}>
        <TextSearch
          options={options}
          inputValue={input}
          onInput={(event: any) => {
            setInput(event.target.value);
          }}
          onChange={(event, value: Option | null) => {
            console.log('event', event.target);
            setInput(value?.label || '');
          }}
          onBlur={() => setInput('')}
          fullWidth={true}
          placeholder={placeholder}
          groupBy={groupBy}
          disablePortal
          open={input !== ''}
          openOnFocus
        />
      </Grid>
    </Grid>
  );
};

export default SearchPage;
