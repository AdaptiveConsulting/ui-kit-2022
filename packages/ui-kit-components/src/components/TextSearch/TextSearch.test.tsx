import '@testing-library/jest-dom';

import { render, screen, fireEvent, within } from '@testing-library/react';
import TextSearch from './TextSearch';

describe('TextSearch Component', () => {
  describe('Given render a TextSearch with custom props', () => {
    beforeEach(() => {
      render(
        <TextSearch
          options={[
            { label: 'Option 1' },
            { label: 'Option 2' },
            { label: 'Another Option' },
            { label: 'A fourth option' },
          ]}
          placeholder="Search"
        />,
      );
    });
    describe('When render the TextSearch with a custom placeholder', () => {
      it('Then the custom placeholder text should be in the document', () => {
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
      });
    });

    describe('When the button is clicked', () => {
      beforeEach(() => {
        // Although the button is not visible, it triggers the dropdown.
        const autocomplete = screen.getByTestId('TextSearch-autocomplete');
        const button = within(autocomplete).getByRole('button');
        fireEvent.click(button);
      });

      it('Then the dropdown part should be in the document', () => {
        const dropdown = screen.getByRole('presentation');
        expect(dropdown).toBeInTheDocument();
      });

      it('Then the dropdown should have 4 options', () => {
        expect(screen.getAllByRole('option')).toHaveLength(4);
      });

      describe('And when input search item is set to `a`', () => {
        it('Then the dropdown should have 2 options', () => {
          fireEvent.change(screen.getByRole('combobox'), { target: { value: 'a' } });
          expect(screen.getAllByRole('option')).toHaveLength(2);
        });
      });

      describe('And when input search item is set to `Option 1`', () => {
        it('Then the dropdown should have 1 option', () => {
          fireEvent.change(screen.getByRole('combobox'), {
            target: { value: 'Option 1' },
          });
          expect(screen.getAllByRole('option')).toHaveLength(1);
        });
      });

      describe('And when input search item is set to `Hello`', () => {
        it('Then the dropdown should have no option', () => {
          fireEvent.change(screen.getByRole('combobox'), {
            target: { value: 'Hello' },
          });
          expect(screen.getByText('No options')).toBeInTheDocument();
        });
      });
    });
  });
});
