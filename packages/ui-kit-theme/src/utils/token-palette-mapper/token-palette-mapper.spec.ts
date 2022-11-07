import * as tokens from '../../tokens.json';
import tokenPaletteMapper from './token-palette-mapper';
describe('Test suite for the function mapper token to palette', () => {
  it('The current token need to be mapped correctly to a palette', () => {
    const token = {
      Common: {
        Black: {
          value: '#000',
          type: 'color',
        },
        White: {
          value: '#FFF',
          type: 'color',
        },
      },
    };

    const palette = {
      common: {
        black: '#000',
        white: '#FFF',
      },
    };

    const res = tokenPaletteMapper(token);

    expect(res).toStrictEqual(palette);
  });

  it('The more complexe case need to be mapped correctly to a palette', () => {
    const tokens = {
      Grey: {
        '50': {
          value: '#f9f9f9',
          type: 'color',
        },
        A: {
          A100: {
            value: '#f2f2f2',
            type: 'color',
          },
          A200: {
            value: '#e4e4e4',
            type: 'color',
          },
          A400: {
            value: '#bbb',
            type: 'color',
          },
          A700: {
            value: '#555',
            type: 'color',
          },
        },
      },
    };

    const palette = {
      grey: {
        50: '#F9F9F9',
        A100: '#F2F2F2',
        A200: '#E4E4E4',
        A400: '#BBB',
        A700: '#555',
      },
    };

    expect(tokenPaletteMapper(tokens)).toStrictEqual(palette);
  });

  it('test complete use case', () => {
    const palette = {
      common: {
        black: '#000',
        white: '#FFF',
      },
      primary: {
        main: '#A9ABD1',
        dark: '#5F618D',
        light: '#DBDDFF',
      },
      secondary: {
        main: '#2D96FF',
        dark: '#005195',
        light: '#76C6FF',
      },
      error: {
        main: '#FF274B',
        dark: '#B60017',
        light: '#FF6877',
      },
      warning: {
        main: '#FF8D00',
        dark: '#EA4F01',
        light: '#FFBE45',
      },
      success: {
        main: '#01C38D',
        dark: '#01603D',
        light: '#5DF7BD',
      },
      buy: {
        main: '#00AEFF',
        dark: '#005195',
        light: '#76C6FF',
      },
      sell: {
        main: '#FF274B',
        dark: '#B60017',
        light: '#FF6877',
      },
      grey: {
        50: '#F9F9F9',
        100: '#F2F2F2',
        200: '#E4E4E4',
        300: '#CFCFCF',
        400: '#BBB',
        500: '#7F7F7F',
        600: '#6B6B6B',
        700: '#555',
        800: '#4D4D4D',
        900: '#383838',
        A100: '#F2F2F2',
        A200: '#E4E4E4',
        A400: '#BBB',
        A700: '#555',
      },
      text: {
        'darkbg-primary': '#FFF',
        'lightbg-primary': '#000',
      },
      paper: {
        black: '#323232',
        white: '#F9F9F9',
      },
    };

    expect(tokenPaletteMapper(tokens.global.Colors)).toStrictEqual(palette);
  });
});
