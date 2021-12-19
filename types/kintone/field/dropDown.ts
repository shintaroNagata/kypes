type DropdownField = {
  rest: {
    record: {
      get: {
        type: "DROP_DOWN";
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
          type: "DROP_DOWN";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string;
          options: {
            [optionName: string]: { label: string; index: string } | undefined;
          };
        };
        add: {
          type: "DROP_DOWN";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          options: {
            [optionName: string]: { label: string; index: string | number };
          };
        };
        update: {
          type: "DROP_DOWN";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          options?: {
            [optionName: string]: { label?: string; index: string | number };
          };
        };
      };
      layout: {
        get: { type: "DROP_DOWN"; code: string; size: { width: string } };
        update: { type: "DROP_DOWN"; code: string; size?: { width?: string } };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "DROP_DOWN";
        value: string | undefined;
      };
      set: {
        type: "DROP_DOWN";
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

export { DropdownField };
