import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PntbizFeCommon',
      fileName: 'pntbiz-fe-common',
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
