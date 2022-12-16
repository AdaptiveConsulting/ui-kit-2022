import * as React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import PageNotFound from './PageNotFound';

jest.mock('./sad-face.svg', () => ({
  __esModule: true,
  ReactComponent: () => {
    return <p>Sad Face</p>;
  },
}));

jest.mock("../TextSearch/TextSearch", () => ({
  __esModule: true,
  default: () => {
    return <p>Text Search</p>
  }
}))

jest.mock("../Branding/branding", () => ({
  LogoText: () => {
    return <p>Logo Text</p>
  }
}))

jest.mock("../Button", () => ({
  __esModule: true,
  Button: () => {
    return <p>Test Button</p>
  }
}))

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
});
