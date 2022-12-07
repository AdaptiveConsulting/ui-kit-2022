import '@testing-library/jest-dom';

import { act, fireEvent, render, screen } from '@testing-library/react';

import Button from './button';

describe('Button component tests', () => {
  it('Render button component correctly', () => {
    render(<Button>Test Button</Button>);

    expect(screen.getAllByText('Test Button')[0]).toBeInTheDocument();
  });

  it('Click button and the corresponding function will be called', () => {
    const fn = jest.fn(() => {});

    render(<Button click={fn}>Test Button</Button>);

    fireEvent.click(screen.getByText('Test Button'));

    expect(fn).toBeCalled();
  });

  it('Use left icon button', () => {
    render(<Button icon="left">Left Button</Button>);

    const element = screen.getByTestId('left-icon');
    expect(element).toBeInTheDocument();
  });

  it('Use right icon button', () => {
    render(<Button icon="right">Left Button</Button>);

    const element = screen.getByTestId('right-icon');
    expect(element).toBeInTheDocument();
  });

  it('Use normal icon button', () => {
    render(<Button>Left Button</Button>);

    const element = screen.getByTestId('normal');
    expect(element).toBeInTheDocument();
  });

  it('test focus the button', () => {
    render(<Button>Focus Test</Button>);

    const element = screen.getByTestId('normal');

    const styleDefault = window.getComputedStyle(element);
    act(() => {
      element.focus();
    });
    const styleFocus = window.getComputedStyle(element);

    expect(element).toBeInTheDocument();
    act(() => {
      element.blur();
    });
    const styleBlur = window.getComputedStyle(element);

    expect(element).toMatchSnapshot();
    expect(JSON.stringify(styleDefault)).not.toEqual(JSON.stringify(styleFocus));
    expect(JSON.stringify(styleDefault)).toEqual(JSON.stringify(styleBlur));
  });
});
