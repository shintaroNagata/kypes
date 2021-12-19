type GroupSelectField = {
  rest: {
    record: {
      get: {
        type: "GROUP_SELECT";
        value: Array<{ code: string; name: string }>;
      };
      add: {
        value: Array<{ code: string }>;
      };
      update: {
        value: Array<{ code: string }>;
      };
    };
    form: {
      property: {
        get: {
          type: "GROUP_SELECT";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          defaultValue: Array<{ code: string; type: "GROUP" }>;
          entities: Array<{ code: string; type: "GROUP" }>;
        };
        add: {
          type: "GROUP_SELECT";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: Array<{ code: string; type: "GROUP" }>;
          entities?: Array<{ code: string; type: "GROUP" }>;
        };
        update: {
          type: "GROUP_SELECT";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          defaultValue?: Array<{ code: string; type: "GROUP" }>;
          entities?: Array<{ code: string; type: "GROUP" }>;
        };
      };
      layout: {
        get: {
          type: "GROUP_SELECT";
          code: string;
          size: { width: string };
        };
        update: {
          type: "GROUP_SELECT";
          code: string;
          size?: { width?: string };
        };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "GROUP_SELECT";
        value: Array<{ code: string; name: string }>;
      };
      set: {
        type: "GROUP_SELECT";
        value: Array<{ code: string }>;
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

export { GroupSelectField };
