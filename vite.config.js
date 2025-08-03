import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression'; // Enables Brotli/GZIP compression
import { visualizer } from 'rollup-plugin-visualizer'; // Optional: bundle analysis

export default defineConfig({
  plugins: [
    react(),
    compression(), // Compress assets in production (gzip by default)
    visualizer({ open: false }), // Generates stats.html for bundle inspection
  ],
  build: {
    target: 'es2015',
    minify: 'esbuild',
    sourcemap: false, // Turn on if debugging in production
    assetsInlineLimit: 4096, // Inline assets <4KB as base64
    rollupOptions: {
      treeshake: true,
    },
  },
  server: {
    open: true, // Auto-open in browser on dev start
    port: 3000,
  },
});
