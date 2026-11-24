const fs = require("node:fs");
const path = require("node:path");

// One fortune-cookie line for a software developer: a prediction, not advice.
const line = "Your future self, reading this code at 2 a.m., will forgive you — if you leave a comment.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
