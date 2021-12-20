type LookupField = {
  rest: {
    record: { get: never; add: never; update: never };
    form: {
      property: {
        get: {
          type: "NUMBER" | "SINGLE_LINE_TEXT";
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
        add: {
          type: "NUMBER" | "SINGLE_LINE_TEXT";
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
        update: {
          type: "NUMBER" | "SINGLE_LINE_TEXT";
          code: string;
          label: string;
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
      layout: { get: never; update: never };
    };
  };
  page: {
    record: { get: never; set: never };
    supported: {
      change: false;
      createPage: false;
      disabled: false;
      error: false;
    };
  };
};

export { LookupField };
