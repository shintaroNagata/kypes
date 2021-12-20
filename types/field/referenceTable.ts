type ReferenceTableField = {
  rest: {
    record: { get: never; add: never; update: never };
    form: {
      property: {
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
          code: string;
          label: string;
          noLabel?: boolean;
          referenceTable: {
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
      layout: {
        get: { type: "REFERENCE_TABLE"; code: string };
        update: { type: "REFERENCE_TABLE"; code: string };
      };
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

export { ReferenceTableField };
