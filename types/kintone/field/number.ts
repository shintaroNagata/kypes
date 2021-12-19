type NumberField = {
  rest: {
    record: {
      get: {
        type: "NUMBER";
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
        type: "NUMBER";
        value: string | undefined;
      };
      set: {
        type: "NUMBER";
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

export { NumberField };
