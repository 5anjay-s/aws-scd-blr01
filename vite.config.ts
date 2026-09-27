import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/')) {
            if (id.includes('motion')) return 'motion';
            return 'vendor';
          }
        },
      },
    },
  },
});
