type MultiSelectField = {
  rest: {
    record: {
      get: {
        type: "MULTI_SELECT";
        value: string[];
      };
      add: {
        value: string[];
      };
      update: {
        value: string[];
      };
    };
    form: {
      property: {
        get: {
          type: "MULTI_SELECT";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string[];
          options: { [optionName: string]: { label: string; index: string } };
        };
        add: {
          type: "MULTI_SELECT";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string[];
          options: {
            [optionName: string]: { label: string; index: string | number };
          };
        };
        update: {
          type: "MULTI_SELECT";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string[];
          options?: {
            [optionName: string]: { label?: string; index: string | number };
          };
        };
      };
      layout: {
        get: {
          type: "MULTI_SELECT";
          code: string;
          size: { width: string };
        };
        update: {
          type: "MULTI_SELECT";
          code: string;
          size?: { width?: string };
        };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "MULTI_SELECT";
        value: string[];
      };
      set: {
        type: "MULTI_SELECT";
        value: string[];
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

export { MultiSelectField };
