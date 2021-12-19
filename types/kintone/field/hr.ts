type HRField = {
  rest: {
    record: { get: never; add: never; update: never };
    form: {
      property: { get: never; add: never; update: never };
      layout: {
        get: { type: "HR"; size: { width: string } };
        update: { type: "HR"; size?: { width?: string } };
      };
    };
  };
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

export { HRField };
