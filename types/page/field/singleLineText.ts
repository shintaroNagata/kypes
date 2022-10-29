type SingleLineTextField = {
  record: {
    get: {
      type: "SINGLE_LINE_TEXT";
      value: string | undefined;
    };
    set: {
      type: "SINGLE_LINE_TEXT";
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

export { SingleLineTextField };
