type ModifierField = {
  rest: {
    record: {
      get: {
        type: "MODIFIER";
        value: { code: string; name: string };
      };
      add: {
        value: { code: string };
      };
      update: never;
    };
  };
  page: {
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
};

export { ModifierField };
