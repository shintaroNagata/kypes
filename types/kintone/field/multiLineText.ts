type MultiLineTextField = {
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
    form: {
      property: {
        get: {
          type: "MULTI_LINE_TEXT";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string;
        };
        add: {
          type: "MULTI_LINE_TEXT";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
        };
        update: {
          type: "MULTI_LINE_TEXT";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
        };
      };
      layout: {
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

export { MultiLineTextField };
