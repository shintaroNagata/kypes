type AppAclSchema = {
  GET: {
    request: { app: string | number };
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
};
type PreviewAppAclSchema = {
  GET: {
    request: { app: string | number };
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
  PUT: {
    request: {
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
};
type RecordAclSchema = {
  GET: {
    request: {
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
};
type PreviewRecordAclSchema = {
  GET: {
    request: {
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
  PUT: {
    request: {
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
};
type FieldAclSchema = {
  GET: {
    request: { app: string | number };
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
};
type PreviewFieldAclSchema = {
  GET: {
    request: { app: string | number };
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
  PUT: {
    request: {
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
type RecordAclEvaluateSchema = {
  GET: {
    request: {
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
};

type Schema = {
  "app/acl": AppAclSchema;
  "preview/app/acl": PreviewAppAclSchema;
  "record/acl": RecordAclSchema;
  "preview/record/acl": PreviewRecordAclSchema;
  "field/acl": FieldAclSchema;
  "preview/field/acl": PreviewFieldAclSchema;
  "record/acl/evaluate": RecordAclEvaluateSchema;
};

export type { Schema };
