import { PaletteColor, PaletteOptions } from '@mui/material';

interface PaletteType {
  [x: string]: PaletteOptions | PaletteType | PaletteColor;
  sell: PaletteColor;
  buy: PaletteColor;
}

interface TokenColor {
  value: string;
  type: string;
}

interface TokensType {
  [x: string]: TokenColor | TokensType | string;
}

const tokenPaletteMapper = (tokens: TokensType) => {
  const match = /A([1247]00)?/;

  let palette: PaletteType | string | Record<string, unknown> = {};
  let i: string;
  for (i in tokens) {
    if (typeof tokens[i] === 'object' && tokens !== null) {
      (palette as PaletteType)[match.test(i) ? i : i.toLowerCase()] = tokenPaletteMapper(
        tokens[i] as TokensType,
      );
    } else {
      palette = (tokens['value'] as string).toUpperCase();
    }
  }

  return palette as PaletteType;
};

export default tokenPaletteMapper;
