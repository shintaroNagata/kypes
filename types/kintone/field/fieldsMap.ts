type MetaFieldsMap = {
  ID: {
    rest: {
      record: {
        get: {
          type: "__ID__";
          value: string;
        };
        add: never;
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "__ID__";
          value: string;
        };
        set: {
          type: "__ID__";
        };
      };
      supported: {
        change: false;
        createPage: false;
        disabled: false;
        error: false;
      };
    };
  };
  Revision: {
    rest: {
      record: {
        get: {
          type: "__REVISION__";
          value: string;
        };
        add: never;
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "__REVISION__";
          value: string;
        };
        set: {
          type: "__REVISION__";
        };
      };
      supported: {
        change: false;
        createPage: false;
        disabled: false;
        error: false;
      };
    };
  };
  RecordNumber: {
    rest: {
      record: {
        get: {
          type: "RECORD_NUMBER";
          value: string;
        };
        add: never;
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "RECORD_NUMBER";
          value: string;
        };
        set: {
          type: "RECORD_NUMBER";
        };
      };
      supported: {
        change: false;
        createPage: false;
        disabled: false;
        error: false;
      };
    };
  };
  Creator: {
    rest: {
      record: {
        get: {
          type: "CREATOR";
          value: { code: string; name: string };
        };
        add: {
          value: { code: string };
        };
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "CREATOR";
          value: { code: string; name: string };
        };
        set: {
          type: "CREATOR";
        };
      };
      supported: {
        change: false;
        createPage: false;
        disabled: false;
        error: false;
      };
    };
  };
  CreatedTime: {
    rest: {
      record: {
        get: {
          type: "CREATED_TIME";
          value: string;
        };
        add: {
          value: string;
        };
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "CREATED_TIME";
          value: string;
        };
        set: {
          type: "CREATED_TIME";
        };
      };
      supported: {
        change: false;
        createPage: false;
        disabled: false;
        error: false;
      };
    };
  };
  Modifier: {
    rest: {
      record: {
        get: {
          type: "MODIFIER";
          value: { code: string; name: string };
        };
        add: {
          value: { code: string };
        };
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "MODIFIER";
          value: { code: string; name: string };
        };
        set: {
          type: "MODIFIER";
        };
      };
      supported: {
        change: false;
        createPage: false;
        disabled: false;
        error: false;
      };
    };
  };
  UpdatedTime: {
    rest: {
      record: {
        get: {
          type: "UPDATED_TIME";
          value: string;
        };
        add: {
          value: string;
        };
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "UPDATED_TIME";
          value: string;
        };
        set: {
          type: "UPDATED_TIME";
        };
      };
      supported: {
        change: false;
        createPage: false;
        disabled: false;
        error: false;
      };
    };
  };
  Category: {
    rest: {
      record: {
        get: {
          type: "CATEGORY";
          value: string[];
        };
        add: never;
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "CATEGORY";
          value: string[];
        };
        set: {
          type: "CATEGORY";
          value: string[];
        };
      };
      supported: {
        change: false;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  Status: {
    rest: {
      record: {
        get: {
          type: "STATUS";
          value: string;
        };
        add: never;
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "STATUS";
          value: string;
        };
        set: {
          type: "STATUS";
        };
      };
      supported: {
        change: false;
        createPage: false;
        disabled: false;
        error: false;
      };
    };
  };
  StatusAssignee: {
    rest: {
      record: {
        get: {
          type: "STATUS_ASSIGNEE";
          value: Array<{ code: string; name: string }>;
        };
        add: never;
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "STATUS_ASSIGNEE";
          value: Array<{ code: string; name: string }>;
        };
        set: {
          type: "STATUS_ASSIGNEE";
        };
      };
      supported: {
        change: false;
        createPage: false;
        disabled: false;
        error: false;
      };
    };
  };
};

type NormalFieldsMap = {
  SingleLineText: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "SINGLE_LINE_TEXT";
          value: string | undefined;
        };
        set: {
          type: "SINGLE_LINE_TEXT";
          value: string | undefined;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  Number: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "NUMBER";
          value: string | undefined;
        };
        set: {
          type: "NUMBER";
          value: string | undefined;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  Calc: {
    rest: {
      record: {
        get: {
          type: "CALC";
          value: string;
        };
        add: never;
        update: never;
      };
    };
    page: {
      record: {
        get: {
          type: "CALC";
          value: string;
        };
        set: {
          type: "CALC";
        };
      };
      supported: {
        change: false;
        createPage: true;
        disabled: false;
        error: false;
      };
    };
  };
  MultiLineText: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "MULTI_LINE_TEXT";
          value: string | undefined;
        };
        set: {
          type: "MULTI_LINE_TEXT";
          value: string | undefined;
        };
      };
      supported: {
        change: false;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  RichText: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "RICH_TEXT";
          value: string;
        };
        set: {
          type: "RICH_TEXT";
          value: string;
        };
      };
      supported: {
        change: false;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  Link: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "LINK";
          value: string | undefined;
        };
        set: {
          type: "LINK";
          value: string | undefined;
        };
      };
      supported: {
        change: false;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };

  CheckBox: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "CHECK_BOX";
          value: string[];
        };
        set: {
          type: "CHECK_BOX";
          value: string[];
          disabled?: boolean;
          error?: string | null;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  RadioButton: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "RADIO_BUTTON";
          value: string;
        };
        set: {
          type: "RADIO_BUTTON";
          value: string;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  Dropdown: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "DROP_DOWN";
          value: string | undefined;
        };
        set: {
          type: "DROP_DOWN";
          value: string | undefined;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  MultiSelect: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "MULTI_SELECT";
          value: string[];
        };
        set: {
          type: "MULTI_SELECT";
          value: string[];
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };

  File: {
    rest: {
      record: {
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
    page: {
      record: {
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
      supported: {
        change: false;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };

  Date: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "DATE";
          value: string | null | undefined;
        };
        set: {
          type: "DATE";
          value: string | null | undefined;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  Time: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "TIME";
          value: string | null | undefined;
        };
        set: {
          type: "TIME";
          value: string | null | undefined;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  DateTime: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "DATETIME";
          value: string | undefined;
        };
        set: {
          type: "DATETIME";
          value: string | undefined;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };

  UserSelect: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "USER_SELECT";
          value: Array<{ code: string; name: string }>;
        };
        set: {
          type: "USER_SELECT";
          value: Array<{ code: string }>;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  OrganizationSelect: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "ORGANIZATION_SELECT";
          value: Array<{ code: string; name: string }>;
        };
        set: {
          type: "ORGANIZATION_SELECT";
          value: Array<{ code: string }>;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
  GroupSelect: {
    rest: {
      record: {
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
    };
    page: {
      record: {
        get: {
          type: "GROUP_SELECT";
          value: Array<{ code: string; name: string }>;
        };
        set: {
          type: "GROUP_SELECT";
          value: Array<{ code: string }>;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: true;
        error: true;
      };
    };
  };
};

type SubtableMap = {
  Subtable: {
    rest: {
      record: {
        get: {
          type: "SUBTABLE";
          value: Array<{
            id: string;
            value: {
              [fieldCode: string]:
                | NormalFieldsMap[keyof NormalFieldsMap]["rest"]["record"]["get"]
                | undefined;
            };
          }>;
        };
        add: {
          value: Array<{
            id?: string | null;
            value?: {
              [
                fieldCode: string
              ]: NormalFieldsMap[keyof NormalFieldsMap]["rest"]["record"]["add"];
            };
          }>;
        };
        update: {
          value: Array<{
            id?: string | null;
            value?: {
              [
                fieldCode: string
              ]: NormalFieldsMap[keyof NormalFieldsMap]["rest"]["record"]["update"];
            };
          }>;
        };
      };
    };
    page: {
      record: {
        get: {
          type: "SUBTABLE";
          value: Array<{
            id: string | null;
            value: {
              [fieldCode: string]:
                | NormalFieldsMap[keyof NormalFieldsMap]["rest"]["record"]["get"]
                | undefined;
            };
          }>;
        };
        set: {
          type: "SUBTABLE";
          value: Array<{
            value: {
              [fieldCode: string]:
                | NormalFieldsMap[keyof NormalFieldsMap]["rest"]["record"]["get"];
            };
          }>;
        };
      };
      supported: {
        change: true;
        createPage: true;
        disabled: false;
        error: false;
      };
    };
  };
};

type FieldsMap = MetaFieldsMap & NormalFieldsMap & SubtableMap;

export { FieldsMap };
