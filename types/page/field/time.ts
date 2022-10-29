type TimeField = {
  record: {
    get: {
      type: "TIME";
      value: string | null | undefined;
    };
    set: {
      type: "TIME";
      value: string | null | undefined;
    };
  };
  supported: {
    change: true;
    createPage: true;
    disabled: true;
    error: true;
  };
};

export { TimeField };
