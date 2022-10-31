type FieldProperty = {
  RECORD_NUMBER: {
    get: {
      type: "RECORD_NUMBER";
      code: string;
      label: string;
      noLabel: boolean;
    };
    add: never;
    update: {
      type: "RECORD_NUMBER";
      code?: string;
      label?: string;
      noLabel?: boolean;
    };
  };
  CREATED_TIME: {
    get: {
      type: "CREATED_TIME";
      code: string;
      label: string;
      noLabel: boolean;
    };
    add: never;
    update: {
      type: "CREATED_TIME";
      code?: string;
      label?: string;
      noLabel?: boolean;
    };
  };
  UPDATED_TIME: {
    get: {
      type: "UPDATED_TIME";
      code: string;
      label: string;
      noLabel: boolean;
    };
    add: never;
    update: {
      type: "UPDATED_TIME";
      code?: string;
      label?: string;
      noLabel?: boolean;
    };
  };
  CREATOR: {
    get: {
      type: "CREATOR";
      code: string;
      label: string;
      noLabel: boolean;
    };
    add: never;
    update: {
      type: "CREATOR";
      code?: string;
      label?: string;
      noLabel?: boolean;
    };
  };
  MODIFIER: {
    get: {
      type: "MODIFIER";
      code: string;
      label: string;
      noLabel: boolean;
    };
    add: never;
    update: {
      type: "MODIFIER";
      code?: string;
      label?: string;
      noLabel?: boolean;
    };
  };
  CATEGORY: {
    get: {
      type: "CATEGORY";
      code: string;
      label: string;
      enabled: boolean;
    };
    add: never;
    update: never;
  };
  STATUS: {
    get: { type: "STATUS"; code: string; label: string; enabled: boolean };
    add: never;
    update: never;
  };
  STATUS_ASSIGNEE: {
    get: {
      type: "STATUS_ASSIGNEE";
      code: string;
      label: string;
      enabled: boolean;
    };
    add: never;
    update: never;
  };
  SINGLE_LINE_TEXT: {
    get:
      | {
          type: "SINGLE_LINE_TEXT";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string;
          unique: boolean;
          minLength: string;
          maxLength: string;
          expression: string;
          hideExpression: boolean;
        }
      | {
          type: "SINGLE_LINE_TEXT";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          lookup: {
            relatedApp: { app: string; code: string };
            relatedKeyField: string;
            fieldMappings: Array<{ field: string; relatedField: string }>;
            lookupPickerFields: string[];
            filterCond: string;
            sort: string;
          };
        };
    add:
      | {
          type: "SINGLE_LINE_TEXT";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          unique?: boolean;
          minLength?: string | number;
          maxLength?: string | number;
          expression?: string;
          hideExpression?: boolean;
        }
      | {
          type: "SINGLE_LINE_TEXT";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          lookup: {
            relatedApp: { app: string | number } | { code: string };
            relatedKeyField: string;
            fieldMappings?: Array<{ field: string; relatedField: string }>;
            lookupPickerFields?: string[];
            filterCond?: string;
            sort?: string;
          };
        };
    update:
      | {
          type: "SINGLE_LINE_TEXT";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          unique?: boolean;
          minLength?: string | number;
          maxLength?: string | number;
          expression?: string;
          hideExpression?: boolean;
        }
      | {
          type: "SINGLE_LINE_TEXT";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          lookup?: {
            fieldMappings?: Array<{ field: string; relatedField: string }>;
            lookupPickerFields?: string[];
            filterCond?: string;
            sort?: string;
          };
        };
  };
  LINK: {
    get: {
      type: "LINK";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: string;
      unique: boolean;
      minLength: string;
      maxLength: string;
      protocol: "WEB" | "CALL" | "MAIL";
    };
    add: {
      type: "LINK";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      unique?: boolean;
      minLength?: string | number;
      maxLength?: string | number;
      protocol: "WEB" | "CALL" | "MAIL";
    };
    update: {
      type: "LINK";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      unique?: boolean;
      minLength?: string | number;
      maxLength?: string | number;
      protocol?: "WEB" | "CALL" | "MAIL";
    };
  };
  MULTI_LINE_TEXT: {
    get: {
      type: "MULTI_LINE_TEXT";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: string;
    };
    add: {
      type: "MULTI_LINE_TEXT";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
    };
    update: {
      type: "MULTI_LINE_TEXT";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
    };
  };
  RICH_TEXT: {
    get: {
      type: "RICH_TEXT";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: string;
    };
    add: {
      type: "RICH_TEXT";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
    };
    update: {
      type: "RICH_TEXT";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
    };
  };
  NUMBER: {
    get:
      | {
          type: "NUMBER";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string;
          unique: boolean;
          minValue: string;
          maxValue: string;
          digit: boolean;
          displayScale: string;
          unit: string;
          unitPosition: "BEFORE" | "AFTER";
        }
      | {
          type: "NUMBER";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          lookup: {
            relatedApp: { app: string; code: string };
            relatedKeyField: string;
            fieldMappings: Array<{ field: string; relatedField: string }>;
            lookupPickerFields: string[];
            filterCond: string;
            sort: string;
          };
        };
    add:
      | {
          type: "NUMBER";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          unique?: boolean;
          minValue?: string | number;
          maxValue?: string | number;
          digit?: boolean;
          displayScale?: string | number;
          unit?: string;
          unitPosition?: "BEFORE" | "AFTER";
        }
      | {
          type: "NUMBER";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          lookup: {
            relatedApp: { app: string | number } | { code: string };
            relatedKeyField: string;
            fieldMappings?: Array<{ field: string; relatedField: string }>;
            lookupPickerFields?: string[];
            filterCond?: string;
            sort?: string;
          };
        };
    update:
      | {
          type: "NUMBER";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          unique?: boolean;
          minValue?: string | number;
          maxValue?: string | number;
          digit?: boolean;
          displayScale?: string | number;
          unit?: string;
          unitPosition?: "BEFORE" | "AFTER";
        }
      | {
          type: "NUMBER";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          lookup?: {
            fieldMappings?: Array<{ field: string; relatedField: string }>;
            lookupPickerFields?: string[];
            filterCond?: string;
            sort?: string;
          };
        };
  };
  CALC: {
    get: {
      type: "CALC";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      expression: string;
      hideExpression: boolean;
      format:
        | "NUMBER"
        | "NUMBER_DIGIT"
        | "DATETIME"
        | "DATE"
        | "TIME"
        | "HOUR_MINUTE"
        | "DAY_HOUR_MINUTE";
      displayScale: string;
      unit: string;
      unitPosition: "BEFORE" | "AFTER";
    };
    add: {
      type: "CALC";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      expression: string;
      hideExpression?: boolean;
      format?:
        | "NUMBER"
        | "NUMBER_DIGIT"
        | "DATETIME"
        | "DATE"
        | "TIME"
        | "HOUR_MINUTE"
        | "DAY_HOUR_MINUTE";
      displayScale?: string;
      unit?: string;
      unitPosition?: "BEFORE" | "AFTER";
    };
    update: {
      type: "CALC";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      expression?: string;
      hideExpression?: boolean;
      format?:
        | "NUMBER"
        | "NUMBER_DIGIT"
        | "DATETIME"
        | "DATE"
        | "TIME"
        | "HOUR_MINUTE"
        | "DAY_HOUR_MINUTE";
      displayScale?: string;
      unit?: string;
      unitPosition?: "BEFORE" | "AFTER";
    };
  };
  DATE: {
    get: {
      type: "DATE";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: string;
      unique: boolean;
      defaultNowValue: boolean;
    };
    add: {
      type: "DATE";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      unique?: boolean;
      defaultNowValue?: boolean;
    };
    update: {
      type: "DATE";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      unique?: boolean;
      defaultNowValue?: boolean;
    };
  };
  TIME: {
    get: {
      type: "TIME";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: string;
      defaultNowValue: boolean;
    };
    add: {
      type: "TIME";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      defaultNowValue?: boolean;
    };
    update: {
      type: "TIME";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      defaultNowValue?: boolean;
    };
  };
  DATETIME: {
    get: {
      type: "DATETIME";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: string;
      unique: boolean;
      defaultNowValue: boolean;
    };
    add: {
      type: "DATETIME";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      unique?: boolean;
      defaultNowValue?: boolean;
    };
    update: {
      type: "DATETIME";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      unique?: boolean;
      defaultNowValue?: boolean;
    };
  };
  RADIO_BUTTON: {
    get: {
      type: "RADIO_BUTTON";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: string;
      options: { [optionName: string]: { label: string; index: string } };
      align: "HORIZONTAL" | "VERTICAL";
    };
    add: {
      type: "RADIO_BUTTON";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      options: {
        [optionName: string]: { label: string; index: string | number };
      };
      align?: "HORIZONTAL" | "VERTICAL";
    };
    update: {
      type: "RADIO_BUTTON";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      options?: {
        [optionName: string]: { label?: string; index: string | number };
      };
      align?: "HORIZONTAL" | "VERTICAL";
    };
  };
  DROP_DOWN: {
    get: {
      type: "DROP_DOWN";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: string;
      options: { [optionName: string]: { label: string; index: string } };
    };
    add: {
      type: "DROP_DOWN";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      options: {
        [optionName: string]: { label: string; index: string | number };
      };
    };
    update: {
      type: "DROP_DOWN";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string;
      options?: {
        [optionName: string]: { label?: string; index: string | number };
      };
    };
  };
  CHECK_BOX: {
    get: {
      type: "CHECK_BOX";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: string[];
      options: { [optionName: string]: { label: string; index: string } };
      align: "HORIZONTAL" | "VERTICAL";
    };
    add: {
      type: "CHECK_BOX";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string[];
      options: {
        [optionName: string]: { label: string; index: string | number };
      };
      align?: "HORIZONTAL" | "VERTICAL";
    };
    update: {
      type: "CHECK_BOX";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string[];
      options?: {
        [optionName: string]: { label?: string; index: string | number };
      };
      align?: "HORIZONTAL" | "VERTICAL";
    };
  };
  MULTI_SELECT: {
    get: {
      type: "MULTI_SELECT";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: string[];
      options: { [optionName: string]: { label: string; index: string } };
    };
    add: {
      type: "MULTI_SELECT";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string[];
      options: {
        [optionName: string]: { label: string; index: string | number };
      };
    };
    update: {
      type: "MULTI_SELECT";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: string[];
      options?: {
        [optionName: string]: { label?: string; index: string | number };
      };
    };
  };
  USER_SELECT: {
    get: {
      type: "USER_SELECT";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: Array<
        | { code: string; type: "USER" | "GROUP" | "ORGANIZATION" }
        | { code: "LOGINUSER()"; type: "FUNCTION" }
      >;
      entities: Array<{
        code: string;
        type: "USER" | "GROUP" | "ORGANIZATION";
      }>;
    };
    add: {
      type: "USER_SELECT";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: Array<
        | { code: string; type: "USER" | "GROUP" | "ORGANIZATION" }
        | { code: "LOGINUSER()"; type: "FUNCTION" }
      >;
      entities?: Array<{
        code: string;
        type: "USER" | "GROUP" | "ORGANIZATION";
      }>;
    };
    update: {
      type: "USER_SELECT";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: Array<
        | { code: string; type: "USER" | "GROUP" | "ORGANIZATION" }
        | { code: "LOGINUSER()"; type: "FUNCTION" }
      >;
      entities?: Array<{
        code: string;
        type: "USER" | "GROUP" | "ORGANIZATION";
      }>;
    };
  };
  GROUP_SELECT: {
    get: {
      type: "GROUP_SELECT";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: Array<{ code: string; type: "GROUP" }>;
      entities: Array<{ code: string; type: "GROUP" }>;
    };
    add: {
      type: "GROUP_SELECT";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: Array<{ code: string; type: "GROUP" }>;
      entities?: Array<{ code: string; type: "GROUP" }>;
    };
    update: {
      type: "GROUP_SELECT";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: Array<{ code: string; type: "GROUP" }>;
      entities?: Array<{ code: string; type: "GROUP" }>;
    };
  };
  ORGANIZATION_SELECT: {
    get: {
      type: "ORGANIZATION_SELECT";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      defaultValue: Array<
        | { code: string; type: "ORGANIZATION" }
        | { code: "PRIMARY_ORGANIZATION()"; type: "FUNCTION" }
      >;
      entities: Array<{ code: string; type: "ORGANIZATION" }>;
    };
    add: {
      type: "ORGANIZATION_SELECT";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: Array<
        | { code: string; type: "ORGANIZATION" }
        | { code: "PRIMARY_ORGANIZATION()"; type: "FUNCTION" }
      >;
      entities?: Array<{ code: string; type: "ORGANIZATION" }>;
    };
    update: {
      type: "ORGANIZATION_SELECT";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      defaultValue?: Array<
        | { code: string; type: "ORGANIZATION" }
        | { code: "PRIMARY_ORGANIZATION()"; type: "FUNCTION" }
      >;
      entities?: Array<{ code: string; type: "ORGANIZATION" }>;
    };
  };
  FILE: {
    get: {
      type: "FILE";
      code: string;
      label: string;
      noLabel: boolean;
      required: boolean;
      thumbnailSize: "50" | "150" | "250" | "500";
    };
    add: {
      type: "FILE";
      code: string;
      label: string;
      noLabel?: boolean;
      required?: boolean;
      thumbnailSize?: 50 | 150 | 250 | 500 | "50" | "150" | "250" | "500";
    };
    update: {
      type: "FILE";
      code?: string;
      label?: string;
      noLabel?: boolean;
      required?: boolean;
      thumbnailSize?: 50 | 150 | 250 | 500 | "50" | "150" | "250" | "500";
    };
  };
  REFERENCE_TABLE: {
    get: {
      type: "REFERENCE_TABLE";
      code: string;
      label: string;
      noLabel: boolean;
      referenceTable: {
        relatedApp: { app: string; code: string };
        condition: { field: string; relatedField: string };
        filterCond: string;
        displayFields: string[];
        sort: string;
        size: "5" | "10" | "20" | "30" | "40" | "50";
      };
    };
    add: {
      type: "REFERENCE_TABLE";
      code: string;
      label: string;
      noLabel?: boolean;
      referenceTable: {
        relatedApp: { app: string | number } | { code: string };
        condition: { field: string; relatedField: string };
        filterCond?: string;
        displayFields: string[];
        sort?: string;
        size?:
          | 5
          | 10
          | 20
          | 30
          | 40
          | 50
          | "5"
          | "10"
          | "20"
          | "30"
          | "40"
          | "50";
      };
    };
    update: {
      type: "REFERENCE_TABLE";
      code?: string;
      label?: string;
      noLabel?: boolean;
      referenceTable?: {
        relatedApp?: { app: string | number } | { code: string };
        condition?: { field?: string; relatedField?: string };
        filterCond?: string;
        displayFields?: string[];
        sort?: string;
        size?:
          | 5
          | 10
          | 20
          | 30
          | 40
          | 50
          | "5"
          | "10"
          | "20"
          | "30"
          | "40"
          | "50";
      };
    };
  };
  GROUP: {
    get: {
      type: "GROUP";
      code: string;
      label: string;
      noLabel: boolean;
      openGroup: boolean;
    };
    add: {
      type: "GROUP";
      code: string;
      label: string;
      noLabel?: boolean;
      openGroup?: boolean;
    };
    update: {
      type: "GROUP";
      code?: string;
      label?: string;
      noLabel?: boolean;
      openGroup?: boolean;
    };
  };
};

type FieldTypes =
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
  | "FILE"
  | "REFERENCE_TABLE"
  | "GROUP";

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

type PropertiesForGet = {
  [fieldCode: string]:
    | FieldProperty[FieldTypes]["get"]
    | {
        type: "SUBTABLE";
        code: string;
        label: string;
        noLabel: boolean;
        fields: {
          [fieldCode: string]: FieldProperty[InSubtableFieldTypes]["get"];
        };
      };
};

type PropertiesForPost = {
  [fieldCode: string]:
    | FieldProperty[FieldTypes]["add"]
    | {
        type: "SUBTABLE";
        code: string;
        label?: string;
        noLabel?: boolean;
        fields: {
          [fieldCode: string]: FieldProperty[InSubtableFieldTypes]["add"];
        };
      };
};

type PropertiesForPut = {
  [fieldCode: string]:
    | FieldProperty[FieldTypes]["update"]
    | {
        type: "SUBTABLE";
        code?: string;
        label?: string;
        noLabel?: boolean;
        fields?: {
          [fieldCode: string]: FieldProperty[InSubtableFieldTypes]["update"];
        };
      };
};

export type { PropertiesForGet, PropertiesForPost, PropertiesForPut };
