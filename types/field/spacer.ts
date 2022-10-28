type SpacerField = {
  record: { get: never; set: never };
  supported: {
    change: false;
    createPage: false;
    disabled: false;
    error: false;
  };
};

export { SpacerField };
