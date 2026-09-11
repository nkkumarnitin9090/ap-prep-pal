"use client";

import * as React from "react";

const noopSubscribe = () => () => {};

/**
 * False during server render and the hydrating client render, true afterwards.
 * Lets browser-only values (localStorage, today's date) render without ever
 * producing markup that disagrees with the server.
 */
export function useHydrated(): boolean {
  return React.useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
