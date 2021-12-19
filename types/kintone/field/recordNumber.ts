type RecordNumberField = {
  rest: {
    record: {
      get: {
        type: "RECORD_NUMBER";
        value: string;
      };
      add: never;
      update: never;
    };
  };
  page: {
    record: {
      get: {
        type: "RECORD_NUMBER";
        value: string;
      };
      set: {
        type: "RECORD_NUMBER";
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

export { RecordNumberField };
