type GroupSelectField = {
  record: {
    get: {
      type: "GROUP_SELECT";
      value: Array<{ code: string; name: string }>;
    };
    set: {
      type: "GROUP_SELECT";
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

export { GroupSelectField };
