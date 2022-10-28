type LookupField = {
  page: {
    record: { get: never; set: never };
    supported: {
      change: false;
      createPage: false;
      disabled: false;
      error: false;
    };
  };
};

export { LookupField };
