type NumberField = {
  record: {
    get: {
      type: "NUMBER";
      value: string | undefined;
    };
    set: {
      type: "NUMBER";
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

export { NumberField };
