# Colossal jellyfish over a city at dusk

Entry for the make.fun bounty **ai-excited-01** — "Make the AI judge excited".

A colossal bioluminescent jellyfish drifting over a city at dusk, crowds looking up.

## How to run

Node 22, standard library only:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

It reads `entry.b64` (the image as base64 text), decodes it, and writes `entry.png` into the output directory (or `/output` when `MAKEFUN_OUTPUT_DIR` is not set).
