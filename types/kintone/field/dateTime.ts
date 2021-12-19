type DateTimeField = {
  rest: {
    record: {
      get: {
        type: "DATETIME";
        value: string;
      };
      add: {
        value: string | undefined;
      };
      update: {
        value: string | undefined;
      };
    };
  };
  page: {
    record: {
      get: {
        type: "DATETIME";
        value: string | undefined;
      };
      set: {
        type: "DATETIME";
        value: string | undefined;
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

export { DateTimeField };
