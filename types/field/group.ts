type GroupField = {
  rest: {
    record: { get: never; add: never; update: never };
    form: {
      property: {
        get: {
          type: "GROUP";
          code: string;
          label: string;
          noLabel: boolean;
          openGroup: boolean;
        };
        add: {
          type: "GROUP";
          code: string;
          label: string;
          noLabel?: boolean;
          openGroup?: boolean;
        };
        update: {
          type: "GROUP";
          code?: string;
          label?: string;
          noLabel?: boolean;
          openGroup?: boolean;
        };
      };
      layout: { get: never; update: never };
    };
  };
  page: {
    record: { get: never; set: never };
    supported: {
      change: false;
      createPage: false;
      disabled: false;
      error: false;
    };
  };
};

export { GroupField };
