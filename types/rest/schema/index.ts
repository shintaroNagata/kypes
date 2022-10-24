import { Endpoints } from "../endpoint";
import { Schema as RecordApiSchema } from "./record";
import { Schema as BulkRequestApiSchema } from "./bulkRequest";
import {
  FindApi as FindApiInternal,
  FindEndpoint as FindEndpointInternal,
} from "./find";

type KintoneRestApiSchema = RecordApiSchema & BulkRequestApiSchema;

// schema check
type DefinedEndpoints = keyof KintoneRestApiSchema;
type CheckEndpoints<DefinedEndpoint> = [DefinedEndpoint] extends [Endpoints]
  ? [Endpoints] extends [DefinedEndpoint]
    ? true
    : false
  : false;
const _check: CheckEndpoints<DefinedEndpoints> = true;

type FindApi<Endpoint, Method> = FindApiInternal<
  KintoneRestApiSchema,
  Endpoint,
  Method
>;
type FindEndpoint<Endpoint> = FindEndpointInternal<
  KintoneRestApiSchema,
  Endpoint
>;

export { FindApi, FindEndpoint };
