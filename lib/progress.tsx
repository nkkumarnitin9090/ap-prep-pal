"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "ap-study-hub-progress-v1";

export type ProgressMap = Record<string, boolean>;

/** Key conventions — question ids are globally unique:
 *  questions: `q:<questionId>` · schedule tasks: `task:<week>:<i>`
 *  schedule days: `day:<week>:<Day>` · drills done: `drill:<drillId>` */
function load(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function useProgress() {
  const [map, setMap] = useState<ProgressMap>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMap(load());
    setReady(true);
  }, []);

  const toggle = useCallback((id: string) => {
    setMap((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable — keep in-memory state */
      }
      return next;
    });
  }, []);

  const isDone = useCallback((id: string) => !!map[id], [map]);

  const reset = useCallback(() => {
    setMap({});
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return { map, ready, toggle, isDone, reset };
}

export function countDone(map: ProgressMap, ids: string[]) {
  let done = 0;
  for (const id of ids) if (map[id]) done++;
  return { done, total: ids.length, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
}
