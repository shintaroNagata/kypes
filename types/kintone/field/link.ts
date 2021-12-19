type LinkField = {
  rest: {
    record: {
      get: {
        type: "LINK";
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
          type: "LINK";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: string;
          unique: boolean;
          minLength: string;
          maxLength: string;
          protocol: "WEB" | "CALL" | "MAIL";
        };
        add: {
          type: "LINK";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          unique?: boolean;
          minLength?: string | number;
          maxLength?: string | number;
          protocol: "WEB" | "CALL" | "MAIL";
        };
        update: {
          type: "LINK";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: string;
          unique?: boolean;
          minLength?: string | number;
          maxLength?: string | number;
          protocol?: "WEB" | "CALL" | "MAIL";
        };
      };
      layout: {
        get: { type: "LINK"; code: string; size: { width: string } };
        update: { type: "LINK"; code: string; size?: { width?: string } };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "LINK";
        value: string | undefined;
      };
      set: {
        type: "LINK";
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

export { LinkField };
