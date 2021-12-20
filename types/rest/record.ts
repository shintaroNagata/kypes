import { FieldsMap, InSubtableFieldsMap, Subtable } from "../field";

type FieldList = FieldsMap[keyof FieldsMap]["rest"]["record"];
type InSubtableFieldList =
  InSubtableFieldsMap[keyof InSubtableFieldsMap]["rest"]["record"];

type IDField = FieldsMap["ID"]["rest"]["record"];
type RevisionField = FieldsMap["Revision"]["rest"]["record"];

type RecordRestApiMap = {
  GetRecord: {
    method: "GET";
    endpoint: "record";
    requestParameters: { app: string | number; id: string | number };
    responseProperties: {
      record: {
        $id: IDField["get"];
        $revision: RevisionField["get"];
        [fieldCode: string]:
          | FieldList["get"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["get"] | undefined;
            }>["rest"]["record"]["get"]
          | undefined;
      };
    };
  };
  PostRecord: {
    method: "POST";
    endpoint: "record";
    requestParameters: {
      app: string | number;
      record?: {
        [fieldCode: string]:
          | FieldList["add"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["add"];
            }>["rest"]["record"]["add"];
      };
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
      record?: {
        [fieldCode: string]:
          | FieldList["update"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["update"];
            }>["rest"]["record"]["update"];
      };
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
    responseProperties: {
      records: Array<{
        $id: IDField["get"];
        $revision: RevisionField["get"];
        [fieldCode: string]:
          | FieldList["get"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["get"] | undefined;
            }>["rest"]["record"]["get"]
          | undefined;
      }>;
      totalCount: string | null;
    };
  };
  PostRecords: {
    method: "POST";
    endpoint: "records";
    requestParameters: {
      app: string | number;
      records: Array<{
        [fieldCode: string]:
          | FieldList["add"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["add"];
            }>["rest"]["record"]["add"];
      }>;
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
          record?: {
            [fieldCode: string]:
              | FieldList["update"]
              | Subtable<{
                  [fieldCode: string]: InSubtableFieldList["update"];
                }>["rest"]["record"]["update"];
          };
          revision?: string | number;
        } & (
          | { id: string | number }
          | { updateKey: { field: string; value: string } }
        )
      >;
    };
    responseProperties: {
      records: Array<{ id: string; revision: string }>;
    };
  };
  DeleteRecords: {
    method: "DELETE";
    endpoint: "records";
    requestParameters: {
      app: string | number;
      ids: Array<string | number>;
      revisions?: Array<string | number>;
    };
    responseProperties: Record<string, never>;
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
      records: Array<{
        $id: IDField["get"];
        $revision: RevisionField["get"];
        [fieldCode: string]:
          | FieldList["get"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["get"] | undefined;
            }>["rest"]["record"]["get"]
          | undefined;
      }>;
      next: boolean;
    };
  };
  DeleteRecordsCursor: {
    method: "DELETE";
    endpoint: "records/cursor";
    requestParameters: {
      id: string;
    };
    responseProperties: Record<string, never>;
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
    responseProperties: Record<string, never>;
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

export { RecordRestApiMap };
