import { buildApp } from "./build-app";
import { buildServer } from "./build-server";

async function buildAll() {
  try {
    await buildApp();
    await buildServer();
    console.log("✓ All builds completed successfully");
  } catch (error) {
    console.error("× Build failed:", error);
    process.exit(1);
  }
}

buildAll();
