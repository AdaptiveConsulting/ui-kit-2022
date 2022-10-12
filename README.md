# UI kit 2022 for Adaptive

## Installation

UI Kit 2022 is available as an [NPM package](https://www.npmjs.com/package/ui-kit-2022)

```
npm i ui-kit-2022
```

## Usage

```
import "./App.css";

import { LogoIcon } from "ui-kit-2022";

function App() {
  return (
    <div className="App">
      <LogoIcon />
    </div>
  );
}
export default App;
```

### Theme Usage

- Install `@mui/material` and `@emotion/styled` using `npm install @mui/material @emotion/styled`

To use a theme other than the default you'll need to add a `ThemeProvider` component. Here is an example of such:

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@mui/material/styles";
import { light, dark } from "ui-kit-2022";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

## Development

1. Install [Node.js and NPM](https://nodejs.org/en/download/)
2. Run the command `npm install`
3. Run the command `npm run prepare`
   - This will enable pre-commit check
4. Run the command `npm run storybook`
   - This wlll open a Storybook tab in your browser to view the components
