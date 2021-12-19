type RichTextField = {
  inSubtable: true;
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
    form: {
      property: {
        get: {
          type: "RICH_TEXT";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string;
        };
        add: {
          type: "RICH_TEXT";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
        };
        update: {
          type: "RICH_TEXT";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
        };
      };
      layout: {
        get: {
          type: "RICH_TEXT";
          code: string;
          size: { width: string; innerHeight: string };
        };
        update: {
          type: "RICH_TEXT";
          code: string;
          size?: { width?: string; innerHeight?: string };
        };
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

export { RichTextField };
