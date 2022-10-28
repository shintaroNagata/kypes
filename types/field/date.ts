type DateField = {
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
