type CreatedTimeField = {
  rest: {
    record: {
      get: {
        type: "CREATED_TIME";
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
          type: "CREATED_TIME";
          code: string;
          label: string;
          noLabel: boolean;
        };
        add: never;
        update: {
          type: "CREATED_TIME";
          code?: string;
          label?: string;
          noLabel?: boolean;
        };
      };
      layout: {
        get: { type: "CREATOR"; code: string; size: { width: string } };
        update: { type: "CREATOR"; code: string; size?: { width?: string } };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "CREATED_TIME";
        value: string;
      };
      set: {
        type: "CREATED_TIME";
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

export { CreatedTimeField };
