type DropdownField = {
  rest: {
    record: {
      get: {
        type: "DROP_DOWN";
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
