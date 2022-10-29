type MultiLineTextField = {
  record: {
    get: {
      type: "MULTI_LINE_TEXT";
      value: string | undefined;
    };
    set: {
      type: "MULTI_LINE_TEXT";
      value: string | undefined;
    };
  };
  supported: {
    change: false;
    createPage: true;
    disabled: true;
    error: true;
  };
};

export { MultiLineTextField };
