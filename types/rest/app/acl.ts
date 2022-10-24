type AclRestApiMap = {
  GetAppAcl: {
    method: "GET";
    endpoint: "app/acl";
    parameters: { app: string | number };
    response: {
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
    parameters: { app: string | number };
    response: {
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
    parameters: {
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
    response: { revision: string };
  };
  GetRecordAcl: {
    method: "GET";
    endpoint: "record/acl";
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
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
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
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
    parameters: {
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
    response: {
      revision: string;
    };
  };
  GetRecordAclEvaluate: {
    method: "GET";
    endpoint: "record/acl/evaluate";
    parameters: {
      app: string | number;
      ids: Array<string | number>;
    };
    response: {
      rights: Array<{
        id: string;
        record: {
          viewable: boolean;
          editable: boolean;
          deletable: boolean;
          fields: {
            [fieldCode: string]: { viewable: boolean; editable: boolean };
          };
        };
      }>;
    };
  };
  GetFieldAcl: {
    method: "GET";
    endpoint: "field/acl";
    parameters: { app: string | number };
    response: {
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
    parameters: { app: string | number };
    response: {
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
    parameters: {
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
    response: {
      revision: string;
    };
  };
};

export { AclRestApiMap };
