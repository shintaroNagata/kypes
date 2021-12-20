type StatusAssigneeField = {
  rest: {
    record: {
      get: {
        type: "STATUS_ASSIGNEE";
        value: Array<{ code: string; name: string }>;
      };
      add: never;
      update: never;
    };
    form: {
      property: {
        get: {
          type: "STATUS_ASSIGNEE";
          code: string;
          label: string;
          enabled: boolean;
        };
        add: never;
        update: never;
      };
      layout: { get: never; update: never };
    };
  };
  page: {
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
};

export { StatusAssigneeField };
