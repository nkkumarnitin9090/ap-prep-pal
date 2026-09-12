#!/usr/bin/env node
import { spawn } from "node:child_process";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = 43127;
const HOSTNAME = "0.0.0.0";
const OPEN_URL = `http://127.0.0.1:${PORT}`;

function portInUse() {
  return new Promise((resolve) => {
    let settled = false;
    const done = (value) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };

    const server = net.createServer();
    server.once("error", () => done(true));
    server.once("listening", () => {
      server.close(() => done(false));
    });
    server.listen(PORT, HOSTNAME);
  });
}

if (await portInUse()) {
  console.log("The AP study-planner dashboard is already running.");
  console.log(`Open ${OPEN_URL} — click Preview in Cursor. Do not start a second server.`);
  process.exit(0);
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const child = spawn(
  process.execPath,
  [nextBin, "dev", "--port", String(PORT), "--hostname", HOSTNAME],
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
