type DropdownField = {
  page: {
    record: {
      get: {
        type: "DROP_DOWN";
        value: string | undefined;
      };
      set: {
        type: "DROP_DOWN";
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
};

export { DropdownField };
