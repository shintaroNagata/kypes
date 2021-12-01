type ActionsRestApiMap = {
  GetAppActions: {
    method: "GET";
    endpoint: "app/actions";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      actions: {
        [actionName: string]:
          | {
              name: string;
              id: string;
              index: string;
              destApp: {
                app: string;
                code: string;
              };
              mapping: Array<
                | {
                    srcType: "FIELD";
                    srcField: string;
                    destField: string;
                  }
                | {
                    srcType: "RECORD_URL";
                    destField: string;
                  }
              >;
              entities: Array<{
                type: "USER" | "GROUP" | "ORGANIZATION";
                code: string;
              }>;
            }
          | undefined;
      };
      revision: string;
    };
  };
  GetPreviewAppActions: {
    method: "GET";
    endpoint: "preview/app/actions";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      actions: {
        [actionName: string]:
          | {
              name: string;
              id: string;
              index: string;
              destApp: {
                app: string;
                code: string;
              };
              mapping: Array<
                | {
                    srcType: "FIELD";
                    srcField: string;
                    destField: string;
                  }
                | {
                    srcType: "RECORD_URL";
                    destField: string;
                  }
              >;
              entities: Array<{
                type: "USER" | "GROUP" | "ORGANIZATION";
                code: string;
              }>;
            }
          | undefined;
      };
      revision: string;
    };
  };
  PutPreviewAppActions: {
    method: "PUT";
    endpoint: "preview/app/actions";
    requestParameters: {
      app: string | number;
      actions: {
        [actionName: string]: {
          name?: string;
          index: string;
          destApp?: {
            app?: string;
            code?: string;
          };
          mapping?: Array<
            | {
                srcType: "FIELD";
                srcField: string;
                destField: string;
              }
            | {
                srcType: "RECORD_URL";
                destField: string;
              }
          >;
          entities?: Array<{
            type: "USER" | "GROUP" | "ORGANIZATION";
            code: string;
          }>;
        };
      };
      revision?: string | number;
    };
    responseProperties: {
      actions: {
        [actionName: string]:
          | {
              id: string;
            }
          | undefined;
      };
      revision: string;
    };
  };
};

export { ActionsRestApiMap };
