import type { RecordForGet, RecordForPost, RecordForPut } from "./types";

type RecordSchema = {
  GET: {
    request: { app: string | number; id: string | number };
    response: {
      record: RecordForGet;
    };
  };
  POST: {
    request: {
      app: string | number;
      record?: RecordForPost;
    };
    response: {
      id: string;
      revision: string;
    };
  };
  PUT: {
    request: {
      app: string | number;
      record?: RecordForPut;
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
    request: {
      app: string | number;
      fields?: string[];
      query?: string;
      totalCount?: true;
    };
    response: {
      records: RecordForGet[];
      totalCount: string | null;
    };
  };
  POST: {
    request: {
      app: string | number;
      records: RecordForPost[];
    };
    response: {
      ids: string[];
      revisions: string[];
    };
  };
  PUT: {
    request: {
      app: string | number;
      records: Array<
        {
          record?: RecordForPut;
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
    request: {
      app: string | number;
      ids: Array<string | number>;
      revisions?: Array<string | number>;
    };
    response: Record<string, never>;
  };
};

type RecordsCursorSchema = {
  GET: {
    request: { id: string };
    response: {
      records: RecordForGet[];
      next: boolean;
    };
  };
  POST: {
    request: {
      app: string | number;
      fields?: string[];
      query?: string;
      size?: string | number;
    };
    response: { id: string; totalCount: string };
  };
  DELETE: { request: { id: string }; response: Record<string, never> };
};

type RecordCommentSchema = {
  POST: {
    request: {
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
    request: {
      app: string | number;
      record: string | number;
      comment: string | number;
    };
    response: Record<string, never>;
  };
};
type RecordCommentsSchema = {
  GET: {
    request: {
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
    request: {
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
    request: {
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
    request: {
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

export type { Schema };
