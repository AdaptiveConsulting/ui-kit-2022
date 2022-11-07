import { Color, PaletteColorOptions } from '@mui/material';

interface TokenColor {
  value: string;
  type: string;
}

interface TokenColorsGroup {
  [x: string]: TokenColor | TokenColorsGroup;
}

interface TokensType {
  [x: string]: TokenColorsGroup;
}

export interface PaperColor {
  black: string;
  white: string;
}

export interface PaperColorOption {
  black: string;
  white: string;
}

interface PaletteType {
  sell: PaletteColorOptions;
  buy: PaletteColorOptions;
  paper: PaperColorOption;
  grey: Color;
  [x: string]: PaletteColorOptions | PaperColorOption | Color;
}

const tokenPaletteMapper = (tokens: TokensType) => {
  const palette: PaletteType | Record<string, unknown> = {};
  for (const i in tokens) {
    palette[i.toString().toLowerCase()] = tokenColorsGroupMapper(tokens[i]);
  }

  return palette as PaletteType;
};

const tokenColorsGroupMapper = (colorsGroup: TokenColorsGroup): PaletteColorOptions => {
  const match = /A[1247]00/;
  let result: PaletteColorOptions = {};
  for (const i in colorsGroup) {
    if (i === 'A') {
      result = {
        ...result,
        ...tokenColorsGroupMapper(colorsGroup[i] as TokenColorsGroup),
      };
    } else {
      const key = match.test(i) ? i : i.toString().toLowerCase();
      Object.assign(result, { [key]: colorsGroup[i].value.toString().toUpperCase() });
    }
  }

  return result as PaletteColorOptions;
};

export default tokenPaletteMapper;
