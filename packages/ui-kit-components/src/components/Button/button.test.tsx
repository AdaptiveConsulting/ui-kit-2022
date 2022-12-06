import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Button from './button';

test('Render button component correctly', () => {
  render(<Button>Test Button</Button>);

  expect(screen.getAllByText('Test Button')[0]).toBeInTheDocument();
});
