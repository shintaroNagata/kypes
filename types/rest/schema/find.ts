import { Endpoints } from "../endpoint";
import { Methods } from "../http";
import { ApiSchema, EndpointsSchema } from "./types";

type FindEndpoint<Schema, Endpoint> = Schema extends EndpointsSchema
  ? Endpoint extends Endpoints
    ? Schema[Endpoint]
    : never
  : never;

type FindApi<Schema, Endpoint, Method> = Method extends Methods
  ? Extract<FindEndpoint<Schema, Endpoint>[Method], ApiSchema>
  : never;

export { FindEndpoint, FindApi };
