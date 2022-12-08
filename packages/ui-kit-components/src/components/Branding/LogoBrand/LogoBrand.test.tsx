import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import LogoBrand from './LogoBrand';

jest.mock('../branding', () => ({
  __esModule: true,
  LogoLarge: ({ sx: { height = 150, width = 148 } }) => {
    return (
      <div data-testid={'logo-brand'}>
        <p>{height}</p>
        <p>{width}</p>
      </div>
    );
  },
}));

describe('LogoBrand component tests', () => {
  describe('Given a default LogoBrand', () => {
    beforeEach(() => {
      render(<LogoBrand />);
    });

    it('Should be the same as the snapshots', () => {
      expect(screen.getByTestId('logo-brand')).toMatchSnapshot();
    });

    it('Then should render the LogoBrand component correctly', () => {
      expect(screen.getByTestId('logo-brand')).toBeInTheDocument();
    });

    it('Then should the LogoBrand component have default size', () => {
      const element = screen.getByTestId('logo-brand');

      expect(element).toHaveTextContent('150');
      expect(element).toHaveTextContent('148');
    });
  });

  describe('Given a LogoBrand with customized size', () => {
    describe('When pass the witdh 50 and height 100', () => {
      beforeEach(() => {
        render(<LogoBrand width={50} height={100} />);
      });

      it('Then should get the witdh and height displayed', () => {
        const element = screen.getByTestId('logo-brand');

        expect(element).toHaveTextContent('50');
        expect(element).toHaveTextContent('100');
      });
    });
  });
});
