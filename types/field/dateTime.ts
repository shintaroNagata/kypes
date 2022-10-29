type DateTimeField = {
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

export { DateTimeField };
