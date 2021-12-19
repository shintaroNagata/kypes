type SpacerField = {
  rest: {
    record: { get: never; add: never; update: never };
    form: {
      property: { get: never; add: never; update: never };
      layout: {
        get: {
          type: "SPACER";
          elementId: string;
          size: { width: string; height: string };
        };
        update: {
          type: "SPACER";
          elementId: string;
          size?: { width?: string; height?: string };
        };
      };
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

export { SpacerField };
