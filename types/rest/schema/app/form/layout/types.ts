type FieldLayout = {
  RECORD_NUMBER: {
    get: {
      type: "RECORD_NUMBER";
      code: string;
      size: { width: string };
    };
    update: {
      type: "RECORD_NUMBER";
      code: string;
      size?: { width?: string };
    };
  };
  CREATED_TIME: {
    get: { type: "CREATOR"; code: string; size: { width: string } };
    update: { type: "CREATOR"; code: string; size?: { width?: string } };
  };
  UPDATED_TIME: {
    get: {
      type: "UPDATED_TIME";
      code: string;
      size: { width: string };
    };
    update: {
      type: "UPDATED_TIME";
      code: string;
      size?: { width?: string };
    };
  };
  CREATOR: {
    get: { type: "CREATOR"; code: string; size: { width: string } };
    update: { type: "CREATOR"; code: string; size?: { width?: string } };
  };
  MODIFIER: {
    get: { type: "MODIFIER"; code: string; size: { width: string } };
    update: { type: "MODIFIER"; code: string; size?: { width?: string } };
  };
  SINGLE_LINE_TEXT: {
    get: {
      type: "SINGLE_LINE_TEXT";
      code: string;
      size: { width: string };
    };
    update: {
      type: "SINGLE_LINE_TEXT";
      code: string;
      size?: { width?: string };
    };
  };
  LINK: {
    get: { type: "LINK"; code: string; size: { width: string } };
    update: { type: "LINK"; code: string; size?: { width?: string } };
  };
  MULTI_LINE_TEXT: {
    get: {
      type: "MULTI_LINE_TEXT";
      code: string;
      size: { width: string; innerHeight: string };
    };
    update: {
      type: "MULTI_LINE_TEXT";
      code: string;
      size?: { width?: string; innerHeight?: string };
    };
  };
  RICH_TEXT: {
    get: {
      type: "RICH_TEXT";
      code: string;
      size: { width: string; innerHeight: string };
    };
    update: {
      type: "RICH_TEXT";
      code: string;
      size?: { width?: string; innerHeight?: string };
    };
  };
  NUMBER: {
    get: { type: "NUMBER"; code: string; size: { width: string } };
    update: { type: "NUMBER"; code: string; size?: { width?: string } };
  };
  CALC: {
    get: { type: "CALC"; code: string; size: { width: string } };
    update: { type: "CALC"; code: string; size?: { width?: string } };
  };
  DATE: {
    get: { type: "DATE"; code: string; size: { width: string } };
    update: { type: "DATE"; code: string; size?: { width?: string } };
  };
  TIME: {
    get: { type: "TIME"; code: string; size: { width: string } };
    update: { type: "TIME"; code: string; size?: { width?: string } };
  };
  DATETIME: {
    get: { type: "DATETIME"; code: string; size: { width: string } };
    update: { type: "DATETIME"; code: string; size?: { width?: string } };
  };
  RADIO_BUTTON: {
    get: {
      type: "RADIO_BUTTON";
      code: string;
      size: { width: string };
    };
    update: {
      type: "RADIO_BUTTON";
      code: string;
      size?: { width?: string };
    };
  };
  DROP_DOWN: {
    get: { type: "DROP_DOWN"; code: string; size: { width: string } };
    update: { type: "DROP_DOWN"; code: string; size?: { width?: string } };
  };
  CHECK_BOX: {
    get: { type: "CHECK_BOX"; code: string; size: { width: string } };
    update: { type: "CHECK_BOX"; code: string; size?: { width?: string } };
  };
  MULTI_SELECT: {
    get: {
      type: "MULTI_SELECT";
      code: string;
      size: { width: string };
    };
    update: {
      type: "MULTI_SELECT";
      code: string;
      size?: { width?: string };
    };
  };
  USER_SELECT: {
    get: {
      type: "USER_SELECT";
      code: string;
      size: { width: string };
    };
    update: {
      type: "USER_SELECT";
      code: string;
      size?: { width?: string };
    };
  };
  GROUP_SELECT: {
    get: {
      type: "GROUP_SELECT";
      code: string;
      size: { width: string };
    };
    update: {
      type: "GROUP_SELECT";
      code: string;
      size?: { width?: string };
    };
  };
  ORGANIZATION_SELECT: {
    get: {
      type: "ORGANIZATION_SELECT";
      code: string;
      size: { width: string };
    };
    update: {
      type: "ORGANIZATION_SELECT";
      code: string;
      size?: { width?: string };
    };
  };
  FILE: {
    get: { type: "FILE"; code: string; size: { width: string } };
    update: { type: "FILE"; code: string; size?: { width?: string } };
  };
  REFERENCE_TABLE: {
    get: { type: "REFERENCE_TABLE"; code: string };
    update: { type: "REFERENCE_TABLE"; code: string };
  };
  HR: {
    get: { type: "HR"; size: { width: string } };
    update: { type: "HR"; size?: { width?: string } };
  };
  SPACER: {
    get: {
      type: "SPACER";
      elementId: string;
      size: { width: string; height: string };
    };
    update: {
      type: "SPACER";
      elementId: string;
      size?: { width?: string; height?: string };
    };
  };
  LABEL: {
    get: { type: "LABEL"; label: string; size: { width: string } };
    update: { type: "LABEL"; label: string; size?: { width?: string } };
  };
};

type FieldTypes =
  | "RECORD_NUMBER"
  | "CREATED_TIME"
  | "UPDATED_TIME"
  | "CREATOR"
  | "MODIFIER"
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
  | "HR"
  | "SPACER"
  | "LABEL";

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

type LayoutForGet = Array<
  | {
      type: "ROW";
      fields: Array<FieldLayout[FieldTypes]["get"]>;
    }
  | {
      type: "SUBTABLE";
      code: string;
      fields: Array<FieldLayout[InSubtableFieldTypes]["get"]>;
    }
  | {
      type: "GROUP";
      code: string;
      layout: Array<{
        type: "ROW";
        fields: Array<FieldLayout[FieldTypes]["get"]>;
      }>;
    }
>;

type LayoutForPut = Array<
  | {
      type: "ROW";
      fields?: Array<FieldLayout[FieldTypes]["update"]>;
    }
  | {
      type: "SUBTABLE";
      code: string;
      fields?: Array<FieldLayout[InSubtableFieldTypes]["update"]>;
    }
  | {
      type: "GROUP";
      code: string;
      layout?: Array<{
        type: "ROW";
        fields?: Array<FieldLayout[FieldTypes]["update"]>;
      }>;
    }
>;

export type { LayoutForGet, LayoutForPut };
