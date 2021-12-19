type DateField = {
  rest: {
    record: {
      get: {
        type: "DATE";
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
        type: "DATE";
        value: string | null | undefined;
      };
      set: {
        type: "DATE";
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

export { DateField };
