type RichTextField = {
  rest: {
    record: {
      get: {
        type: "RICH_TEXT";
        value: string;
      };
      add: {
        value: string;
      };
      update: {
        value: string;
      };
    };
  };
  page: {
    record: {
      get: {
        type: "RICH_TEXT";
        value: string;
      };
      set: {
        type: "RICH_TEXT";
        value: string;
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

export { RichTextField };
