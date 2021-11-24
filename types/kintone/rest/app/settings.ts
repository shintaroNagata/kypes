type SettingsRestApiMap = {
  GetAppSettings: {
    method: "GET";
    endpoint: "app/settings";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppSettings: {
    method: "GET";
    endpoint: "preview/app/settings";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppSettings: {
    method: "PUT";
    endpoint: "preview/app/settings";
    requestParameters: any;
    responseProperties: any;
  };
};

export { SettingsRestApiMap };
