import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Separate Vite build that bundles the static prerender entry for Node.
 * Output: prerender-dist/entry.mjs (consumed by prerender/inject.mjs).
 */
export default defineConfig({
  plugins: [react()],
  // Inline dependencies so the bundle runs in plain Node without ESM resolution surprises
  ssr: {
    noExternal: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..'),
    },
  },
  build: {
    ssr: path.resolve(__dirname, 'entry.tsx'),
    outDir: path.resolve(__dirname, '..', 'prerender-dist'),
    emptyOutDir: true,
    target: 'node18',
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: 'entry.mjs',
        format: 'es',
      },
    },
  },
});
