type IDField = {
  rest: {
    record: {
      get: {
        type: "__ID__";
        value: string;
      };
      add: never;
      update: never;
    };
    form: {
      property: { get: never; add: never; update: never };
      layout: { get: never; update: never };
    };
  };
  page: {
    record: {
      get: {
        type: "__ID__";
        value: string;
      };
      set: {
        type: "__ID__";
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

export { IDField };
