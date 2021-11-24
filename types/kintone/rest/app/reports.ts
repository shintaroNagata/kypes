type ReportsRestApiMap = {
  GetAppReports: {
    method: "GET";
    endpoint: "app/reports";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppReports: {
    method: "GET";
    endpoint: "preview/app/reports";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppReports: {
    method: "PUT";
    endpoint: "preview/app/reports";
    requestParameters: any;
    responseProperties: any;
  };
};

export { ReportsRestApiMap };
