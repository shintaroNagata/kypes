type ModifierField = {
  record: {
    get: {
      type: "MODIFIER";
      value: { code: string; name: string };
    };
    set: {
      type: "MODIFIER";
    };
  };
  supported: {
    change: false;
    createPage: false;
    disabled: false;
    error: false;
  };
};

export { ModifierField };
