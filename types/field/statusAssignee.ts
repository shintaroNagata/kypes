type StatusAssigneeField = {
  record: {
    get: {
      type: "STATUS_ASSIGNEE";
      value: Array<{ code: string; name: string }>;
    };
    set: {
      type: "STATUS_ASSIGNEE";
    };
  };
  supported: {
    change: false;
    createPage: false;
    disabled: false;
    error: false;
  };
};

export { StatusAssigneeField };
