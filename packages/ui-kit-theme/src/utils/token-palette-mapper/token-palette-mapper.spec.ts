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
        A: {
          A100: '#F2F2F2',
          A200: '#E4E4E4',
          A400: '#BBB',
          A700: '#555',
        },
      },
    };

    expect(tokenPaletteMapper(tokens)).toStrictEqual(palette);
  });
});
