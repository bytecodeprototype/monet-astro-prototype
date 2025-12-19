import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: 'src',
  base: './',
  build: {
    format: 'file',
  },
});
