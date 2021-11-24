type ActionsRestApiMap = {
  GetAppActions: {
    method: "GET";
    endpoint: "app/actions";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppActions: {
    method: "GET";
    endpoint: "preview/app/actions";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppActions: {
    method: "PUT";
    endpoint: "preview/app/actions";
    requestParameters: any;
    responseProperties: any;
  };
};

export { ActionsRestApiMap };
