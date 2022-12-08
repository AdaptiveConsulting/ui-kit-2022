import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Logo from './Logo';

jest.mock("../branding", () => ({
  __esModule: true,
  LogoSmall: () => {
    return <p>Small Logo</p>;
  },
  LogoLarge: () => {
    return <p>Large Logo</p>
  },
  LogoMaximized: () => {
    return <p>Maximized Logo</p>
  }
}));

describe("Logo component test", () => {
  describe("Given a default Logo", () => {
    beforeEach(() => {
      render(<Logo />)
    })

    describe("When render the default Logo", () => {
      it("Then should it render correctly", () => {
        expect(screen.getByText('Small Logo')).toBeInTheDocument();
      })
    })
  })

  describe("Given a large logo", () => {
    beforeEach(() => {
      render(<Logo variant={"large"}/>)
    })

    describe("When render the large logo", () => {
      it("Then should it give the large logo", () => {
        expect(screen.getByText('Large Logo')).toBeInTheDocument();
      })
    })
  })

  describe("Given a maximized logo", () => {
    beforeEach(() => {
      render(<Logo variant={"maximized"}/>)
    })

    describe("When render the maximized logo", () => {
      it("Then should it give the maximized logo", () => {
        expect(screen.getByText('Maximized Logo')).toBeInTheDocument();
      })
    })
  })
})