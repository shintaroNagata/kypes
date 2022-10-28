import { Endpoints } from "../http";
import { ApiSchema } from "./types";
import { KeyOfUnion } from "./utility";
import { Schema as RecordApiSchema } from "./record";
import { Schema as BulkRequestApiSchema } from "./bulkRequest";
import { Schema as AppApiSchema } from "./app";
import { Schema as SpaceApiSchema } from "./space";

type KintoneRestApiSchema = RecordApiSchema &
  BulkRequestApiSchema &
  AppApiSchema &
  SpaceApiSchema;

type GetEndpointSchema<Endpoint> = Endpoint extends Endpoints
  ? KintoneRestApiSchema[Endpoint]
  : never;

type EnableMethods<Endpoint> = KeyOfUnion<GetEndpointSchema<Endpoint>>;

type FindApi<Endpoint, Method> = Method extends EnableMethods<Endpoint>
  ? Extract<GetEndpointSchema<Endpoint>[Method], ApiSchema>
  : never;

export { FindApi, EnableMethods };