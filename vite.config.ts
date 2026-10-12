import { defineConfig } from 'vite';
import deployment from './vercel.json';

const previewHeaders = Object.fromEntries(deployment.headers[0].headers.map(({ key, value }) => [key, value]));

export default defineConfig({
  preview: { headers: previewHeaders },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
