import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Added for correct asset paths in production
  server: {
    port: 3000,
    open: true
  }
});

