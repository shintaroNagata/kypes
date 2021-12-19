type UpdatedTimeField = {
  rest: {
    record: {
      get: {
        type: "UPDATED_TIME";
        value: string;
      };
      add: {
        value: string;
      };
      update: never;
    };
    form: {
      property: {
        get: {
          type: "UPDATED_TIME";
          code: string;
          label: string;
          noLabel: boolean;
        };
        add: never;
        update: {
          type: "UPDATED_TIME";
          code?: string;
          label?: string;
          noLabel?: boolean;
        };
      };
      layout: {
        get: {
          type: "UPDATED_TIME";
          code: string;
          size: { width: string };
        };
        update: {
          type: "UPDATED_TIME";
          code: string;
          size?: { width?: string };
        };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "UPDATED_TIME";
        value: string;
      };
      set: {
        type: "UPDATED_TIME";
      };
    };
    supported: {
      change: false;
      createPage: false;
      disabled: false;
      error: false;
    };
  };
};

export { UpdatedTimeField };
