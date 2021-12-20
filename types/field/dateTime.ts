type DateTimeField = {
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
    form: {
      property: {
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
      layout: {
        get: { type: "DATETIME"; code: string; size: { width: string } };
        update: { type: "DATETIME"; code: string; size?: { width?: string } };
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

export { DateTimeField };
