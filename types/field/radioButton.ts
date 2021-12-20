type RadioButtonField = {
  rest: {
    record: {
      get: {
        type: "RADIO_BUTTON";
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
          type: "RADIO_BUTTON";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string;
          options: {
            [optionName: string]: { label: string; index: string } | undefined;
          };
          align: "HORIZONTAL" | "VERTICAL";
        };
        add: {
          type: "RADIO_BUTTON";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          options: {
            [optionName: string]: { label: string; index: string | number };
          };
          align?: "HORIZONTAL" | "VERTICAL";
        };
        update: {
          type: "RADIO_BUTTON";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          options?: {
            [optionName: string]: { label?: string; index: string | number };
          };
          align?: "HORIZONTAL" | "VERTICAL";
        };
      };
      layout: {
        get: {
          type: "RADIO_BUTTON";
          code: string;
          size: { width: string };
        };
        update: {
          type: "RADIO_BUTTON";
          code: string;
          size?: { width?: string };
        };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "RADIO_BUTTON";
        value: string;
      };
      set: {
        type: "RADIO_BUTTON";
        value: string;
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

export { RadioButtonField };
