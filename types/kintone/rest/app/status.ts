type StatusRestApiMap = {
  GetAppStatus: {
    method: "GET";
    endpoint: "app/status";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppStatus: {
    method: "GET";
    endpoint: "preview/app/status";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppStatus: {
    method: "PUT";
    endpoint: "preview/app/status";
    requestParameters: any;
    responseProperties: any;
  };
};

export { StatusRestApiMap };
