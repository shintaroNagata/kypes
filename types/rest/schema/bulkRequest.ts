import { ApiSchema } from "./types";
import { KeyOfUnion } from "./utility";
import { Schema as RecordApiSchema } from "./record";

type SupportedEndpoints =
  | "record"
  | "records"
  | "record/assignees"
  | "record/status"
  | "records/status";
type SupportedMethods = "POST" | "PUT" | "DELETE";

type GetEndpointSchema<Endpoint> = Endpoint extends SupportedEndpoints
  ? RecordApiSchema[Endpoint]
  : Endpoint extends string
  ? RecordApiSchema[SupportedEndpoints]
  : never;
type EnableMethods<Endpoint> = KeyOfUnion<GetEndpointSchema<Endpoint>>;

type BuildBulkRequestParameters<Endpoint, Method> =
  Endpoint extends SupportedEndpoints
    ? Method extends EnableMethods<Endpoint>
      ? {
          method: Method;
          api: `/k/v1/${Endpoint}.json`;
          payload: Extract<
            GetEndpointSchema<Endpoint>[Method],
            ApiSchema
          >["parameters"];
        }
      : never
    : never;

type BulkRequestParameters = BuildBulkRequestParameters<
  SupportedEndpoints,
  SupportedMethods
>;

type BulkRequestSchema = {
  POST: {
    parameters: {
      requests: BulkRequestParameters[];
    };
    response: { results: any[] };
  };
};

type Schema = {
  bulkRequest: BulkRequestSchema;
};

export { Schema };
