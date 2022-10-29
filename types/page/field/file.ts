type FileField = {
  record: {
    get: {
      type: "FILE";
      value: Array<{
        contentType: string;
        fileKey: string;
        name: string;
        size: string;
      }>;
    };
    set: {
      type: "FILE";
    };
  };
  supported: {
    change: false;
    createPage: true;
    disabled: true;
    error: true;
  };
};

export { FileField };
