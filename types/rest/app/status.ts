type StatusRestApiMap = {
  GetAppStatus: {
    method: "GET";
    endpoint: "app/status";
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      enable: boolean;
      states: {
        [stateName: string]: {
          name: string;
          index: string;
          assignee: {
            type: "ONE" | "ALL" | "ANY";
            entities: Array<{
              entity:
                | {
                    type:
                      | "USER"
                      | "GROUP"
                      | "ORGANIZATION"
                      | "FIELD_ENTITY"
                      | "CUSTOM_FIELD";
                    code: string;
                  }
                | { type: "CREATOR"; code: null };
              includeSubs: boolean;
            }>;
          };
        };
      } | null;
      actions: Array<{
        name: string;
        from: string;
        to: string;
        filterCond: string;
      }>;
      revision: string;
    };
  };
  GetPreviewAppStatus: {
    method: "GET";
    endpoint: "preview/app/status";
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      enable: boolean;
      states: {
        [stateName: string]:
          | {
              name: string;
              index: string;
              assignee: {
                type: "ONE" | "ALL" | "ANY";
                entities: Array<{
                  entity:
                    | {
                        type:
                          | "USER"
                          | "GROUP"
                          | "ORGANIZATION"
                          | "FIELD_ENTITY"
                          | "CUSTOM_FIELD";
                        code: string;
                      }
                    | { type: "CREATOR"; code: null };
                  includeSubs: boolean;
                }>;
              };
            }
          | undefined;
      } | null;
      actions: Array<{
        name: string;
        from: string;
        to: string;
        filterCond: string;
      }>;
      revision: string;
    };
  };
  PutPreviewAppStatus: {
    method: "PUT";
    endpoint: "preview/app/status";
    parameters: {
      app: string | number;
      enable?: boolean;
      states?: {
        [stateName: string]: {
          name?: string;
          index: string;
          assignee?: {
            type: "ONE" | "ALL" | "ANY";
            entities: Array<{
              entity:
                | {
                    type:
                      | "USER"
                      | "GROUP"
                      | "ORGANIZATION"
                      | "FIELD_ENTITY"
                      | "CUSTOM_FIELD";
                    code: string;
                  }
                | { type: "CREATOR" };
              includeSubs?: boolean;
            }>;
          };
        };
      };
      actions?: Array<{
        name: string;
        from: string;
        to: string;
        filterCond?: string;
      }>;
      revision?: string | number;
    };
    response: { revision: string };
  };
};

export { StatusRestApiMap };
