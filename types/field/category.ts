type CategoryField = {
  rest: {
    record: {
      get: {
        type: "CATEGORY";
        value: string[];
      };
      add: never;
      update: never;
    };
    form: {
      property: {
        get: {
          type: "CATEGORY";
          code: string;
          label: string;
          enabled: boolean;
        };
        add: never;
        update: never;
      };
      layout: { get: never; update: never };
    };
  };
  page: {
    record: {
      get: {
        type: "CATEGORY";
        value: string[];
      };
      set: {
        type: "CATEGORY";
        value: string[];
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

export { CategoryField };
