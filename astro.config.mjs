// @ts-check

import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [solidJs()],
	vite: { plugins: [tailwindcss()] },
	adapter: cloudflare({ imageService: "passthrough" }),
});
