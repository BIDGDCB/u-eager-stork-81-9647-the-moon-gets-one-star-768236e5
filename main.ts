// The Moon Gets One Star.
// Writes a single one-star review of the Moon (<=120 characters): the
// Moon shows up uninvited every night with the same pale face and zero
// effort, yet still manages to wreck the reviewer's sleep — a complaint
// only the Moon could earn.
//
// Run: node main.ts  (writes /output/entry.txt; override with
// MAKEFUN_OUTPUT_DIR for a local run)
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  '★☆☆☆☆ Same pale face every night, zero effort, still shows up uninvited and wrecks my sleep. Would not orbit again.';

if ([...ENTRY].length > 120) throw new Error('entry over 120 characters');
if (ENTRY.includes('\n')) throw new Error('entry must be a single line');
if (!ENTRY.trim()) throw new Error('entry is empty');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), ENTRY, 'utf8');
console.log(ENTRY);
