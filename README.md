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

## Development

1. Install [Node.js and NPM](https://nodejs.org/en/download/)
2. Run the command `npm install`
3. Run the command `npm run prepare`
   - This will enable pre-commit check
4. Run the command `npm run storybook`
   - This wlll open a Storybook tab in your browser to view the components
