import template from '@ui-kit-2022/svgr-template';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import pkg from './package.json';

// Library Global Name
const name = 'AdaptiveUIKit';

// Output File Name
const fileName = 'ui-kit-2022';

// Entry File
const entry = path.resolve(__dirname, 'src/index.ts');

// Vite Plugins
const plugins = [react(), svgr({ svgrOptions: { template } })];

// package.json peerDependencies should go here
const external = [...Object.keys(pkg.peerDependencies || {})];

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  build: {
    lib: {
      name,
      fileName,
      entry,
    },
    rollupOptions: {
      external,
    },
  },
});
