type RadioButtonField = {
  rest: {
    record: {
      get: {
        type: "RADIO_BUTTON";
        value: string;
      };
      add: {
        value: string;
      };
      update: {
        value: string;
      };
    };
  };
  page: {
    record: {
      get: {
        type: "RADIO_BUTTON";
        value: string;
      };
      set: {
        type: "RADIO_BUTTON";
        value: string;
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

export { RadioButtonField };
