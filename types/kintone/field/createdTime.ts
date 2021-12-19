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
