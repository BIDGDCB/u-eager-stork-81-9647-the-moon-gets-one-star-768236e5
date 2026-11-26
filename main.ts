// The Moon Gets One Star — a one-star review of the Moon, at most 120 chars.
// This program holds the review as a constant, checks it against the
// competition's gate (one line, 1-120 characters, not only whitespace),
// and writes it to entry.txt in $MAKEFUN_OUTPUT_DIR (or /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;

// The review: a star rating, a grievance, and the reason the Moon earned its single star.
const ENTRY =
  "★☆☆☆☆ Great lighting, terrible landlord. Always late, never fixes the tides, and stares at you all night.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const line = ENTRY.trim();
if (line.length === 0) {
  fail("entry is empty or only whitespace");
}
if (/[\r\n]/.test(line)) {
  fail("entry must be a single line");
}
if (line.length > MAX_CHARS) {
  fail(`entry is ${line.length} characters, over the ${MAX_CHARS} limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
console.log(`wrote ${line.length} characters to ${outPath}`);
