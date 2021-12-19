type TimeField = {
  rest: {
    record: {
      get: {
        type: "TIME";
        value: string | null;
      };
      add: {
        value: string | null | undefined;
      };
      update: {
        value: string | null | undefined;
      };
    };
  };
  page: {
    record: {
      get: {
        type: "TIME";
        value: string | null | undefined;
      };
      set: {
        type: "TIME";
        value: string | null | undefined;
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

export { TimeField };
