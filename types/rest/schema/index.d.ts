import type { Endpoints } from "../http";
import type { ApiSchema } from "./types";
import type { Schema as RecordApiSchema } from "./record";
import type { Schema as BulkRequestApiSchema } from "./bulkRequest";
import type { Schema as AppApiSchema } from "./app";
import type { Schema as SpaceApiSchema } from "./space";

type KintoneRestApiSchema = RecordApiSchema &
  BulkRequestApiSchema &
  AppApiSchema &
  SpaceApiSchema;

type GetEndpointSchema<Endpoint> = Endpoint extends Endpoints
  ? KintoneRestApiSchema[Endpoint]
  : never;

type EnableMethods<Endpoint> = keyof GetEndpointSchema<Endpoint>;

type FindApi<Endpoint, Method> = Endpoint extends unknown
  ? Method extends EnableMethods<Endpoint>
    ? Extract<GetEndpointSchema<Endpoint>[Method], ApiSchema>
    : never
  : never;

export type { FindApi, EnableMethods };
