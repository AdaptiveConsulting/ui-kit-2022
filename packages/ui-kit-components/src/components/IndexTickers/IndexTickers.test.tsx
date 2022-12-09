import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import IndexTickers from './IndexTickers';

describe('Given render the index tickers component', () => {
  describe('When making name of SPA, latestPrice of 234.89, changedPrice of 1.35, and percentage of 0.34 ', () => {
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

    it('Then expect "SPA" in the document', () => {
      expect(screen.getByText('SPA')).toBeInTheDocument();
    });
    it('Then expect "$234.89" in the document', () => {
      expect(screen.getByText('$234.89')).toBeInTheDocument();
    });
    it('Then expect "+1.35" in the document', () => {
      expect(screen.getByText('+1.35')).toBeInTheDocument();
    });
    it('Then expect "+0.34%" in the document', () => {
      expect(screen.getByText('+0.34%')).toBeInTheDocument();
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
        <IndexTickers name="SPA" latestPrice={234.89} changedPrice={0} percentage={0} />,
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
