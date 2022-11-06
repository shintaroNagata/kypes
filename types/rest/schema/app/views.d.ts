type AppViewsSchema = {
  GET: {
    request: {
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
};
type PreviewAppViewsSchema = {
  GET: {
    request: {
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
  PUT: {
    request: {
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

type Schema = {
  "app/views": AppViewsSchema;
  "preview/app/views": PreviewAppViewsSchema;
};

export type { Schema };
