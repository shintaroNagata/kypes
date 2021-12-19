type CheckBoxField = {
  rest: {
    record: {
      get: {
        type: "CHECK_BOX";
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
          type: "CHECK_BOX";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string[];
          options: {
            [optionName: string]: { label: string; index: string } | undefined;
          };
          align: "HORIZONTAL" | "VERTICAL";
        };
        add: {
          type: "CHECK_BOX";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string[];
          options: {
            [optionName: string]: { label: string; index: string };
          };
          align?: "HORIZONTAL" | "VERTICAL";
        };
        update: {
          type: "CHECK_BOX";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string[];
          options?: {
            [optionName: string]: { label?: string; index: string };
          };
          align?: "HORIZONTAL" | "VERTICAL";
        };
      };
      layout: {
        get: { type: "CHECK_BOX"; code: string; size: { width: string } };
        update: { type: "CHECK_BOX"; code: string; size?: { width?: string } };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "CHECK_BOX";
        value: string[];
      };
      set: {
        type: "CHECK_BOX";
        value: string[];
        disabled?: boolean;
        error?: string | null;
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

export { CheckBoxField };
