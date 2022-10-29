type CreatedTimeField = {
  record: {
    get: {
      type: "CREATED_TIME";
      value: string;
    };
    set: {
      type: "CREATED_TIME";
    };
  };
  supported: {
    change: false;
    createPage: false;
    disabled: false;
    error: false;
  };
};

export { CreatedTimeField };
