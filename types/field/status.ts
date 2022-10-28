type StatusField = {
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
