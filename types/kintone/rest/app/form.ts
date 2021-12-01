type FormRestApiMap = {
  GetAppFormFields: {
    method: "GET";
    endpoint: "app/form/fields";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      properties: {
        [fieldCode: string]:
          | {
              type: string;
              code: string;
              label: string;
              [propertyName: string]: any;
            }
          | undefined;
      };
      revision: string;
    };
  };
  GetPreviewAppFormFields: {
    method: "GET";
    endpoint: "preview/app/form/fields";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      properties: {
        [fieldCode: string]:
          | {
              type: string;
              code: string;
              label: string;
              [propertyName: string]: any;
            }
          | undefined;
      };
      revision: string;
    };
  };
  PostPreviewAppFormFields: {
    method: "POST";
    endpoint: "preview/app/form/fields";
    requestParameters: {
      app: string | number;
      properties: {
        [fieldCode: string]: {
          type: string;
          code: string;
          label?: string;
          [propertyName: string]: any;
        };
      };
      revision?: string | number;
    };
    responseProperties: {
      revision: string;
    };
  };
  PutPreviewAppFormFields: {
    method: "PUT";
    endpoint: "preview/app/form/fields";
    requestParameters: {
      app: string | number;
      properties: {
        [fieldCode: string]: {
          type: string;
          code: string;
          label?: string;
          [propertyName: string]: any;
        };
      };
      revision?: string | number;
    };
    responseProperties: {
      revision: string;
    };
  };
  DeletePreviewAppFormFields: {
    method: "DELETE";
    endpoint: "preview/app/form/fields";
    requestParameters: {
      app: string | number;
      fields: string[];
      revision?: string | number;
    };
    responseProperties: {
      revision?: string;
    };
  };
  GetAppFormLayout: {
    method: "GET";
    endpoint: "app/form/layout";
    requestParameters: {
      app: string | number;
    };
    responseProperties: {
      layout: Array<
        | {
            type: "ROW";
            fields: Array<{
              type: string;
              code?: string;
              [propertyName: string]: any;
            }>;
          }
        | {
            type: "SUBTABLE";
            code: string;
            fields: Array<{
              type: string;
              code?: string;
              [propertyName: string]: any;
            }>;
          }
        | {
            type: "GROUP";
            code: string;
            layout: Array<{
              type: "ROW";
              fields: Array<{
                type: string;
                code?: string;
                [propertyName: string]: any;
              }>;
            }>;
          }
      >;
      revision: string;
    };
  };
  GetPreviewAppFormLayout: {
    method: "GET";
    endpoint: "preview/app/form/layout";
    requestParameters: {
      app: string | number;
    };
    responseProperties: {
      layout: Array<
        | {
            type: "ROW";
            fields: Array<{
              type: string;
              code?: string;
              [propertyName: string]: any;
            }>;
          }
        | {
            type: "SUBTABLE";
            code: string;
            fields: Array<{
              type: string;
              code?: string;
              [propertyName: string]: any;
            }>;
          }
        | {
            type: "GROUP";
            code: string;
            layout: Array<{
              type: "ROW";
              fields: Array<{
                type: string;
                code?: string;
                [propertyName: string]: any;
              }>;
            }>;
          }
      >;
      revision: string;
    };
  };
  PutPreviewAppFormLayout: {
    method: "PUT";
    endpoint: "preview/app/form/layout";
    requestParameters: {
      app: string | number;
      layout: Array<
        | {
            type: "ROW";
            fields?: Array<{
              type: string;
              code?: string;
              [propertyName: string]: any;
            }>;
          }
        | {
            type: "SUBTABLE";
            code: string;
            fields?: Array<{
              type: string;
              code?: string;
              [propertyName: string]: any;
            }>;
          }
        | {
            type: "GROUP";
            code: string;
            layout?: Array<{
              type: "ROW";
              fields?: Array<{
                type: string;
                code?: string;
                [propertyName: string]: any;
              }>;
            }>;
          }
      >;
      revision?: string | number;
    };
    responseProperties: {
      revision: string;
    };
  };
};

export { FormRestApiMap };
