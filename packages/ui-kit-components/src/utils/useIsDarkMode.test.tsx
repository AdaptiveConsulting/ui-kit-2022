import * as React from 'react';
import { renderHook, RenderResult } from '@testing-library/react';
import { createTheme, ThemeProvider, Palette } from '@mui/material';
import UseIsDarkMode from './useIsDarkMode';

describe('Test UseIsDarkMode', () => {
  describe('Given the UseIsDarkMode hook', () => {
    describe('When the theme is dark', () => {
      let res: {current: boolean};
      beforeEach(() => {
        const theme = createTheme({
          palette: {
            mode: 'dark',
          } as Palette,
        });

        const wrapper = ({ children }: { children: React.ReactElement }) => (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        );
        res = renderHook(() => UseIsDarkMode(), { wrapper }).result;
      });

      it('Then should get the true value', () => {
        expect(res.current).toBe(true);
      });
    });

    describe('When the theme is light', () => {
      let res: {current: boolean};
      beforeEach(() => {
        const theme = createTheme({
          palette: {
            mode: 'light',
          } as Palette,
        });

        const wrapper = ({ children }: { children: React.ReactElement }) => (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        );
        res = renderHook(() => UseIsDarkMode(), { wrapper }).result;
      });

      it('Then should get the false value', () => {
        expect(res.current).toBe(false);
      });
    });
  });
});
