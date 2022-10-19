import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import pkg from './package.json';

// Library Global Name
const name = 'AdaptiveUIKitTheme';

// Output File Name
const fileName = 'ui-kit-2022-theme';

// Entry File
const entry = path.resolve(__dirname, 'src/index.ts');

// Vite Plugins
const plugins = [react()];

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
