# UI kit 2022 for Adaptive

## Installation

UI Kit 2022 is available as an [NPM package](https://www.npmjs.com/package/ui-kit-2022)

```
npm i ui-kit-2022
```

## Usage

```
import "./App.css";

import { Logo } from "@ui-kit-2022/components";

function App() {
  return (
    <div className="App">
      <Logo />
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
import { light, dark } from "@ui-kit-2022/theme";
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
