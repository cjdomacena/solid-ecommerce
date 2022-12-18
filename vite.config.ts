import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import * as path from "path";
import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [solidPlugin(), devtools({ name: true, componentLocation: true })],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  // https://stackoverflow.com/questions/68217795/vite-resolve-alias-how-to-resolve-paths
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "components/"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "pages/"),
      },
    ],
  },
});

