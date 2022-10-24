type ActionsRestApiMap = {
  GetAppActions: {
    method: "GET";
    endpoint: "app/actions";
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      actions: {
        [actionName: string]: {
          name: string;
          id: string;
          index: string;
          destApp: { app: string; code: string };
          mapping: Array<
            | { srcType: "FIELD"; srcField: string; destField: string }
            | { srcType: "RECORD_URL"; destField: string }
          >;
          entities: Array<{
            type: "USER" | "GROUP" | "ORGANIZATION";
            code: string;
          }>;
        };
      };
      revision: string;
    };
  };
  GetPreviewAppActions: {
    method: "GET";
    endpoint: "preview/app/actions";
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      actions: {
        [actionName: string]: {
          name: string;
          id: string;
          index: string;
          destApp: { app: string; code: string };
          mapping: Array<
            | { srcType: "FIELD"; srcField: string; destField: string }
            | { srcType: "RECORD_URL"; destField: string }
          >;
          entities: Array<{
            type: "USER" | "GROUP" | "ORGANIZATION";
            code: string;
          }>;
        };
      };
      revision: string;
    };
  };
  PutPreviewAppActions: {
    method: "PUT";
    endpoint: "preview/app/actions";
    parameters: {
      app: string | number;
      actions: {
        [actionName: string]: {
          name?: string;
          index: string;
          destApp?: { app?: string; code?: string };
          mapping?: Array<
            | { srcType: "FIELD"; srcField: string; destField: string }
            | { srcType: "RECORD_URL"; destField: string }
          >;
          entities?: Array<{
            type: "USER" | "GROUP" | "ORGANIZATION";
            code: string;
          }>;
        };
      };
      revision?: string | number;
    };
    response: {
      actions: { [actionName: string]: { id: string } };
      revision: string;
    };
  };
};

export { ActionsRestApiMap };
