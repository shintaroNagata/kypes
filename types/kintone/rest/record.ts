import { KintoneRecord } from "../types";

type OmitTypes<Record extends KintoneRecord> = {
  [fieldCode in keyof Record]: Omit<Record[fieldCode], "type">;
};

type RecordEndpoints =
  | "record"
  | "records"
  | "records/cursor"
  | "record/comment"
  | "record/comments"
  | "record/assignees"
  | "record/status"
  | "records/status";

type RecordRestApiMap = {
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

export { RecordRestApiMap, RecordEndpoints };
