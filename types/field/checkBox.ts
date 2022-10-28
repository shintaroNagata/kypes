type CheckBoxField = {
  page: {
    record: {
      get: {
        type: "CHECK_BOX";
        value: string[];
      };
      set: {
        type: "CHECK_BOX";
        value: string[];
        disabled?: boolean;
        error?: string | null;
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

export { CheckBoxField };
