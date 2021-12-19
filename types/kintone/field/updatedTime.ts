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
