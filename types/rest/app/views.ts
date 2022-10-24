type ViewsRestApiMap = {
  GetAppViews: {
    method: "GET";
    endpoint: "app/views";
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      views: {
        [viewName: string]:
          | {
              name: string;
              id: string;
              index: string;
              filterCond: string;
              sort: string;
            } & (
              | {
                  type: "LIST";
                  builtinType: "ASSIGNEE" | undefined;
                  fields: string[];
                }
              | { type: "CALENDAR"; date: string; title: string }
              | {
                  type: "CUSTOM";
                  html: string;
                  pager: boolean;
                  device: "DESKTOP" | "ANY";
                }
            );
      };
      revision: string;
    };
  };
  GetPreviewAppViews: {
    method: "GET";
    endpoint: "preview/app/views";
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      views: {
        [viewName: string]:
          | {
              name: string;
              id: string;
              index: string;
              filterCond: string;
              sort: string;
            } & (
              | {
                  type: "LIST";
                  builtinType: "ASSIGNEE" | undefined;
                  fields: string[];
                }
              | { type: "CALENDAR"; date: string; title: string }
              | {
                  type: "CUSTOM";
                  html: string;
                  pager: boolean;
                  device: "DESKTOP" | "ANY";
                }
            );
      };
      revision: string;
    };
  };
  PutPreviewAppViews: {
    method: "PUT";
    endpoint: "preview/app/views";
    parameters: {
      app: string | number;
      views: {
        [viewName: string]: {
          name?: string;
          id: string;
          index: string;
          filterCond?: string;
          sort?: string;
        } & (
          | {
              type: "LIST";
              fields?: string[];
            }
          | { type: "CALENDAR"; date?: string; title?: string }
          | {
              type: "CUSTOM";
              html?: string;
              pager?: boolean;
              device?: "DESKTOP" | "ANY";
            }
        );
      };
      revision?: string | number;
    };
    response: {
      revision: string;
      views: { [viewName: string]: { id: string } };
    };
  };
};

export { ViewsRestApiMap };
