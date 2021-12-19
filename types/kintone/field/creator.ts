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
    form: {
      property: {
        get: {
          type: "CREATOR";
          code: string;
          label: string;
          noLabel: boolean;
        };
        add: never;
        update: {
          type: "CREATOR";
          code?: string;
          label?: string;
          noLabel?: boolean;
        };
      };
      layout: {
        get: { type: "CREATOR"; code: string; size: { width: string } };
        update: { type: "CREATOR"; code: string; size?: { width?: string } };
      };
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
