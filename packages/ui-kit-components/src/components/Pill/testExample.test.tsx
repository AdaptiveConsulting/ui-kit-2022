import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Pill from './Pill';

test('Render button component correctly', () => {
  render(<Pill label="test" />);

  expect(screen.getAllByText('test')[0]).toBeInTheDocument();
});
