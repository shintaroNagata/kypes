import { RecordApiSchema } from ".";
import { FindApi, FindEndpoint } from "./find";

type EnableEndpoints =
  | "record"
  | "records"
  | "record/assignees"
  | "record/status"
  | "records/status";

type EnableMethods<Endpoint> = keyof FindEndpoint<RecordApiSchema, Endpoint>;

type BuildBulkRequestParameters<
  Method,
  Endpoint extends string
> = Endpoint extends EnableEndpoints
  ? Method extends EnableMethods<Endpoint>
    ? {
        method: Method;
        api: `/k/v1/${Endpoint}.json`;
        payload: FindApi<RecordApiSchema, Method, Endpoint>["parameters"];
      }
    : never
  : never;

type BulkRequestParameters = BuildBulkRequestParameters<
  "POST" | "PUT" | "DELETE",
  "record" | "records" | "record/assignees" | "record/status" | "records/status"
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
