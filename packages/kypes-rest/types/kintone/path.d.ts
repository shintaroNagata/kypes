import type { SchemaMap } from "./schema";

type GuestPath<Path extends `/${string}`> =
  Path extends `/k/v1/${infer Endpoint}.json`
    ? `/k/guest/${number}/v1/${Endpoint}.json`
    : never;

export type { GuestPath };
