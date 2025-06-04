import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@app': `${__dirname}/src/app`,
      '@shared': `${__dirname}/src/shared`,
      '@entities': `${__dirname}/src/entities`,
      '@features': `${__dirname}/src/features`,
      '@widgets': `${__dirname}/src/widgets`,
      '@pages': `${__dirname}/src/pages`,
    },
  },
});
