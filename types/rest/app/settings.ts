type SettingsRestApiMap = {
  GetAppSettings: {
    method: "GET";
    endpoint: "app/settings";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
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
  GetPreviewAppSettings: {
    method: "GET";
    endpoint: "preview/app/settings";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
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
  PutPreviewAppSettings: {
    method: "PUT";
    endpoint: "preview/app/settings";
    requestParameters: {
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
    responseProperties: {
      revision: string;
    };
  };
};

export { SettingsRestApiMap };
