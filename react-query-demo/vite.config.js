// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: {
      '.js': 'jsx',
      '.ts': 'tsx', // If you're using TypeScript
    },
  },
});
