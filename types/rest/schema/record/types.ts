type FieldValue = {
  __ID__: {
    get: {
      type: "__ID__";
      value: string;
    };
    add: never;
    update: never;
  };
  __REVISION__: {
    get: {
      type: "__REVISION__";
      value: string;
    };
    add: never;
    update: never;
  };
  RECORD_NUMBER: {
    get: {
      type: "RECORD_NUMBER";
      value: string;
    };
    add: never;
    update: never;
  };
  CREATED_TIME: {
    get: {
      type: "CREATED_TIME";
      value: string;
    };
    add: {
      value: string;
    };
    update: never;
  };
  UPDATED_TIME: {
    get: {
      type: "UPDATED_TIME";
      value: string;
    };
    add: {
      value: string;
    };
    update: never;
  };
  CREATOR: {
    get: {
      type: "CREATOR";
      value: { code: string; name: string };
    };
    add: {
      value: { code: string };
    };
    update: never;
  };
  MODIFIER: {
    get: {
      type: "MODIFIER";
      value: { code: string; name: string };
    };
    add: {
      value: { code: string };
    };
    update: never;
  };
  CATEGORY: {
    get: {
      type: "CATEGORY";
      value: string[];
    };
    add: never;
    update: never;
  };
  STATUS: {
    get: {
      type: "STATUS";
      value: string;
    };
    add: never;
    update: never;
  };
  STATUS_ASSIGNEE: {
    get: {
      type: "STATUS_ASSIGNEE";
      value: Array<{ code: string; name: string }>;
    };
    add: never;
    update: never;
  };
  SINGLE_LINE_TEXT: {
    get: {
      type: "SINGLE_LINE_TEXT";
      value: string;
    };
    add: {
      value: string | undefined;
    };
    update: {
      value: string | undefined;
    };
  };
  LINK: {
    get: {
      type: "LINK";
      value: string;
    };
    add: {
      value: string | undefined;
    };
    update: {
      value: string | undefined;
    };
  };
  MULTI_LINE_TEXT: {
    get: {
      type: "MULTI_LINE_TEXT";
      value: string;
    };
    add: {
      value: string | undefined;
    };
    update: {
      value: string | undefined;
    };
  };
  RICH_TEXT: {
    get: {
      type: "RICH_TEXT";
      value: string;
    };
    add: {
      value: string;
    };
    update: {
      value: string;
    };
  };
  NUMBER: {
    get: {
      type: "NUMBER";
      value: string;
    };
    add: {
      value: string | undefined;
    };
    update: {
      value: string | undefined;
    };
  };
  CALC: {
    get: {
      type: "CALC";
      value: string;
    };
    add: never;
    update: never;
  };
  DATE: {
    get: {
      type: "DATE";
      value: string | null;
    };
    add: {
      value: string | null | undefined;
    };
    update: {
      value: string | null | undefined;
    };
  };
  TIME: {
    get: {
      type: "TIME";
      value: string | null;
    };
    add: {
      value: string | null | undefined;
    };
    update: {
      value: string | null | undefined;
    };
  };
  DATETIME: {
    get: {
      type: "DATETIME";
      value: string;
    };
    add: {
      value: string | undefined;
    };
    update: {
      value: string | undefined;
    };
  };
  RADIO_BUTTON: {
    get: {
      type: "RADIO_BUTTON";
      value: string;
    };
    add: {
      value: string;
    };
    update: {
      value: string;
    };
  };
  DROP_DOWN: {
    get: {
      type: "DROP_DOWN";
      value: string;
    };
    add: {
      value: string | undefined;
    };
    update: {
      value: string | undefined;
    };
  };
  CHECK_BOX: {
    get: {
      type: "CHECK_BOX";
      value: string[];
    };
    add: {
      value: string[];
    };
    update: {
      value: string[];
    };
  };
  MULTI_SELECT: {
    get: {
      type: "MULTI_SELECT";
      value: string[];
    };
    add: {
      value: string[];
    };
    update: {
      value: string[];
    };
  };
  USER_SELECT: {
    get: {
      type: "USER_SELECT";
      value: Array<{ code: string; name: string }>;
    };
    add: {
      value: Array<{ code: string }>;
    };
    update: {
      value: Array<{ code: string }>;
    };
  };
  GROUP_SELECT: {
    get: {
      type: "GROUP_SELECT";
      value: Array<{ code: string; name: string }>;
    };
    add: {
      value: Array<{ code: string }>;
    };
    update: {
      value: Array<{ code: string }>;
    };
  };
  ORGANIZATION_SELECT: {
    get: {
      type: "ORGANIZATION_SELECT";
      value: Array<{ code: string; name: string }>;
    };
    add: {
      value: Array<{ code: string }>;
    };
    update: {
      value: Array<{ code: string }>;
    };
  };
  FILE: {
    get: {
      type: "FILE";
      value: Array<{
        contentType: string;
        fileKey: string;
        name: string;
        size: string;
      }>;
    };
    add: {
      value: Array<{
        fileKey: string;
      }>;
    };
    update: {
      value: Array<{
        fileKey: string;
      }>;
    };
  };
};

type FieldTypes =
  | "__ID__"
  | "__REVISION__"
  | "RECORD_NUMBER"
  | "CREATED_TIME"
  | "UPDATED_TIME"
  | "CREATOR"
  | "MODIFIER"
  | "CATEGORY"
  | "STATUS"
  | "STATUS_ASSIGNEE"
  | "SINGLE_LINE_TEXT"
  | "LINK"
  | "MULTI_LINE_TEXT"
  | "RICH_TEXT"
  | "NUMBER"
  | "CALC"
  | "DATE"
  | "TIME"
  | "DATETIME"
  | "RADIO_BUTTON"
  | "DROP_DOWN"
  | "CHECK_BOX"
  | "MULTI_SELECT"
  | "USER_SELECT"
  | "GROUP_SELECT"
  | "ORGANIZATION_SELECT"
  | "FILE";

type InSubtableFieldTypes =
  | "SINGLE_LINE_TEXT"
  | "LINK"
  | "MULTI_LINE_TEXT"
  | "RICH_TEXT"
  | "NUMBER"
  | "CALC"
  | "DATE"
  | "TIME"
  | "DATETIME"
  | "RADIO_BUTTON"
  | "DROP_DOWN"
  | "CHECK_BOX"
  | "MULTI_SELECT"
  | "USER_SELECT"
  | "GROUP_SELECT"
  | "ORGANIZATION_SELECT"
  | "FILE";

type RecordForGet = {
  $id: {
    type: "__ID__";
    value: string;
  };
  $revision: {
    type: "__REVISION__";
    value: string;
  };
  [fieldCode: string]:
    | FieldValue[FieldTypes]["get"]
    | {
        type: "SUBTABLE";
        value: Array<{
          id: string;
          value: {
            [fieldCode: string]: FieldValue[InSubtableFieldTypes]["get"];
          };
        }>;
      };
};

type RecordForPost = {
  [fieldCode: string]:
    | FieldValue[FieldTypes]["add"]
    | {
        value: Array<{
          value?: {
            [fieldCode: string]: FieldValue[InSubtableFieldTypes]["add"];
          };
        }>;
      };
};

type RecordForPut = {
  [fieldCode: string]:
    | FieldValue[FieldTypes]["update"]
    | {
        value: Array<{
          id?: string | null;
          value?: {
            [fieldCode: string]: FieldValue[InSubtableFieldTypes]["update"];
          };
        }>;
      };
};

export type { RecordForGet, RecordForPost, RecordForPut };
