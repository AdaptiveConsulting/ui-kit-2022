import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import IndexTickers from './IndexTickers';

describe('IndexTickers Component', () => {
  describe('Given a index tickers component', () => {
    describe('When render with custom props', () => {
      beforeEach(() => {
        render(
          <IndexTickers
            name="SPA"
            latestPrice={234.89}
            changedPrice={1.35}
            percentage={0.34}
          />,
        );
      });

      it('Then tickers-name part should display "SPA"', () => {
        expect(screen.queryByTestId('tickers-name')).toHaveTextContent('SPA');
      });

      it('Then latestPrice part should display "$234.89"', () => {
        expect(screen.queryByTestId('latestPrice')).toHaveTextContent('$234.89');
      });

      it('Then changedPrice part should display "+1.35"', () => {
        expect(screen.queryByTestId('changedPrice')).toHaveTextContent('+1.35');
      });

      it('Then percentage part should display "+0.34%"', () => {
        expect(screen.queryByTestId('percentage')).toHaveTextContent('+0.34%');
      });
    });
  });

  describe('Given render the index tickers component', () => {
    describe('When the changedPrice is bigger than 0', () => {
      beforeEach(() => {
        render(
          <IndexTickers
            name="SPA"
            latestPrice={234.89}
            changedPrice={1.35}
            percentage={0.34}
          />,
        );
      });
      it('Then the icon "ArrowUp" should be in the document', () => {
        expect(screen.getByTestId('arrowUp')).toBeInTheDocument();
      });
      it('Then changedPrice and percentage parts should change color to rgb(46, 125, 50)', () => {
        expect(screen.getByTestId('color-change-part')).toHaveStyle(
          `color:rgb(46, 125, 50)`,
        );
      });
    });

    describe('When the changedPrice is less than 0', () => {
      beforeEach(() => {
        render(
          <IndexTickers
            name="SPA"
            latestPrice={234.89}
            changedPrice={-1.35}
            percentage={-0.34}
          />,
        );
      });
      it('Then the icon "ArrowDown" should be in the document', () => {
        expect(screen.getByTestId('arrowDown')).toBeInTheDocument();
      });
      it('Then changedPrice and percentage parts should change color to rgb(211, 47, 47)', () => {
        expect(screen.getByTestId('color-change-part')).toHaveStyle(
          `color:rgb(211, 47, 47)`,
        );
      });
    });

    describe('When the changedPrice is equal to 0', () => {
      beforeEach(() => {
        render(
          <IndexTickers
            name="SPA"
            latestPrice={234.89}
            changedPrice={0}
            percentage={0}
          />,
        );
      });
      it('Then the icon "ArrowDown" should not be in the document', () => {
        expect(screen.queryByTestId('arrowDown')).toBeNull();
      });
      it('Then the icon "ArrowUp" should not be in the document', () => {
        expect(screen.queryByTestId('arrowUp')).toBeNull();
      });
    });
  });
});
