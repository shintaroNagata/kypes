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
    parameters: { app: string | number; id: string | number };
    response: {
      record: {
        $id: IDField["get"];
        $revision: RevisionField["get"];
        [fieldCode: string]:
          | FieldList["get"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["get"];
            }>["rest"]["record"]["get"];
      };
    };
  };
  PostRecord: {
    method: "POST";
    endpoint: "record";
    parameters: {
      app: string | number;
      record?: {
        [fieldCode: string]:
          | FieldList["add"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["add"];
            }>["rest"]["record"]["add"];
      };
    };
    response: {
      id: string;
      revision: string;
    };
  };
  PutRecord: {
    method: "PUT";
    endpoint: "record";
    parameters: {
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
    response: {
      id: string;
      revision: string;
    };
  };
  GetRecords: {
    method: "GET";
    endpoint: "records";
    parameters: {
      app: string | number;
      fields?: string[];
      query?: string;
      totalCount?: true;
    };
    response: {
      records: Array<{
        $id: IDField["get"];
        $revision: RevisionField["get"];
        [fieldCode: string]:
          | FieldList["get"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["get"];
            }>["rest"]["record"]["get"];
      }>;
      totalCount: string | null;
    };
  };
  PostRecords: {
    method: "POST";
    endpoint: "records";
    parameters: {
      app: string | number;
      records: Array<{
        [fieldCode: string]:
          | FieldList["add"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["add"];
            }>["rest"]["record"]["add"];
      }>;
    };
    response: {
      ids: string[];
      revisions: string[];
    };
  };
  PutRecords: {
    method: "PUT";
    endpoint: "records";
    parameters: {
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
    response: {
      records: Array<{ id: string; revision: string }>;
    };
  };
  DeleteRecords: {
    method: "DELETE";
    endpoint: "records";
    parameters: {
      app: string | number;
      ids: Array<string | number>;
      revisions?: Array<string | number>;
    };
    response: Record<string, never>;
  };
  PostRecordsCursor: {
    method: "POST";
    endpoint: "records/cursor";
    parameters: {
      app: string | number;
      fields?: string[];
      query?: string;
      size?: string | number;
    };
    response: {
      id: string;
      totalCount: string;
    };
  };
  GetRecordsCursor: {
    method: "GET";
    endpoint: "records/cursor";
    parameters: {
      id: string;
    };
    response: {
      records: Array<{
        $id: IDField["get"];
        $revision: RevisionField["get"];
        [fieldCode: string]:
          | FieldList["get"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["get"];
            }>["rest"]["record"]["get"];
      }>;
      next: boolean;
    };
  };
  DeleteRecordsCursor: {
    method: "DELETE";
    endpoint: "records/cursor";
    parameters: {
      id: string;
    };
    response: Record<string, never>;
  };
  PostRecordComment: {
    method: "POST";
    endpoint: "record/comment";
    parameters: {
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
    response: {
      id: string;
    };
  };
  DeleteRecordComment: {
    method: "DELETE";
    endpoint: "record/comment";
    parameters: {
      app: string | number;
      record: string | number;
      comment: string | number;
    };
    response: Record<string, never>;
  };
  GetRecordComments: {
    method: "GET";
    endpoint: "record/comments";
    parameters: {
      app: string | number;
      record: string | number;
      order?: "asc" | "desc";
      offset?: number;
      limit?: number;
    };
    response: {
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
    parameters: {
      app: string | number;
      id: string | number;
      assignees: string[];
      revision?: string | number;
    };
    response: { revision: string };
  };
  PutRecordStatus: {
    method: "PUT";
    endpoint: "record/status";
    parameters: {
      action: string;
      app: string | number;
      assignee?: string;
      id: string | number;
      revision?: string | number;
    };
    response: { revision: string };
  };
  PutRecordsStatus: {
    method: "PUT";
    endpoint: "records/status";
    parameters: {
      app: string | number;
      records: Array<{
        action: string;
        assignee?: string;
        id: string | number;
        revision?: string | number;
      }>;
    };
    response: { records: Array<{ id: string; revision: string }> };
  };
};

export { RecordRestApiMap };
