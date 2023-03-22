import { KintoneApi } from "@shin-chan/kypes-rest";
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

type Subtable<T> = {
  type: "SUBTABLE";
  value: Array<{
    id: string | null;
    value: T;
  }>;
};

type KintoneRecord = {
  $id: FieldMap["__ID__"]["get"];
  $revision: FieldMap["__REVISION__"]["get"];
} & {
  [FieldCode in string]?:
    | AnyField["get"]
    | Subtable<{
        [InSubtableFieldCode in string]?: InSubtableField["get"];
      }>;
};

type SubtableOnCreatePage<T> = {
  type: "SUBTABLE";
  value: Array<{
    id: null;
    value: T;
  }>;
};

type KintoneRecordOnCreatePage = {
  [FieldCode in string]?:
    | CreatePageField["get"]
    | SubtableOnCreatePage<{
        [InSubtableFieldCode in string]?: (CreatePageField &
          InSubtableField)["get"];
      }>;
};

type SubtableForSet<T> = {
  type: "SUBTABLE";
  value: Array<{
    id: string | null;
    value: T;
  }>;
};

type KintoneRecordForSet = {
  [FieldCode in string]?:
    | AnyField["set"]
    | SubtableForSet<{
        [InSubtableFieldCode in string]?: InSubtableField["set"];
      }>;
};

type RemoveNeverProperties<T> = {
  [K in keyof T as T[K] extends never ? never : K]: T[K];
};

type BuildRecord<AppSchema extends KintoneApi.KintoneAppSchema> =
  AppSchema extends unknown
    ? string extends keyof AppSchema["properties"]
      ? KintoneRecord
      : {
          $id: FieldMap["__ID__"]["get"];
          $revision: FieldMap["__REVISION__"]["get"];
        } & RemoveNeverProperties<{
          [FieldCode in keyof AppSchema["properties"]]: AppSchema["properties"][FieldCode] extends {
            type: "SUBTABLE";
          }
            ? BuildSubtable<AppSchema["properties"][FieldCode]["fields"]>
            : BuildField<AppSchema["properties"][FieldCode]>;
        }>
    : never;

type BuildSubtable<Internal> = Subtable<
  RemoveNeverProperties<{
    [FieldCode in keyof Internal]: BuildField<Internal[FieldCode]>;
  }>
>;

type BuildField<FieldProperty> =
  FieldProperty extends KintoneApi.KintoneFormProperty[string]
    ? FieldProperty extends {
        type: AnyFieldType;
      }
      ? FieldProperty extends {
          type: "STATUS" | "STATUS_ASSIGNEE" | "CATEGORY";
        }
        ? true extends FieldProperty["enabled"]
          ? FieldMap[FieldProperty["type"]]["get"]
          : never
        : FieldMap[FieldProperty["type"]]["get"]
      : never
    : never;

type BuildRecordForSet<AppSchema extends KintoneApi.KintoneAppSchema> =
  AppSchema extends unknown
    ? string extends keyof AppSchema["properties"]
      ? KintoneRecordForSet
      : RemoveNeverProperties<{
          [FieldCode in keyof AppSchema["properties"]]?: AppSchema["properties"][FieldCode] extends {
            type: "SUBTABLE";
          }
            ? BuildSubtableForSet<AppSchema["properties"][FieldCode]["fields"]>
            : BuildFieldForSet<AppSchema["properties"][FieldCode]>;
        }>
    : never;

type BuildSubtableForSet<Internal> = SubtableForSet<
  RemoveNeverProperties<{
    [FieldCode in keyof Internal]?: BuildFieldForSet<Internal[FieldCode]>;
  }>
>;

type BuildFieldForSet<FieldProperty> =
  FieldProperty extends KintoneApi.KintoneFormProperty[string]
    ? FieldProperty extends { type: AnyFieldType }
      ? FieldMap[FieldProperty["type"]]["set"]
      : never
    : never;

type BuildRecordOnCreatePage<AppSchema extends KintoneApi.KintoneAppSchema> =
  AppSchema extends unknown
    ? string extends keyof AppSchema["properties"]
      ? KintoneRecordOnCreatePage
      : RemoveNeverProperties<{
          [FieldCode in keyof AppSchema["properties"]]: AppSchema["properties"][FieldCode] extends {
            type: "SUBTABLE";
          }
            ? BuildSubtableOnCreatePage<
                AppSchema["properties"][FieldCode]["fields"]
              >
            : BuildFieldOnCreatePage<AppSchema["properties"][FieldCode]>;
        }>
    : never;

type BuildSubtableOnCreatePage<Internal> = SubtableOnCreatePage<
  RemoveNeverProperties<{
    [FieldCode in keyof Internal]: BuildFieldOnCreatePage<Internal[FieldCode]>;
  }>
>;

type BuildFieldOnCreatePage<FieldProperty> =
  FieldProperty extends KintoneApi.KintoneFormProperty[string]
    ? FieldProperty extends { type: CreatePageFieldType }
      ? FieldMap[FieldProperty["type"]]["get"]
      : never
    : never;

type ChangedField = ChangeEventSupportedField["get"];
type ChangedSubtable = Subtable<{
  [fieldCode in string]?: InSubtableField["get"];
}>;

type ChangedRow = {
  id: string | null;
  value: {
    [fieldCode in string]?: InSubtableField["get"];
  };
};

export type {
  KintoneRecord,
  KintoneRecordForSet,
  KintoneRecordOnCreatePage,
  BuildRecord,
  BuildRecordForSet,
  BuildRecordOnCreatePage,
  ChangedField,
  ChangedSubtable,
  ChangedRow,
};
