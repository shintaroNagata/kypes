type UserSelectField = {
  page: {
    record: {
      get: {
        type: "USER_SELECT";
        value: Array<{ code: string; name: string }>;
      };
      set: {
        type: "USER_SELECT";
        value: Array<{ code: string }>;
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

export { UserSelectField };
