type AclRestApiMap = {
  GetAppAcl: {
    method: "GET";
    endpoint: "app/acl";
    requestParameters: { app: string | number };
    responseProperties: {
      rights: Array<
        {
          appEditable: boolean;
          recordViewable: boolean;
          recordAddable: boolean;
          recordEditable: boolean;
          recordDeletable: boolean;
          recordImportable: boolean;
          recordExportable: boolean;
          includeSubs: boolean;
        } & (
          | {
              entity: {
                type: "USER" | "GROUP" | "ORGANIZATION";
                code: string;
              };
            }
          | {
              entity: {
                type: "CREATOR";
                code: null;
              };
            }
        )
      >;
      revision: string;
    };
  };
  GetPreviewAppAcl: {
    method: "GET";
    endpoint: "preview/app/acl";
    requestParameters: { app: string | number };
    responseProperties: {
      rights: Array<
        {
          appEditable: boolean;
          recordViewable: boolean;
          recordAddable: boolean;
          recordEditable: boolean;
          recordDeletable: boolean;
          recordImportable: boolean;
          recordExportable: boolean;
          includeSubs: boolean;
        } & (
          | {
              entity: {
                type: "USER" | "GROUP" | "ORGANIZATION";
                code: string;
              };
            }
          | {
              entity: {
                type: "CREATOR";
                code: null;
              };
            }
        )
      >;
      revision: string;
    };
  };
  PutPreviewAppAcl: {
    method: "PUT";
    endpoint: "preview/app/acl";
    requestParameters: {
      app: string | number;
      revision?: string;
      rights: Array<
        {
          appEditable?: boolean;
          recordViewable?: boolean;
          recordAddable?: boolean;
          recordEditable?: boolean;
          recordDeletable?: boolean;
          recordImportable?: boolean;
          recordExportable?: boolean;
          includeSubs?: boolean;
        } & (
          | {
              entity: {
                type: "USER" | "GROUP" | "ORGANIZATION";
                code: string;
              };
            }
          | {
              entity: {
                type: "CREATOR";
              };
            }
        )
      >;
    };
    responseProperties: { revision: string };
  };
  GetRecordAcl: {
    method: "GET";
    endpoint: "record/acl";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      rights: Array<{
        filterCond: string;
        entities: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          viewable: boolean;
          editable: boolean;
          deletable: boolean;
          includeSubs: boolean;
        }>;
      }>;
      revision: string;
    };
  };
  GetPreviewRecordAcl: {
    method: "GET";
    endpoint: "preview/record/acl";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      rights: Array<{
        filterCond: string;
        entities: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          viewable: boolean;
          editable: boolean;
          deletable: boolean;
          includeSubs: boolean;
        }>;
      }>;
      revision: string;
    };
  };
  PutPreviewRecordAcl: {
    method: "PUT";
    endpoint: "preview/record/acl";
    requestParameters: {
      app: string | number;
      rights: Array<{
        filterCond?: string;
        entities: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          viewable?: boolean;
          editable?: boolean;
          deletable?: boolean;
          includeSubs?: boolean;
        }>;
      }>;
      revision?: string | number;
    };
    responseProperties: {
      revision: string;
    };
  };
  GetRecordAclEvaluate: {
    method: "GET";
    endpoint: "record/acl/evaluate";
    requestParameters: {
      app: string | number;
      ids: Array<string | number>;
    };
    responseProperties: {
      rights: Array<{
        id: string;
        record: {
          viewable: boolean;
          editable: boolean;
          deletable: boolean;
          fields: {
            [k: string]:
              | {
                  viewable: boolean;
                  editable: boolean;
                }
              | undefined;
          };
        };
      }>;
    };
  };
  GetFieldAcl: {
    method: "GET";
    endpoint: "field/acl";
    requestParameters: { app: string | number };
    responseProperties: {
      rights: Array<{
        code: string;
        entities: Array<{
          accessibility: "READ" | "WRITE" | "NONE";
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          includeSubs: boolean;
        }>;
      }>;
      revision: string;
    };
  };
  GetPreviewFieldAcl: {
    method: "GET";
    endpoint: "preview/field/acl";
    requestParameters: { app: string | number };
    responseProperties: {
      rights: Array<{
        code: string;
        entities: Array<{
          accessibility: "READ" | "WRITE" | "NONE";
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          includeSubs: boolean;
        }>;
      }>;
      revision: string;
    };
  };
  PutPreviewFieldAcl: {
    method: "PUT";
    endpoint: "preview/field/acl";
    requestParameters: {
      app: string | number;
      rights: Array<{
        code: string;
        entities: Array<{
          accessibility: "READ" | "WRITE" | "NONE";
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          includeSubs?: boolean;
        }>;
      }>;
      revision?: string | number;
    };
    responseProperties: {
      revision: string;
    };
  };
};

export { AclRestApiMap };
