import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // For local + Express. Change to '/Examly/' for GitHub Pages
  plugins: [react()],
});
