type MultiSelectField = {
  record: {
    get: {
      type: "MULTI_SELECT";
      value: string[];
    };
    set: {
      type: "MULTI_SELECT";
      value: string[];
    };
  };
  supported: {
    change: true;
    createPage: true;
    disabled: true;
    error: true;
  };
};

export { MultiSelectField };
