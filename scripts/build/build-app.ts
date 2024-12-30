import { build } from "vite";
import { resolve } from "path";

async function buildApp() {
  try {
    await build({
      configFile: resolve(process.cwd(), "vite.config.ts"),
    });
    console.log("✓ App build completed");
  } catch (error) {
    console.error("× App build failed:", error);
    process.exit(1);
  }
}

buildApp();

export { buildApp };
