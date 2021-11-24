import { ExtractRestApiMapEntry } from "./types";
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
        payload: Api["requestParameters"];
      }
    : never;

type BulkRequestApiParameter =
  BulkRequestApiParameterInternal<EnableBulkRequestApi>;

type BulkRequestRestApiMap = {
  BulkRequest: {
    method: "POST";
    endpoint: "bulkRequest";
    requestParameters: {
      request: BulkRequestApiParameter[];
    };
    responseProperties: { results: any[] };
  };
};

export { BulkRequestRestApiMap };
