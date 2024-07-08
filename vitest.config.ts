import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "QA Architecture",
    environment: "node",
    include: ["**/*.test.mts"],
    setupFiles: ["test/setup/arch.ts"],
  }
});
