type CustomizeRestApiMap = {
  GetAppCustomize: {
    method: "GET";
    endpoint: "app/customize";
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
  GetPreviewAppCustomize: {
    method: "GET";
    endpoint: "preview/app/customize";
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
  PutPreviewAppCustomize: {
    method: "PUT";
    endpoint: "preview/app/customize";
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

export { CustomizeRestApiMap };
