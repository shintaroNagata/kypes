import type { ApiSchema } from "./types";
import type { Schema as RecordApiSchema } from "./record";

type SupportedEndpoints =
  | "record"
  | "records"
  | "record/assignees"
  | "record/status"
  | "records/status";
type SupportedMethods = "POST" | "PUT" | "DELETE";

type GetEndpointSchema<Endpoint> = Endpoint extends SupportedEndpoints
  ? RecordApiSchema[Endpoint]
  : never;
type EnableMethods<Endpoint> = keyof GetEndpointSchema<Endpoint>;
type FindApi<Endpoint, Method> = Endpoint extends unknown
  ? Method extends EnableMethods<Endpoint>
    ? Extract<GetEndpointSchema<Endpoint>[Method], ApiSchema>
    : never
  : never;

type BuildRequest<Endpoint, Method> = Endpoint extends string
  ? Method extends EnableMethods<Endpoint>
    ? {
        method: Method;
        api: `/k/v1/${Endpoint}.json`;
        payload: FindApi<Endpoint, Method>["request"];
      }
    : never
  : never;
type Request = BuildRequest<SupportedEndpoints, SupportedMethods>;

type BuildSuccessResult<Endpoint, Method> = FindApi<
  Endpoint,
  Method
>["response"];
type SuccessResult = BuildSuccessResult<SupportedEndpoints, SupportedMethods>;
type FailureResult =
  | Record<string, never>
  | { message: string; id: string; code: string };

type BulkRequestSchema = {
  POST: {
    request: {
      requests: Request[];
    };
    response: { results: SuccessResult[] } | { results: FailureResult[] };
  };
};

type Schema = {
  bulkRequest: BulkRequestSchema;
};

export type { Schema };
