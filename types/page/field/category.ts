type CategoryField = {
  record: {
    get: {
      type: "CATEGORY";
      value: string[];
    };
    set: {
      type: "CATEGORY";
      value: string[];
    };
  };
  supported: {
    change: false;
    createPage: true;
    disabled: true;
    error: true;
  };
};

export { CategoryField };
