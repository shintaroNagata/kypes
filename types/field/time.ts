type TimeField = {
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
    form: {
      property: {
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
      layout: {
        get: { type: "TIME"; code: string; size: { width: string } };
        update: { type: "TIME"; code: string; size?: { width?: string } };
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

export { TimeField };
