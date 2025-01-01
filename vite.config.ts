import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// Import node polyfills plugin
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true, // Polyfill for `node:` protocol imports
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Shortcut for src folder
    },
  },
  define: {
    // Define process.env.NODE_ENV for compatibility with libraries that rely on it
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development",
    ),
  },
});
