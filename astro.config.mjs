// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({

  base: '/bee-calculus/', // Cambia esto por el nombre de tu repo

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpinejs()
  ]
});
