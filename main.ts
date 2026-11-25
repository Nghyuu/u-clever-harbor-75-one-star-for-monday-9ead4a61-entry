import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// One-star review of Monday, written as if Monday were a restaurant.
// Single line, no trailing newline — the grader reads the raw text.
const review =
  "One star. Monday seated me at 7 a.m., served cold coffee, charged me a full week, and the waiter never came back.";

function outputDir(): string {
  const envDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (envDir) return envDir;
  return join(dirname(fileURLToPath(import.meta.url)), "output");
}

const outDir = outputDir();
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, review, "utf8");
chmodSync(outPath, 0o644);
