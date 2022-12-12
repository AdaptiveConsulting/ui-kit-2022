import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Plus } from '../../icons';

import Pill from './Pill';

jest.mock('../../icons', () => ({
  _esModule: true,
  Plus: () => {
    return <p data-testid="plusIcon">plus icon</p>;
  },
}));

describe('Pill Component', () => {
  describe('Given a pill component', () => {
    describe('When render a simple pill', () => {
      beforeEach(() => {
        render(<Pill label={'Pill'} />);
      });
      it('Then should have the pill label `Pill`', () => {
        expect(screen.getByText('Pill')).toBeInTheDocument();
      });
    });

    describe('When the ticker prop is set to true', () => {
      beforeEach(() => {
        render(<Pill label={'Pill'} ticker={true} />);
      });
      it('Then should have a fixed width of `64px`', () => {
        expect(screen.getByTestId('pill')).toHaveStyle(`width:64px`);
      });
    });

    describe('When we pass one icon to the Pill', () => {
      beforeEach(() => {
        render(<Pill label={'Pill'} icon={<Plus />} />);
      });
      it('Then should display the icon in the pill component', () => {
        expect(screen.getByTestId('plusIcon')).toBeInTheDocument();
      });
    });

    describe('When we pass the custom color prop', () => {
      beforeEach(() => {
        render(<Pill label={'Pill'} color={'error'} />);
      });
      it('Then should display a background-color of custom color', () => {
        expect(screen.getByTestId('pill')).toHaveStyle(
          `backgroundColor: rgb(211, 47, 47)`,
        );
      });
    });
  });
});
