"use client";

import * as React from "react";

function subscribe(onChange: () => void): () => void {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getSnapshot(): string {
  return window.location.hash.slice(1);
}

function getServerSnapshot(): string {
  return "";
}

/** The current URL fragment without its `#`, empty during server render. */
export function useHash(): string {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
