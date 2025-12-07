import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const plugins: any[] = [];

  // Try to dynamically load optional plugin; skip if not installed
  try {
    const mod = await import("@metagptx/vite-plugin-source-locator");
    const viteSourceLocator = (mod && (mod.viteSourceLocator || mod.default)) as any;
    if (viteSourceLocator) {
      plugins.push(
        viteSourceLocator({
          prefix: "mgx",
        })
      );
    }
  } catch (err: any) {
    if (err && err.code && err.code === "ERR_MODULE_NOT_FOUND") {
      // optional plugin missing — ignore silently
      console.warn("Optional plugin @metagptx/vite-plugin-source-locator not found; continuing without it.");
    } else {
      console.warn("Error loading optional plugin @metagptx/vite-plugin-source-locator:", err);
    }
  }

  // React plugin (required)
  plugins.push(react());

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
