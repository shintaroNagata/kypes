type MultiLineTextField = {
  rest: {
    record: {
      get: {
        type: "MULTI_LINE_TEXT";
        value: string;
      };
      add: {
        value: string | undefined;
      };
      update: {
        value: string | undefined;
      };
    };
  };
  page: {
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
};

export { MultiLineTextField };
