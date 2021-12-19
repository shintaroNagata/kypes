type OrganizationSelectField = {
  rest: {
    record: {
      get: {
        type: "ORGANIZATION_SELECT";
        value: Array<{ code: string; name: string }>;
      };
      add: {
        value: Array<{ code: string }>;
      };
      update: {
        value: Array<{ code: string }>;
      };
    };
  };
  page: {
    record: {
      get: {
        type: "ORGANIZATION_SELECT";
        value: Array<{ code: string; name: string }>;
      };
      set: {
        type: "ORGANIZATION_SELECT";
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

export { OrganizationSelectField };
