import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://site_url",
    prefetch: true,

    head: [{
        tag: "meta",
        attrs: {
            property: "og:image",
            content: "https://site_url" + "/social.webp"
        }
        }, {
        tag: "meta",
        attrs: {
            property: "twitter:image",
            content: "https://site_url" + "/social.webp"
        }
        }],

    disable404Route: true,
    favicon: "/favicon.ico",
    output: 'server',
    adapter: netlify(),
    integrations: [react()]
});