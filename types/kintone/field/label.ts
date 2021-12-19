type LabelField = {
  rest: {
    record: {
      get: never;
      add: never;
      update: never;
    };
    form: {
      property: { get: never; add: never; update: never };
      layout: {
        get: { type: "LABEL"; label: string; size: { width: string } };
        update: { type: "LABEL"; label: string; size?: { width?: string } };
      };
    };
  };
  page: {
    record: { get: never; set: never };
    supported: {
      change: false;
      createPage: false;
      disabled: false;
      error: false;
    };
  };
};

export { LabelField };
