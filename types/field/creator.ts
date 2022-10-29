type CreatorField = {
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

export { CreatorField };
