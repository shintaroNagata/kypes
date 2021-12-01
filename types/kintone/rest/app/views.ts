type ViewsRestApiMap = {
  GetAppViews: {
    method: "GET";
    endpoint: "app/views";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      views: {
        [viewName: string]:
          | ({
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
              | {
                  type: "CALENDAR";
                  date: string;
                  title: string;
                }
              | {
                  type: "CUSTOM";
                  html: string;
                  pager: boolean;
                  device: "DESKTOP" | "ANY";
                }
            ))
          | undefined;
      };
      revision: string;
    };
  };
  GetPreviewAppViews: {
    method: "GET";
    endpoint: "preview/app/views";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      views: {
        [viewName: string]:
          | ({
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
              | {
                  type: "CALENDAR";
                  date: string;
                  title: string;
                }
              | {
                  type: "CUSTOM";
                  html: string;
                  pager: boolean;
                  device: "DESKTOP" | "ANY";
                }
            ))
          | undefined;
      };
      revision: string;
    };
  };
  PutPreviewAppViews: {
    method: "PUT";
    endpoint: "preview/app/views";
    requestParameters: {
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
          | {
              type: "CALENDAR";
              date?: string;
              title?: string;
            }
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
    responseProperties: {
      revision: string;
      views: {
        [viewName: string]: {
          id: string;
        };
      };
    };
  };
};

export { ViewsRestApiMap };
