type ModifierField = {
  rest: {
    record: {
      get: {
        type: "MODIFIER";
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
          type: "MODIFIER";
          code: string;
          label: string;
          noLabel: boolean;
        };
        add: never;
        update: {
          type: "MODIFIER";
          code?: string;
          label?: string;
          noLabel?: boolean;
        };
      };
      layout: {
        get: { type: "MODIFIER"; code: string; size: { width: string } };
        update: { type: "MODIFIER"; code: string; size?: { width?: string } };
      };
    };
  };
  page: {
    record: {
      get: {
        type: "MODIFIER";
        value: { code: string; name: string };
      };
      set: {
        type: "MODIFIER";
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

export { ModifierField };
