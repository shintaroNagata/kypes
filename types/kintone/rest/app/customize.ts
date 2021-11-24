type CustomizeRestApiMap = {
  GetAppCustomize: {
    method: "GET";
    endpoint: "app/customize";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppCustomize: {
    method: "GET";
    endpoint: "preview/app/customize";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppCustomize: {
    method: "PUT";
    endpoint: "preview/app/customize";
    requestParameters: any;
    responseProperties: any;
  };
};

export { CustomizeRestApiMap };
