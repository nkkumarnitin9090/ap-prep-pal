#!/usr/bin/env node
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { bindHostname } from "./bind-hostname.mjs";

const PORT = 43127;
const HOSTNAME = bindHostname();

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const child = spawn(
  process.execPath,
  [nextBin, "start", "--port", String(PORT), "--hostname", HOSTNAME],
  { stdio: "inherit", cwd: root, env: process.env },
);

function forward(signal) {
  if (!child.killed) child.kill(signal);
}

process.on("SIGINT", () => forward("SIGINT"));
process.on("SIGTERM", () => forward("SIGTERM"));
child.on("exit", (code, signal) => {
  if (signal) process.exit(1);
  process.exit(code ?? 0);
});
