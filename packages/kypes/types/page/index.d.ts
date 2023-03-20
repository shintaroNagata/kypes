type FieldMap = {
  __ID__: {
    get: {
      type: "__ID__";
      value: string;
    };
    set: {
      type: "__ID__";
    };
  };
  __REVISION__: {
    get: {
      type: "__REVISION__";
      value: string;
    };
    set: {
      type: "__REVISION__";
    };
  };
  RECORD_NUMBER: {
    get: {
      type: "RECORD_NUMBER";
      value: string;
    };
    set: {
      type: "RECORD_NUMBER";
    };
  };
  CREATED_TIME: {
    get: {
      type: "CREATED_TIME";
      value: string;
    };
    set: {
      type: "CREATED_TIME";
    };
  };
  UPDATED_TIME: {
    get: {
      type: "UPDATED_TIME";
      value: string;
    };
    set: {
      type: "UPDATED_TIME";
    };
  };
  CREATOR: {
    get: {
      type: "CREATOR";
      value: { code: string; name: string };
    };
    set: {
      type: "CREATOR";
    };
  };
  MODIFIER: {
    get: {
      type: "MODIFIER";
      value: { code: string; name: string };
    };
    set: {
      type: "MODIFIER";
    };
  };
  CATEGORY: {
    get: {
      type: "CATEGORY";
      value: string[];
    };
    set: {
      type: "CATEGORY";
      value: string[];
    };
  };
  STATUS: {
    get: {
      type: "STATUS";
      value: string;
    };
    set: {
      type: "STATUS";
    };
  };
  STATUS_ASSIGNEE: {
    get: {
      type: "STATUS_ASSIGNEE";
      value: Array<{ code: string; name: string }>;
    };
    set: {
      type: "STATUS_ASSIGNEE";
    };
  };
  SINGLE_LINE_TEXT: {
    get: {
      type: "SINGLE_LINE_TEXT";
      value: string | undefined;
    };
    set: {
      type: "SINGLE_LINE_TEXT";
      value: string | undefined;
    };
  };
  LINK: {
    get: {
      type: "LINK";
      value: string | undefined;
    };
    set: {
      type: "LINK";
      value: string | undefined;
    };
  };
  MULTI_LINE_TEXT: {
    get: {
      type: "MULTI_LINE_TEXT";
      value: string | undefined;
    };
    set: {
      type: "MULTI_LINE_TEXT";
      value: string | undefined;
    };
  };
  RICH_TEXT: {
    get: {
      type: "RICH_TEXT";
      value: string;
    };
    set: {
      type: "RICH_TEXT";
      value: string;
    };
  };
  NUMBER: {
    get: {
      type: "NUMBER";
      value: string | undefined;
    };
    set: {
      type: "NUMBER";
      value: string | undefined;
    };
  };
  CALC: {
    get: {
      type: "CALC";
      value: string;
    };
    set: {
      type: "CALC";
    };
  };
  DATE: {
    get: {
      type: "DATE";
      value: string | null | undefined;
    };
    set: {
      type: "DATE";
      value: string | null | undefined;
    };
  };
  TIME: {
    get: {
      type: "TIME";
      value: string | null | undefined;
    };
    set: {
      type: "TIME";
      value: string | null | undefined;
    };
  };
  DATETIME: {
    get: {
      type: "DATETIME";
      value: string | undefined;
    };
    set: {
      type: "DATETIME";
      value: string | undefined;
    };
  };
  RADIO_BUTTON: {
    get: {
      type: "RADIO_BUTTON";
      value: string;
    };
    set: {
      type: "RADIO_BUTTON";
      value: string;
    };
  };
  DROP_DOWN: {
    get: {
      type: "DROP_DOWN";
      value: string | undefined;
    };
    set: {
      type: "DROP_DOWN";
      value: string | undefined;
    };
  };
  CHECK_BOX: {
    get: {
      type: "CHECK_BOX";
      value: string[];
    };
    set: {
      type: "CHECK_BOX";
      value: string[];
    };
  };
  MULTI_SELECT: {
    get: {
      type: "MULTI_SELECT";
      value: string[];
    };
    set: {
      type: "MULTI_SELECT";
      value: string[];
    };
  };
  USER_SELECT: {
    get: {
      type: "USER_SELECT";
      value: Array<{ code: string; name: string }>;
    };
    set: {
      type: "USER_SELECT";
      value: Array<{ code: string }>;
    };
  };
  GROUP_SELECT: {
    get: {
      type: "GROUP_SELECT";
      value: Array<{ code: string; name: string }>;
    };
    set: {
      type: "GROUP_SELECT";
      value: Array<{ code: string }>;
    };
  };
  ORGANIZATION_SELECT: {
    get: {
      type: "ORGANIZATION_SELECT";
      value: Array<{ code: string; name: string }>;
    };
    set: {
      type: "ORGANIZATION_SELECT";
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
    set: {
      type: "FILE";
    };
  };
};

type AnyFieldType = keyof FieldMap;
type InSubtableFieldType =
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
type ChangeEventSupportedFieldType =
  | "SINGLE_LINE_TEXT"
  | "NUMBER"
  | "DATE"
  | "TIME"
  | "DATETIME"
  | "RADIO_BUTTON"
  | "DROP_DOWN"
  | "CHECK_BOX"
  | "MULTI_SELECT"
  | "USER_SELECT"
  | "ORGANIZATION_SELECT"
  | "GROUP_SELECT";
type CreatePageFieldType =
  | "CATEGORY"
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
  | "ORGANIZATION_SELECT"
  | "GROUP_SELECT"
  | "FILE";

// type SetActionSupportedFieldTypes =
//   | "CATEGORY"
//   | "SINGLE_LINE_TEXT"
//   | "LINK"
//   | "MULTI_LINE_TEXT"
//   | "RICH_TEXT"
//   | "NUMBER"
//   | "DATE"
//   | "TIME"
//   | "DATETIME"
//   | "RADIO_BUTTON"
//   | "DROP_DOWN"
//   | "CHECK_BOX"
//   | "MULTI_SELECT"
//   | "USER_SELECT"
//   | "ORGANIZATION_SELECT"
//   | "GROUP_SELECT"
//   | "FILE";

type AnyField = FieldMap[AnyFieldType];
type InSubtableField = FieldMap[InSubtableFieldType];
type CreatePageField = FieldMap[CreatePageFieldType];
type ChangeEventSupportedField = FieldMap[ChangeEventSupportedFieldType];

type KintoneRecord = {
  $id: FieldMap["__ID__"]["get"];
  $revision: FieldMap["__REVISION__"]["get"];
  [fieldCode: string]:
    | AnyField["get"]
    | {
        type: "SUBTABLE";
        value: Array<{
          id: string | null;
          value: {
            [fieldCode: string]: InSubtableField["get"];
          };
        }>;
      };
};

type KintoneRecordOnCreatePage = {
  [fieldCode: string]:
    | CreatePageField["get"]
    | {
        type: "SUBTABLE";
        value: Array<{
          id: null;
          value: {
            [fieldCode: string]: (CreatePageField & InSubtableField)["get"];
          };
        }>;
      };
};

type KintoneRecordForSet = {
  [fieldCode: string]:
    | AnyField["set"]
    | {
        type: "SUBTABLE";
        value: Array<{
          id: string | null;
          value: {
            [fieldCode: string]: InSubtableField["set"];
          };
        }>;
      };
};

type ChangedField = ChangeEventSupportedField["get"];
type ChangedSubtable = {
  type: "SUBTABLE";
  value: Array<{
    id: string | null;
    value: {
      [fieldCode: string]: InSubtableField["get"];
    };
  }>;
};
type ChangedRow = {
  id: string | null;
  value: {
    [fieldCode: string]: InSubtableField["get"];
  };
};

export type {
  KintoneRecord,
  KintoneRecordForSet,
  KintoneRecordOnCreatePage,
  ChangedField,
  ChangedSubtable,
  ChangedRow,
};
