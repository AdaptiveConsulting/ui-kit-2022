import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import LogoBrand from './LogoBrand';

jest.mock('../branding', () => ({
  __esModule: true,
  LogoLarge: ({ sx: { height, width } }: { sx: { height: number; width: number } }) => {
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

    it('Then should be the same as the snapshot', () => {
      expect(screen.getByTestId('logo-brand')).toMatchSnapshot();
    });

    it('Then should render the LogoBrand component correctly', () => {
      expect(screen.getByTestId('logo-brand')).toBeInTheDocument();
    });

    it('Then should get the same width as default in the document text', () => {
      const element = screen.getByTestId('logo-brand');

      expect(element).toHaveTextContent('148');
    });

    it('Then should get the same height as default in the document text', () => {
      const element = screen.getByTestId('logo-brand');

      expect(element).toHaveTextContent('150');
    });
  });

  describe('Given a LogoBrand with customized size', () => {
    describe('When pass the custom props width or height', () => {
      beforeEach(() => {
        render(<LogoBrand width={50} height={100} />);
      });

      it('Then should get the same width as prop passed in the document text', () => {
        const element = screen.getByTestId('logo-brand');

        expect(element).toHaveTextContent('50');
      });

      it('Then should get the same height as prop passed in the document text', () => {
        const element = screen.getByTestId('logo-brand');

        expect(element).toHaveTextContent('100');
      });
    });
  });
});
