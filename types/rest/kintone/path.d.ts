import { SchemaMap } from "./schema";

type Path<Endpoint extends keyof SchemaMap> = `/k/v1/${Endpoint}.json`;
type GuestPath<Endpoint extends keyof SchemaMap> =
  `/k/guest/${number}/v1/${Endpoint}.json`;

export type { Path, GuestPath };
