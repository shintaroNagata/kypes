import { FieldsMap } from "../field";

type RecordRestApiMap = {
  GetRecord: {
    method: "GET";
    endpoint: "record";
    requestParameters: { app: string | number; id: string | number };
    responseProperties: {
      record: {
        $id: FieldsMap["ID"]["rest"]["record"]["get"];
        $revision: FieldsMap["Revision"]["rest"]["record"]["get"];
        [fieldCode: string]:
          | FieldsMap[keyof FieldsMap]["rest"]["record"]["get"]
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
        [
          fieldCode: string
        ]: FieldsMap[keyof FieldsMap]["rest"]["record"]["add"];
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
        [
          fieldCode: string
        ]: FieldsMap[keyof FieldsMap]["rest"]["record"]["update"];
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
        $id: FieldsMap["ID"]["rest"]["record"]["get"];
        $revision: FieldsMap["Revision"]["rest"]["record"]["get"];
        [fieldCode: string]:
          | FieldsMap[keyof FieldsMap]["rest"]["record"]["get"]
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
        [
          fieldCode: string
        ]: FieldsMap[keyof FieldsMap]["rest"]["record"]["add"];
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
            [
              fieldCode: string
            ]: FieldsMap[keyof FieldsMap]["rest"]["record"]["add"];
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
        $id: FieldsMap["ID"]["rest"]["record"]["get"];
        $revision: FieldsMap["Revision"]["rest"]["record"]["get"];
        [fieldCode: string]:
          | FieldsMap[keyof FieldsMap]["rest"]["record"]["get"]
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
