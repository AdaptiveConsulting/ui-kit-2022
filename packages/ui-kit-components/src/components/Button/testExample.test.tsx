import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Button from './button';

jest.mock('', () => {
  return {
    default: () => {
      return <p>button</p>;
    },
  };
});

test('Render button component correctly', () => {
  render(<Button />);

  expect(screen.getAllByText('button')).toBeInTheDocument();
});
