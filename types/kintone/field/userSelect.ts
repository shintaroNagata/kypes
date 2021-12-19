type UserSelectField = {
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
    form: {
      property: {
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
      layout: {
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

export { UserSelectField };
