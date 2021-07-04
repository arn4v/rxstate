import reactRefresh from "@vitejs/plugin-react-refresh";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(process.cwd(), "lib/index.jsx"),
      name: "rxstate",
    },
    sourcemap: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [reactRefresh()],
});
