// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: ganti dengan domain asli setelah deploy, dipakai untuk URL og:image.
  site: 'https://punkkas-artstudio.example.com',
  vite: {
    plugins: [tailwindcss()]
  }
});