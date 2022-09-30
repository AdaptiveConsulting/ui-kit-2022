# UI kit 2022 for Adaptive

## Project Setup

### Enable pre-commit check

- Run the command `npm run prepare`

### Integretion DarkMode Add-on with customized theme

- In the file `.storybook/preview.ts` add a global decorator for the integration of DarkMode add-on and custom theme provider.

```
import { useDarkMode } from 'storybook-dark-mode';
import { addDecorator } from '@storybook/react';

// your theme provider
import ThemeContext from './theme';

// create a component that uses the dark mode hook
function ThemeWrapper(props) {
  // render your custom theme provider
  return (
    <ThemeContext.Provider value={useDarkMode() ? darkTheme : defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const decorators = [renderStory => <ThemeWrapper>{renderStory()}</ThemeWrapper>)];
```
