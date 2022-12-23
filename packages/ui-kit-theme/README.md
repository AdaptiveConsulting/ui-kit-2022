# UI Kit Theme

[![storybook](https://shields.io/badge/storybook-white?logo=storybook&style=flat)](https://adaptiveconsulting.github.io/ui-kit-2022/)
[![npm version](https://img.shields.io/npm/v/@ui-kit-2022/theme.svg?label=@ui-kit-2022/theme)](https://www.npmjs.com/package/@ui-kit-2022/theme)
![npm image](https://img.shields.io/badge/%40ui--kit--2022%2Ftheme--coverage-100%25-brightgreen)

This package contains light and dark themes from the UI Kit Design System. To learn more visit the project's:

- [Storybook](https://adaptiveconsulting.github.io/ui-kit-2022/)
- [GitHub](https://github.com/AdaptiveConsulting/ui-kit-2022)

## Installation

Run the following command to install the package using [NPM](https://www.npmjs.com/)

```
npm i @ui-kit-2022/theme
```

## Usage

To apply a theme import it from the `@ui-kit-2022/theme` package and use a ThemeProvider:

```
import { ThemeProvider } from "@mui/material/styles";
import { light, dark } from "@ui-kit-2022/theme";
import '@ui-kit-2022/theme/dist/style.css';
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <ComponentExample />
    </ThemeProvider>
  </React.StrictMode>
);
```
