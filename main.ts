// Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes one original dad joke (at most 200 characters) to /output/entry.txt.
// Deterministic: the same joke, byte for byte, on every run. Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my kids the TV remote went on strike. They said, 'Dad, why?' I said, 'It's tired of being pushed around.'";

const outPath = process.argv[2] ?? "/output/entry.txt";
const dir = outPath.slice(0, outPath.lastIndexOf("/")) || ".";
mkdirSync(dir, { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
