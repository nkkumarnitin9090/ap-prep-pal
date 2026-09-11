"use client";

import * as React from "react";

import { useHydrated } from "@/hooks/use-hydrated";

const STORAGE_KEY = "ap-study-plan:completed-topics:v1";

export type CompletedMap = Readonly<Record<string, true>>;

const EMPTY: CompletedMap = Object.freeze({});

function readStorage(): CompletedMap {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return EMPTY;
    const next: Record<string, true> = {};
    for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (value) next[key] = true;
    }
    return next;
  } catch {
    return EMPTY;
  }
}

/**
 * Checked topics live in a module-level store read through
 * `useSyncExternalStore`, so the server and the hydrating client always render
 * the same empty state and the real values appear immediately after hydration.
 */
const listeners = new Set<() => void>();
let snapshot: CompletedMap = EMPTY;
let loaded = false;

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);

  if (listeners.size === 1) {
    window.addEventListener("storage", onStorageEvent);
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("storage", onStorageEvent);
    }
  };
}

function onStorageEvent(event: StorageEvent) {
  if (event.key !== STORAGE_KEY) return;
  snapshot = readStorage();
  emit();
}

function getSnapshot(): CompletedMap {
  if (!loaded) {
    snapshot = readStorage();
    loaded = true;
  }
  return snapshot;
}

function getServerSnapshot(): CompletedMap {
  return EMPTY;
}

function commit(next: CompletedMap) {
  snapshot = next;
  loaded = true;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Private browsing or a full quota: progress just is not persisted.
  }
  emit();
}

export interface ProgressApi {
  /** False until hydration finishes; render skeletons for counts until then. */
  hydrated: boolean;
  completed: CompletedMap;
  isComplete: (topicId: string) => boolean;
  setComplete: (topicId: string, value: boolean) => void;
  toggle: (topicId: string) => void;
  setMany: (topicIds: string[], value: boolean) => void;
  countComplete: (topicIds: string[]) => number;
  totalComplete: number;
  reset: () => void;
}

export function useProgress(): ProgressApi {
  const hydrated = useHydrated();
  const stored = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const completed = hydrated ? stored : EMPTY;

  return React.useMemo<ProgressApi>(() => {
    const setComplete = (topicId: string, value: boolean) => {
      const current = getSnapshot();
      if (value === Boolean(current[topicId])) return;
      const next = { ...current };
      if (value) next[topicId] = true;
      else delete next[topicId];
      commit(next);
    };

    return {
      hydrated,
      completed,
      isComplete: (topicId) => Boolean(completed[topicId]),
      setComplete,
      toggle: (topicId) => setComplete(topicId, !completed[topicId]),
      setMany: (topicIds, value) => {
        const next = { ...getSnapshot() };
        for (const id of topicIds) {
          if (value) next[id] = true;
          else delete next[id];
        }
        commit(next);
      },
      countComplete: (topicIds) =>
        topicIds.reduce((sum, id) => (completed[id] ? sum + 1 : sum), 0),
      totalComplete: Object.keys(completed).length,
      reset: () => commit(EMPTY),
    };
  }, [completed, hydrated]);
}
