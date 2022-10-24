import { FieldsMap, InSubtableFieldsMap, Subtable } from "../../field";

type FieldList = FieldsMap[keyof FieldsMap]["rest"]["record"];
type InSubtableFieldList =
  InSubtableFieldsMap[keyof InSubtableFieldsMap]["rest"]["record"];

type IDField = FieldsMap["ID"]["rest"]["record"];
type RevisionField = FieldsMap["Revision"]["rest"]["record"];

type RecordSchema = {
  GET: {
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
  POST: {
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
  PUT: {
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
};

type RecordsSchema = {
  GET: {
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
  POST: {
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
  PUT: {
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
    response: { records: Array<{ id: string; revision: string }> };
  };
  DELETE: {
    parameters: {
      app: string | number;
      ids: Array<string | number>;
      revisions?: Array<string | number>;
    };
    response: Record<string, never>;
  };
};

type RecordsCursorSchema = {
  GET: {
    parameters: { id: string };
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
  POST: {
    parameters: {
      app: string | number;
      fields?: string[];
      query?: string;
      size?: string | number;
    };
    response: { id: string; totalCount: string };
  };
  DELETE: { parameters: { id: string }; response: Record<string, never> };
};

type RecordCommentSchema = {
  POST: {
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
    response: { id: string };
  };
  DELETE: {
    parameters: {
      app: string | number;
      record: string | number;
      comment: string | number;
    };
    response: Record<string, never>;
  };
};
type RecordCommentsSchema = {
  GET: {
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
};
type RecordAssigneesSchema = {
  PUT: {
    parameters: {
      app: string | number;
      id: string | number;
      assignees: string[];
      revision?: string | number;
    };
    response: { revision: string };
  };
};
type RecordStatusSchema = {
  PUT: {
    parameters: {
      action: string;
      app: string | number;
      assignee?: string;
      id: string | number;
      revision?: string | number;
    };
    response: { revision: string };
  };
};
type RecordsStatusSchema = {
  PUT: {
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

type Schema = {
  record: RecordSchema;
  records: RecordsSchema;
  "records/cursor": RecordsCursorSchema;
  "record/comment": RecordCommentSchema;
  "record/comments": RecordCommentsSchema;
  "record/assignees": RecordAssigneesSchema;
  "record/status": RecordStatusSchema;
  "records/status": RecordsStatusSchema;
};

export { Schema };
