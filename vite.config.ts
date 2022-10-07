import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import pkg from './package.json';
import template from './templates/svgr.template';

// Library Global Name
const name = 'AdaptiveUIKit';

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
      entry,
    },
    rollupOptions: {
      external,
    },
  },
});
