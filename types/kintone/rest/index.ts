import { KintoneRecord } from "../types";

type OmitTypes<Record extends KintoneRecord> = {
  [fieldCode in keyof Record]: Omit<Record[fieldCode], "type">;
};

type RestApiMap = {
  GetRecord: {
    method: "GET";
    endpoint: "record";
    requestParameters: { app: string | number; id: string | number };
    responseProperties: { record: KintoneRecord };
  };
  PostRecord: {
    method: "POST";
    endpoint: "record";
    requestParameters: {
      app: string | number;
      record?: OmitTypes<KintoneRecord>;
    };
    responseProperties: {
      id: string;
      revision: string;
    };
  };
  PutRecord: {
    method: "PUT";
    endpoint: "record";
    requestParameters: {
      app: string | number;
      record?: OmitTypes<KintoneRecord>;
      revision?: string | number;
    } & (
      | { id: string | number }
      | { updateKey: { field: string; value: string } }
    );
    responseProperties: {
      id: string;
      revision: string;
    };
  };
  GetRecords: {
    method: "GET";
    endpoint: "records";
    requestParameters: {
      app: string | number;
      fields?: string[];
      query?: string;
      totalCount?: true;
    };
    responseProperties: { record: KintoneRecord[]; totalCount: string | null };
  };
  PostRecords: {
    method: "POST";
    endpoint: "records";
    requestParameters: {
      app: string | number;
      records: OmitTypes<KintoneRecord>[];
    };
    responseProperties: {
      ids: string[];
      revisions: string[];
    };
  };
  PutRecords: {
    method: "PUT";
    endpoint: "records";
    requestParameters: {
      app: string | number;
      records: Array<
        {
          record?: OmitTypes<KintoneRecord>;
          revision?: string | number;
        } & (
          | { id: string | number }
          | { updateKey: { field: string; value: string } }
        )
      >;
    };
    responseProperties: {
      records: { id: string; revision: string }[];
    };
  };
  DeleteRecords: {
    method: "DELETE";
    endpoint: "records";
    requestParameters: {
      app: string | number;
      ids: (string | number)[];
      revisions?: (string | number)[];
    };
    responseProperties: {};
  };
  PostRecordsCursor: {
    method: "POST";
    endpoint: "records/cursor";
    requestParameters: {
      app: string | number;
      fields?: string[];
      query?: string;
      size?: string | number;
    };
    responseProperties: {
      id: string;
      totalCount: string;
    };
  };
  GetRecordsCursor: {
    method: "GET";
    endpoint: "records/cursor";
    requestParameters: {
      id: string;
    };
    responseProperties: {
      records: KintoneRecord[];
      next: boolean;
    };
  };
  DeleteRecordsCursor: {
    method: "DELETE";
    endpoint: "records/cursor";
    requestParameters: {
      id: string;
    };
    responseProperties: {};
  };
  PostRecordComment: {
    method: "POST";
    endpoint: "record/comment";
    requestParameters: {
      app: string | number;
      record: string | number;
      comment: {
        text: string;
        mentions?: Array<{
          code: string;
          type: "USER" | "GROUP" | "ORGANIZATION";
        }>;
      };
    };
    responseProperties: {
      id: string;
    };
  };
  DeleteRecordComment: {
    method: "DELETE";
    endpoint: "record/comment";
    requestParameters: {
      app: string | number;
      record: string | number;
      comment: string | number;
    };
    responseProperties: {};
  };
  GetRecordComments: {
    method: "GET";
    endpoint: "record/comments";
    requestParameters: {
      app: string | number;
      record: string | number;
      order?: "asc" | "desc";
      offset?: number;
      limit?: number;
    };
    responseProperties: {
      comments: Array<{
        id: string;
        text: string;
        createdAt: string;
        creator: {
          code: string;
          name: string;
        };
        mentions: Array<{
          code: string;
          type: "USER" | "GROUP" | "ORGANIZATION";
        }>;
      }>;
      older: boolean;
      newer: boolean;
    };
  };
  PutRecordAssignees: {
    method: "PUT";
    endpoint: "record/assignees";
    requestParameters: {
      app: string | number;
      id: string | number;
      assignees: string[];
      revision?: string | number;
    };
    responseProperties: { revision: string };
  };
  PutRecordStatus: {
    method: "PUT";
    endpoint: "record/status";
    requestParameters: {
      action: string;
      app: string | number;
      assignee?: string;
      id: string | number;
      revision?: string | number;
    };
    responseProperties: { revision: string };
  };
  PutRecordsStatus: {
    method: "PUT";
    endpoint: "records/status";
    requestParameters: {
      app: string | number;
      records: Array<{
        action: string;
        assignee?: string;
        id: string | number;
        revision?: string | number;
      }>;
    };
    responseProperties: { records: Array<{ id: string; revision: string }> };
  };
};

type Methods = "GET" | "POST" | "PUT" | "DELETE";
type Endpoints =
  | "record"
  | "records"
  | "records/cursor"
  | "record/comment"
  | "record/comments"
  | "record/assignees"
  | "record/status"
  | "records/status"
  | "bulkRequest";
type RestApiMapEntries = RestApiMap[keyof RestApiMap];

/**
 * tests
 */
type ExpectExtends<T1, T2> = T1 extends T2 ? true : false;
const test1: ExpectExtends<RestApiMapEntries["method"][], Methods[]> =
  /* to be */ true;
const test2: ExpectExtends<RestApiMapEntries["endpoint"][], Endpoints[]> =
  /* to be */ true;

type PathFor<Endpoint extends Endpoints> = `/k/v1/${Endpoint}`;
type Domain = "cybozu.com" | "kintone.com" | "cybozu.cn";
type UrlFor<Endpoint extends Endpoints> =
  | `https://${string}.${Domain}/k/v1/${Endpoint}.json`
  | `https://${string}.${Domain}/k/guest/${number}/v1/${Endpoint}.json`;

type Paths = PathFor<Endpoints>;
type Urls = UrlFor<Endpoints>;

type ExtractEntryInternal<
  RestApiMapEntry extends RestApiMapEntries,
  Endpoint extends Endpoints,
  Method extends Methods
> = RestApiMapEntry extends RestApiMapEntries
  ? Endpoint extends RestApiMapEntry["endpoint"]
    ? Method extends RestApiMapEntry["method"]
      ? RestApiMapEntry
      : never
    : never
  : never;

type ExtractEntry<
  Endpoint extends Endpoints,
  Method extends Methods
> = ExtractEntryInternal<RestApiMapEntries, Endpoint, Method>;

type EnableMethods<Endpoint extends Endpoints> = ExtractEntry<
  Endpoint,
  Methods
>["method"];

type EndpointFromPath<Path extends PathFor<Endpoints>> = Path extends PathFor<
  infer Endpoint
>
  ? Endpoint
  : never;

type EndpointFromUrl<Url extends UrlFor<Endpoints>> = Url extends UrlFor<
  infer Endpoint
>
  ? Endpoint
  : never;

type RequestParameters<
  Endpoint extends Endpoints,
  Method extends Methods
> = ExtractEntry<Endpoint, Method>["requestParameters"];

type ResponseProperties<
  Endpoint extends Endpoints,
  Method extends Methods
> = ExtractEntry<Endpoint, Method>["responseProperties"];

export {
  Paths,
  Urls,
  EnableMethods,
  EndpointFromPath,
  EndpointFromUrl,
  RequestParameters,
  ResponseProperties,
};
