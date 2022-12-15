import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Typography from './Typography';

describe('Typography component test', () => {
  const text = 'Hello World';
  describe.each([
    { variant: 'h1', dom: 'h1' },
    { variant: 'h2', dom: 'h2' },
    { variant: 'h3', dom: 'h3' },
    { variant: 'h4', dom: 'h4' },
    { variant: 'subheader2', dom: 'h5' },
    { variant: 'subheader2', dom: 'h5' },
    { variant: 'subheader3', dom: 'h6' },
    { variant: 'subheader4', dom: 'h6' },
    { variant: 'body1', dom: 'p' },
    { variant: 'body2', dom: 'p' },
    { variant: 'caption', dom: 'span' },
  ] as const)('When the variant is set to $variant', ({ variant, dom }) => {
    let elem: HTMLElement;

    beforeAll(() => {
      render(<Typography variant={variant}>{text}</Typography>);
      elem = document.body.getElementsByTagName(dom)[0];
    });

    test(`Then the text should be rendered into a ${dom} element`, () => {
      expect(elem).toBeDefined();
      expect(elem.textContent).toBe(text);
    });
  });

  describe('When the loading prop is set', () => {
    beforeAll(() => {
      render(
        <Typography variant="body1" loading={true}>
          {text}
        </Typography>,
      );
    });

    test('Then it does not render the text', () => {
      expect(screen.queryByText(text)).toBeNull();
    });
  });
});
