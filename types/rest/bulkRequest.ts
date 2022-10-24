import { ExtractRestApiMapEntry } from "./restApiMap";
import { RecordRestApiMap } from "./record";

type EnableBulkRequestApi = ExtractRestApiMapEntry<
  RecordRestApiMap[keyof RecordRestApiMap],
  | "record"
  | "records"
  | "record/assignees"
  | "record/status"
  | "records/status",
  "POST" | "PUT" | "DELETE"
>;

type BulkRequestApiParameterInternal<Api extends EnableBulkRequestApi> =
  Api extends EnableBulkRequestApi
    ? {
        method: Api["method"];
        api: `/k/v1/${Api["endpoint"]}.json`;
        payload: Api["parameters"];
      }
    : never;

type BulkRequestApiParameter =
  BulkRequestApiParameterInternal<EnableBulkRequestApi>;

type BulkRequestRestApiMap = {
  BulkRequest: {
    method: "POST";
    endpoint: "bulkRequest";
    parameters: {
      requests: BulkRequestApiParameter[];
    };
    response: { results: any[] };
  };
};

export { BulkRequestRestApiMap };
