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
