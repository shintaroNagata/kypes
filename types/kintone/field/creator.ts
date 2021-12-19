type CreatorField = {
  rest: {
    record: {
      get: {
        type: "CREATOR";
        value: { code: string; name: string };
      };
      add: {
        value: { code: string };
      };
      update: never;
    };
  };
  page: {
    record: {
      get: {
        type: "CREATOR";
        value: { code: string; name: string };
      };
      set: {
        type: "CREATOR";
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

export { CreatorField };
