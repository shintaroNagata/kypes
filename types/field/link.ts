type LinkField = {
  page: {
    record: {
      get: {
        type: "LINK";
        value: string | undefined;
      };
      set: {
        type: "LINK";
        value: string | undefined;
      };
    };
    supported: {
      change: false;
      createPage: true;
      disabled: true;
      error: true;
    };
  };
};

export { LinkField };
