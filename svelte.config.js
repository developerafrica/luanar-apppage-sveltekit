import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },

      postcss: true,
    }),
  ],
};

export default config;
