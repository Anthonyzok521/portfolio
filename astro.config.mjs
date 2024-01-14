import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    //host: '192.168.100.43'
  },
  integrations: [react()]
});