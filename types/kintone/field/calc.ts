type CalcField = {
  rest: {
    record: {
      get: {
        type: "CALC";
        value: string;
      };
      add: never;
      update: never;
    };
  };
  page: {
    record: {
      get: {
        type: "CALC";
        value: string;
      };
      set: {
        type: "CALC";
      };
    };
    supported: {
      change: false;
      createPage: true;
      disabled: false;
      error: false;
    };
  };
};

export { CalcField };
