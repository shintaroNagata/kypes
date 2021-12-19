type CalcField = {
  rest: {
    record: {
      get: {
        type: "CALC";
        value: string;
      };
      add: never;
      update: never;
    };
    form: {
      property: {
        get: {
          type: "CALC";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          expression: string;
          hideExpression: boolean;
          format:
            | "NUMBER"
            | "NUMBER_DIGIT"
            | "DATETIME"
            | "DATE"
            | "TIME"
            | "HOUR_MINUTE"
            | "DAY_HOUR_MINUTE";
          displayScale: string;
          unit: string;
          unitPosition: "BEFORE" | "AFTER";
        };
        add: {
          type: "CALC";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          expression: string;
          hideExpression?: boolean;
          format?:
            | "NUMBER"
            | "NUMBER_DIGIT"
            | "DATETIME"
            | "DATE"
            | "TIME"
            | "HOUR_MINUTE"
            | "DAY_HOUR_MINUTE";
          displayScale?: string;
          unit?: string;
          unitPosition?: "BEFORE" | "AFTER";
        };
        update: {
          type: "CALC";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          expression?: string;
          hideExpression?: boolean;
          format?:
            | "NUMBER"
            | "NUMBER_DIGIT"
            | "DATETIME"
            | "DATE"
            | "TIME"
            | "HOUR_MINUTE"
            | "DAY_HOUR_MINUTE";
          displayScale?: string;
          unit?: string;
          unitPosition?: "BEFORE" | "AFTER";
        };
      };
      layout: {
        get: { type: "CALC"; code: string; size: { width: string } };
        update: { type: "CALC"; code: string; size?: { width?: string } };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "CALC";
        value: string;
      };
      set: {
        type: "CALC";
      };
    };
    supported: {
      change: false;
      createPage: true;
      disabled: false;
      error: false;
    };
  };
};

export { CalcField };
