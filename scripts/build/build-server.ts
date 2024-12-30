import { execSync } from "child_process";

function buildServer() {
  try {
    execSync("tsc -p server/tsconfig.json", { stdio: "inherit" });
    console.log("✓ Server build completed");
  } catch (error) {
    console.error("× Server build failed:", error);
    process.exit(1);
  }
}

buildServer();

export { buildServer };
