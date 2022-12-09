import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import IndexTickers from './IndexTickers';

describe('Render the index tickers component', () => {
  describe('When making name of SPA, latestPrice of 234.89, changedPrice of 1.35, and percentage of 0.34 ', () => {
    test('Then expect the name:SPA, latestPrice:$234.89, changedPrice:+1.35, percentage:+0.34% on the screen', () => {
      render(
        <IndexTickers
          name="SPA"
          latestPrice={234.89}
          changedPrice={1.35}
          percentage={0.34}
        />,
      );
      expect(screen.getByText('SPA')).toBeInTheDocument();
      expect(screen.getByText('$234.89')).toBeInTheDocument();
      expect(screen.getByText('+1.35')).toBeInTheDocument();
      expect(screen.getByText('+0.34%')).toBeInTheDocument();
    });
  });
});

describe('When given different changedPrice, the icon before changedPrice will be changed based on the value of changedPrice', () => {
  test('ChangedPrice > 0, then the icon is ArrowUp', () => {
    render(
      <IndexTickers
        name="SPA"
        latestPrice={234.89}
        changedPrice={1.35}
        percentage={0.34}
      />,
    );
    expect(screen.getByTestId('arrowUp')).toBeInTheDocument();
  });
  test('ChangedPrice < 0, then the icon is ArrowDown', () => {
    render(
      <IndexTickers
        name="SPA"
        latestPrice={234.89}
        changedPrice={-1.35}
        percentage={-0.34}
      />,
    );
    expect(screen.getByTestId('arrowDown')).toBeInTheDocument();
  });
  test('ChangedPrice = 0, then the icon does not exist', () => {
    render(
      <IndexTickers name="SPA" latestPrice={234.89} changedPrice={0} percentage={0} />,
    );
    expect(screen.queryByTestId('arrowDown')).toBeNull();
    expect(screen.queryByTestId('arrowUp')).toBeNull();
  });
});

describe('When given different changedPrice, the color of changedPrice and percentage will be changed based on the value of changedPrice', () => {
  test('ChangedPrice > 0, then changedPrice and percentage parts change color to #01C38D', () => {
    render(
      <IndexTickers
        name="SPA"
        latestPrice={234.89}
        changedPrice={1.35}
        percentage={0.34}
      />,
    );
    expect(screen.getByTestId('color-change-part')).toHaveStyle(`color:rgb(46, 125, 50)`);
  });
  test('ChangedPrice < 0, then changedPrice and percentage parts change color to #FF274B', () => {
    render(
      <IndexTickers
        name="SPA"
        latestPrice={234.89}
        changedPrice={-1.35}
        percentage={-0.34}
      />,
    );
    expect(screen.getByTestId('color-change-part')).toHaveStyle(`color:rgb(211, 47, 47)`);
  });
});
