import "server-only";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

/**
 * Append-only JSONL store for form submissions and analytics events.
 *
 * Zero-infrastructure by design: the site must be able to receive a partnership
 * request the day it goes live, without a database to provision. Every record
 * carries a stable id and ISO timestamp, so migrating to Postgres later is a
 * straight replay of the files.
 *
 * Set KORAH_DATA_DIR to point at a persistent volume in production.
 */

const DATA_DIR = process.env.KORAH_DATA_DIR
  ? path.resolve(process.env.KORAH_DATA_DIR)
  : path.join(process.cwd(), ".data");

export type Collection = "contact" | "partners" | "analytics";

export type StoredRecord<T> = T & {
  id: string;
  createdAt: string;
};

let ensured: Promise<void> | null = null;

function ensureDir(): Promise<void> {
  ensured ??= mkdir(DATA_DIR, { recursive: true }).then(() => undefined);
  return ensured;
}

/** Appends one record and returns it, id and timestamp included. */
export async function append<T extends object>(
  collection: Collection,
  data: T,
): Promise<StoredRecord<T>> {
  const record: StoredRecord<T> = {
    ...data,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  await ensureDir();
  await appendFile(
    path.join(DATA_DIR, `${collection}.jsonl`),
    `${JSON.stringify(record)}\n`,
    "utf8",
  );

  return record;
}

export function dataDir(): string {
  return DATA_DIR;
}
