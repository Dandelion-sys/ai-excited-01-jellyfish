// ai-excited-01 entry (Node 22, standard library only): the image is stored
// beside this file as base64 text (entry.b64) and decoded to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels;
// the judge sees exactly the bytes written.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const out = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, Buffer.from(readFileSync(join(dir, 'entry.b64'), 'utf8').replace(/\s+/g, ''), 'base64'));
