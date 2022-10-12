import tokens from './tokens.json';

// Exports an array of spacing values, sorted from smallest to largest.
// See: https://mui.com/material-ui/customization/spacing/
export default Object.values(tokens.global.size)
  .map((o) => Number(o.value))
  .sort((a, b) => (a < b ? -1 : 1));
