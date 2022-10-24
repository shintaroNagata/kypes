type AppCustomizeSchema = {
  GET: {
    parameters: { app: string | number };
    response: {
      scope: "ALL" | "ADMIN" | "NONE";
      desktop: {
        js: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
        css: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
      };
      mobile: {
        js: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
        css: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
      };
      revision: string;
    };
  };
};
type PreviewAppCustomizeSchema = {
  GET: {
    parameters: { app: string | number };
    response: {
      scope: "ALL" | "ADMIN" | "NONE";
      desktop: {
        js: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
        css: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
      };
      mobile: {
        js: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
        css: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
      };
      revision: string;
    };
  };
  PUT: {
    parameters: {
      app: string | number;
      scope?: "ALL" | "ADMIN" | "NONE";
      desktop?: {
        js?: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                fileKey: string;
              };
            }
        >;
        css?: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                fileKey: string;
              };
            }
        >;
      };
      mobile?: {
        js?: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                fileKey: string;
              };
            }
        >;
        css?: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                fileKey: string;
              };
            }
        >;
      };
      revision?: string | number;
    };
    response: {
      revision: string;
    };
  };
};

type Schema = {
  "app/customize": AppCustomizeSchema;
  "preview/app/customize": PreviewAppCustomizeSchema;
};

export { Schema };
