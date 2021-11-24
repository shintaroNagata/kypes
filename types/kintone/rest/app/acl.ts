type AclRestApiMap = {
  GetAppAcl: {
    method: "GET";
    endpoint: "app/acl";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppAcl: {
    method: "GET";
    endpoint: "preview/app/acl";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppAcl: {
    method: "PUT";
    endpoint: "preview/app/acl";
    requestParameters: any;
    responseProperties: any;
  };
  GetRecordAcl: {
    method: "GET";
    endpoint: "record/acl";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewRecordAcl: {
    method: "GET";
    endpoint: "preview/record/acl";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewRecordAcl: {
    method: "PUT";
    endpoint: "preview/record/acl";
    requestParameters: any;
    responseProperties: any;
  };
  GetRecordAclEvaluate: {
    method: "GET";
    endpoint: "record/acl/evaluate";
    requestParameters: any;
    responseProperties: any;
  };
  GetFieldAcl: {
    method: "GET";
    endpoint: "field/acl";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewFieldAcl: {
    method: "GET";
    endpoint: "preview/field/acl";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewFieldAcl: {
    method: "PUT";
    endpoint: "preview/field/acl";
    requestParameters: any;
    responseProperties: any;
  };
};

export { AclRestApiMap };
