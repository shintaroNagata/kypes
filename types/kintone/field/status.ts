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
    form: {
      property: {
        get: { type: "STATUS"; code: string; label: string; enabled: boolean };
        add: never;
        update: never;
      };
      layout: { get: never; update: never };
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
