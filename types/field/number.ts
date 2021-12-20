type NumberField = {
  rest: {
    record: {
      get: {
        type: "NUMBER";
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
          type: "NUMBER";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string;
          unique: boolean;
          minValue: string;
          maxValue: string;
          digit: boolean;
          displayScale: string;
          unit: string;
          unitPosition: "BEFORE" | "AFTER";
        };
        add: {
          type: "NUMBER";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          unique?: boolean;
          minValue?: string | number;
          maxValue?: string | number;
          digit?: boolean;
          displayScale?: string | number;
          unit?: string;
          unitPosition?: "BEFORE" | "AFTER";
        };
        update: {
          type: "NUMBER";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          unique?: boolean;
          minValue?: string | number;
          maxValue?: string | number;
          digit?: boolean;
          displayScale?: string | number;
          unit?: string;
          unitPosition?: "BEFORE" | "AFTER";
        };
      };
      layout: {
        get: { type: "NUMBER"; code: string; size: { width: string } };
        update: { type: "NUMBER"; code: string; size?: { width?: string } };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "NUMBER";
        value: string | undefined;
      };
      set: {
        type: "NUMBER";
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

export { NumberField };
