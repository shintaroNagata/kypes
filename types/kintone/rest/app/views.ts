type ViewsRestApiMap = {
  GetAppViews: {
    method: "GET";
    endpoint: "app/views";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppViews: {
    method: "GET";
    endpoint: "preview/app/views";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppViews: {
    method: "PUT";
    endpoint: "preview/app/views";
    requestParameters: any;
    responseProperties: any;
  };
};

export { ViewsRestApiMap };
