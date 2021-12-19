type SingleLineTextField = {
  rest: {
    record: {
      get: {
        type: "SINGLE_LINE_TEXT";
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
          type: "SINGLE_LINE_TEXT";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string;
          unique: boolean;
          minLength: string;
          maxLength: string;
          expression: string;
          hideExpression: boolean;
        };
        add: {
          type: "SINGLE_LINE_TEXT";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          unique?: boolean;
          minLength?: string | number;
          maxLength?: string | number;
          expression?: string;
          hideExpression?: boolean;
        };
        update: {
          type: "SINGLE_LINE_TEXT";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          unique?: boolean;
          minLength?: string | number;
          maxLength?: string | number;
          expression?: string;
          hideExpression?: boolean;
        };
      };
      layout: {
        get: {
          type: "SINGLE_LINE_TEXT";
          code: string;
          size: { width: string };
        };
        update: {
          type: "SINGLE_LINE_TEXT";
          code: string;
          size?: { width?: string };
        };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "SINGLE_LINE_TEXT";
        value: string | undefined;
      };
      set: {
        type: "SINGLE_LINE_TEXT";
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

export { SingleLineTextField };
