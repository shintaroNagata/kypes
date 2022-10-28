type RevisionField = {
  page: {
    record: {
      get: {
        type: "__REVISION__";
        value: string;
      };
      set: {
        type: "__REVISION__";
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

export { RevisionField };
