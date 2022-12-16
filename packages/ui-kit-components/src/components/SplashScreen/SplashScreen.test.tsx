import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import SplashScreen from './SplashScreen';

jest.mock('../Branding/branding', () => ({
  __esModule: true,
  LogoLarge: () => {
    return (
      <div data-testid={'logo-brand'}>
        <p>LogoBrand</p>
      </div>
    );
  },
  LogoText: () => {
    return (
      <div data-testid={'logo-text'}>
        <p>LogoText</p>
      </div>
    );
  },
}));

describe('SplashScreen Component', () => {
  describe('Given a splash screen', () => {
    describe('When render a simple splash screen', () => {
      beforeEach(() => {
        render(<SplashScreen />);
      });

      it('Then should display the LogoBrand component', () => {
        expect(screen.getByTestId('logo-brand')).toBeInTheDocument();
      });

      it('Then should display the LogoText component', () => {
        expect(screen.getByTestId('logo-text')).toBeInTheDocument();
      });

      it('Then should display the `Loading...` text', () => {
        expect(screen.getByText('Loading...')).toBeInTheDocument();
      });
    });
  });
});
