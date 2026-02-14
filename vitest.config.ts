import { defineConfig } from "vitest/config";
import oxc from "unplugin-oxc/vite";

export default defineConfig({
  test: {
    environment: "node",
  },
  plugins: [
    oxc({
      transform: {
        decorator: {
          legacy: true,
          emitDecoratorMetadata: true,
        },
      },
      sourcemap: true,
    }),
  ],
});
