// ai-excited-01 — "Make the AI judge excited"
// A program that writes the entry image for the judge to see.
// The image is stored beside this file as base64 text (entry.b64);
// this program decodes it and writes it out as entry.png.
//
// Node 22, standard library only. Run it like this:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
// Without MAKEFUN_OUTPUT_DIR it writes to /output/entry.png.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folder = dirname(fileURLToPath(import.meta.url));
const source = join(folder, 'entry.b64');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(source)) {
  console.error('entry.b64 not found next to main.ts — cannot write the image.');
  process.exit(1);
}

const encoded = readFileSync(source, 'utf8');
const image = Buffer.from(encoded.replace(/\s+/g, ''), 'base64');

mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, 'entry.png'), image);
