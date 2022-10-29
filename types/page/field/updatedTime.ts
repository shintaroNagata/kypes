type UpdatedTimeField = {
  record: {
    get: {
      type: "UPDATED_TIME";
      value: string;
    };
    set: {
      type: "UPDATED_TIME";
    };
  };
  supported: {
    change: false;
    createPage: false;
    disabled: false;
    error: false;
  };
};

export { UpdatedTimeField };
