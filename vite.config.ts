import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import pkg from './package.json';

// Library Global Name
const name = 'AdaptiveUIKit';

// Entry File
const entry = path.resolve(__dirname, 'src/index.ts');

// Vite Plugins
const plugins = [
  react()
];

// package.json peerDependencies should go here
const external = [
  ...Object.keys(pkg.peerDependencies || {})
];

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
    }
  },
});
