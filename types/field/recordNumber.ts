type RecordNumberField = {
  rest: {
    record: {
      get: {
        type: "RECORD_NUMBER";
        value: string;
      };
      add: never;
      update: never;
    };
    form: {
      property: {
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
      layout: {
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

export { RecordNumberField };
