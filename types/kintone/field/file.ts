type FileField = {
  rest: {
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
      add: {
        value: Array<{
          fileKey: string;
        }>;
      };
      update: {
        value: Array<{
          fileKey: string;
        }>;
      };
    };
    form: {
      property: {
        get: {
          type: "FILE";
          code: string;
          label: string;
          noLabel: boolean;
          required: boolean;
          thumbnailSize: "50" | "150" | "250" | "500";
        };
        add: {
          type: "FILE";
          code: string;
          label: string;
          noLabel?: boolean;
          required?: boolean;
          thumbnailSize?: 50 | 150 | 250 | 500 | "50" | "150" | "250" | "500";
        };
        update: {
          type: "FILE";
          code?: string;
          label?: string;
          noLabel?: boolean;
          required?: boolean;
          thumbnailSize?: 50 | 150 | 250 | 500 | "50" | "150" | "250" | "500";
        };
      };
      layout: {
        get: { type: "FILE"; code: string; size: { width: string } };
        update: { type: "FILE"; code: string; size?: { width?: string } };
      };
    };
  };
  page: {
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
};

export { FileField };
