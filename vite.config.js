import { defineConfig } from 'vite';

export default defineConfig(({ command, isPreview }) => ({
  // Keep local development at /, and build/preview for the GitHub Pages project URL.
  base: command === 'build' || isPreview ? '/ai_rpa_lec/' : '/',
}));
