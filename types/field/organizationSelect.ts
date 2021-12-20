type OrganizationSelectField = {
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
    form: {
      property: {
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
      layout: {
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

export { OrganizationSelectField };
