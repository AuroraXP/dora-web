// @ts-check
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
	image: { service: passthroughImageService() },
	integrations: [solidJs()],
	vite: { plugins: [tailwindcss()] },
});
