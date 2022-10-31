type AppSettingsSchema = {
  GET: {
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      name: string;
      description: string;
      icon:
        | {
            type: "FILE";
            file: {
              contentType: string;
              fileKey: string;
              name: string;
              size: string;
            };
          }
        | {
            type: "PRESET";
            key: string;
          };
      theme:
        | "WHITE"
        | "RED"
        | "BLUE"
        | "GREEN"
        | "YELLOW"
        | "BLACK"
        | "CLIPBOARD"
        | "BINDER"
        | "PENCIL"
        | "CLIPS";
      revision: string;
    };
  };
};
type PreviewAppSettingsSchema = {
  GET: {
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      name: string;
      description: string;
      icon:
        | {
            type: "FILE";
            file: {
              contentType: string;
              fileKey: string;
              name: string;
              size: string;
            };
          }
        | {
            type: "PRESET";
            key: string;
          };
      theme:
        | "WHITE"
        | "RED"
        | "BLUE"
        | "GREEN"
        | "YELLOW"
        | "BLACK"
        | "CLIPBOARD"
        | "BINDER"
        | "PENCIL"
        | "CLIPS";
      revision: string;
    };
  };
  PUT: {
    parameters: {
      app: string | number;
      name?: string;
      description?: string;
      icon?:
        | {
            type: "FILE";
            file: {
              fileKey: string;
            };
          }
        | {
            type: "PRESET";
            key: string;
          };
      theme?:
        | "WHITE"
        | "RED"
        | "BLUE"
        | "GREEN"
        | "YELLOW"
        | "BLACK"
        | "CLIPBOARD"
        | "BINDER"
        | "PENCIL"
        | "CLIPS";
      revision?: string | number;
    };
    response: {
      revision: string;
    };
  };
};

type Schema = {
  "app/settings": AppSettingsSchema;
  "preview/app/settings": PreviewAppSettingsSchema;
};

export type { Schema };
