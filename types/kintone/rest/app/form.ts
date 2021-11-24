type FormRestApiMap = {
  GetAppFormFields: {
    method: "GET";
    endpoint: "app/form/fields";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppFormFields: {
    method: "GET";
    endpoint: "preview/app/form/fields";
    requestParameters: any;
    responseProperties: any;
  };
  PostPreviewAppFormFields: {
    method: "POST";
    endpoint: "preview/app/form/fields";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppFormFields: {
    method: "PUT";
    endpoint: "preview/app/form/fields";
    requestParameters: any;
    responseProperties: any;
  };
  DeletePreviewAppFormFields: {
    method: "DELETE";
    endpoint: "preview/app/form/fields";
    requestParameters: any;
    responseProperties: any;
  };
  GetAppFormLayout: {
    method: "GET";
    endpoint: "app/form/layout";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppFormLayout: {
    method: "GET";
    endpoint: "preview/app/form/layout";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppFormLayout: {
    method: "PUT";
    endpoint: "preview/app/form/layout";
    requestParameters: any;
    responseProperties: any;
  };
};

export { FormRestApiMap };
