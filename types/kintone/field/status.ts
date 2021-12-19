type StatusField = {
  rest: {
    record: {
      get: {
        type: "STATUS";
        value: string;
      };
      add: never;
      update: never;
    };
  };
  page: {
    record: {
      get: {
        type: "STATUS";
        value: string;
      };
      set: {
        type: "STATUS";
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

export { StatusField };
