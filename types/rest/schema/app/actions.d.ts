type AppActionsSchema = {
  GET: {
    request: {
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
};
type PreviewAppActionsSchema = {
  GET: {
    request: {
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
  PUT: {
    request: {
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

type Schema = {
  "app/actions": AppActionsSchema;
  "preview/app/actions": PreviewAppActionsSchema;
};

export type { Schema };
