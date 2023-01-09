# UI Kit Components

[![storybook](https://shields.io/badge/storybook-white?logo=storybook&style=flat)](https://adaptiveconsulting.github.io/ui-kit-2022/)
[![npm version](https://img.shields.io/npm/v/@ui-kit-2022/components.svg?label=@ui-kit-2022/components)](https://www.npmjs.com/package/@ui-kit-2022/components)
![npm image](https://img.shields.io/badge/%40ui--kit--2022%2Fcomponents--coverage-93.63%25-brightgreen)

This package contains React components for the UI Kit Design System. To learn more visit the project's:

- [Storybook](https://adaptiveconsulting.github.io/ui-kit-2022/)
- [GitHub](https://github.com/AdaptiveConsulting/ui-kit-2022)

## Installation

Run the following command to install the package using [NPM](https://www.npmjs.com/)

```
npm i @ui-kit-2022/components
```

## Usage

The `@ui-kit-2022/components` package provides components and icons used in the UI Kit Design System.

To use a component import it from the package:

```
import { Button } from "@ui-kit-2022/components";

function ComponentExample() {
  return <Button variant="PRIMARY">Button Text</Button>;
}
```

To use an icon import it from the package:

```
import { Icon } from "@ui-kit-2022/components";

function IconExample() {
  return <Icon.Calendar />;
}
```

## Design System Usage

To apply the UI Kit Design System import either theme from the `@ui-kit-2022/theme` package:

```
import { ThemeProvider } from "@mui/material/styles";
import { light, dark } from "@ui-kit-2022/theme";
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

This will provide additional styling for several components in this package.
