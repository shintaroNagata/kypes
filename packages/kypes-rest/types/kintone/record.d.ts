import { FieldPropertyMap, SubtableProperty } from "./form/properties";
import { KintoneFormProperty } from "./index";
import { InSubtableFieldType } from "./types";

type FieldMap = {
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
      value: string | null;
    };
    update: {
      value: string | null;
    };
  };
  LINK: {
    get: {
      type: "LINK";
      value: string;
    };
    add: {
      value: string | null;
    };
    update: {
      value: string | null;
    };
  };
  MULTI_LINE_TEXT: {
    get: {
      type: "MULTI_LINE_TEXT";
      value: string;
    };
    add: {
      value: string | null;
    };
    update: {
      value: string | null;
    };
  };
  RICH_TEXT: {
    get: {
      type: "RICH_TEXT";
      value: string;
    };
    add: {
      value: string | null;
    };
    update: {
      value: string | null;
    };
  };
  NUMBER: {
    get: {
      type: "NUMBER";
      value: string;
    };
    add: {
      value: string | null;
    };
    update: {
      value: string | null;
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
      value: string | null;
    };
    update: {
      value: string | null;
    };
  };
  TIME: {
    get: {
      type: "TIME";
      value: string | null;
    };
    add: {
      value: string | null;
    };
    update: {
      value: string | null;
    };
  };
  DATETIME: {
    get: {
      type: "DATETIME";
      value: string;
    };
    add: {
      value: string | null;
    };
    update: {
      value: string | null;
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
      value: string;
    };
    update: {
      value: string;
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

type AnyFieldType = keyof FieldMap;
type AnyField = FieldMap[AnyFieldType];
type InSubtableField = FieldMap[InSubtableFieldType];

type Subtable<
  T extends {
    [fieldCode: string]: InSubtableField["get"];
  }
> = {
  type: "SUBTABLE";
  value: Array<{
    id: string;
    value: T;
  }>;
};

type KintoneRecord = {
  $id: {
    type: "__ID__";
    value: string;
  };
  $revision: {
    type: "__REVISION__";
    value: string;
  };
  [fieldCode: string]:
    | AnyField["get"]
    | Subtable<{
        [fieldCode: string]: InSubtableField["get"];
      }>;
};

type SubtableForAdd<
  T extends {
    [fieldCode: string]: InSubtableField["add"];
  }
> = {
  value: Array<{
    value?: T;
  }>;
};

type KintoneRecordForAdd = {
  [fieldCode: string]:
    | AnyField["add"]
    | SubtableForAdd<{
        [fieldCode: string]: InSubtableField["add"];
      }>;
};

type SubtableForUpdate<
  T extends {
    [fieldCode: string]: InSubtableField["update"];
  }
> = {
  value: Array<{
    id?: string | null;
    value?: T;
  }>;
};

type KintoneRecordForUpdate = {
  [fieldCode: string]:
    | AnyField["update"]
    | SubtableForUpdate<{
        [fieldCode: string]: InSubtableField["update"];
      }>;
};

type RemoveNeverProperties<T> = {
  [K in keyof T as T[K] extends never ? never : K]: T[K];
};

type BuildRecord<FormProperty extends KintoneFormProperty> =
  string extends keyof FormProperty
    ? KintoneRecord
    : {
        $id: {
          type: "__ID__";
          value: string;
        };
        $revision: {
          type: "__REVISION__";
          value: string;
        };
      } & BuildRecordSub<FormProperty>;

type BuildRecordSub<FormProperty> = RemoveNeverProperties<{
  [FieldCode in keyof FormProperty]: BuildField<FormProperty[FieldCode]>;
}>;

type BuildField<FieldProperty> =
  FieldProperty extends FieldPropertyMap[keyof FieldPropertyMap]["get"]
    ? FieldProperty["type"] extends keyof FieldMap
      ? FieldProperty extends {
          type: "STATUS" | "STATUS_ASSIGNEE" | "CATEGORY";
        }
        ? true extends FieldProperty["enabled"]
          ? FieldMap[FieldProperty["type"]]["get"]
          : never
        : FieldMap[FieldProperty["type"]]["get"]
      : never
    : FieldProperty extends SubtableProperty<infer Internal>
    ? Subtable<BuildRecordSub<Internal>>
    : never;

export type {
  KintoneRecord,
  KintoneRecordForAdd,
  KintoneRecordForUpdate,
  BuildRecord,
};
