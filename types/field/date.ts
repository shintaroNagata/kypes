type DateField = {
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
    form: {
      property: {
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
      layout: {
        get: { type: "DATE"; code: string; size: { width: string } };
        update: { type: "DATE"; code: string; size?: { width?: string } };
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

export { DateField };
