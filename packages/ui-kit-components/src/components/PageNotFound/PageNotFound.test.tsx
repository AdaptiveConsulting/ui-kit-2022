import * as React from 'react';
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import PageNotFound from './PageNotFound';

jest.mock('./sad-face.svg', () => ({
  __esModule: true,
  ReactComponent: () => {
    return <p>Sad Face</p>;
  },
}));

jest.mock('../TextSearch/TextSearch', () => ({
  __esModule: true,
  default: ({ ...inputProps }) => {
    return <p>{inputProps.placeholder}</p>;
  },
}));

jest.mock('../Branding/branding', () => ({
  LogoText: () => {
    return <p>Logo Text</p>;
  },
}));

jest.mock('../Button', () => ({
  __esModule: true,
  Button: ({ click }: { click: (e: React.BaseSyntheticEvent) => void }) => {
    return <button onClick={click}>Test Button</button>;
  },
}));

describe('PageNotFound coponent tests', () => {
  describe('Given render a simple component', () => {
    beforeEach(() => {
      render(
        <PageNotFound
          onNavigateHome={() => null}
          fitContainer={true}
          inputProps={{ options: [] }}
        />,
      );
    });

    it('Then get the same snapshot', () => {
      expect(screen.getByText('© 2022 Reactive Analytics')).toMatchSnapshot();
    });

    it('Then get the right company info', () => {
      expect(screen.getByText('© 2022 Reactive Analytics')).toBeInTheDocument();
    });
  });

  describe('Given render a component with custom props', () => {
    const clickFn = jest.fn();
    beforeEach(() => {
      render(
        <PageNotFound
          onNavigateHome={clickFn}
          fitContainer={true}
          inputProps={{ options: [], placeholder: 'Place Holder' }}
        />,
      );
    });

    it('Then should display the right placeholder value', () => {
      expect(screen.getByText('Place Holder')).toMatchSnapshot();
    });

    describe('When click the test button', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByText('Test Button'));
      });
      it('Then should trigger the click button function', () => {
        expect(clickFn).toBeCalled();
      });
    });
  });
});
