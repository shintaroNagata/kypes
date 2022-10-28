type OrganizationSelectField = {
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

export { OrganizationSelectField };
