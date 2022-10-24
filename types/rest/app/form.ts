import { FieldsMap, InSubtableFieldsMap, Subtable } from "../../field";

type FieldList = FieldsMap[keyof FieldsMap]["rest"]["form"];
type InSubtableFieldList =
  InSubtableFieldsMap[keyof InSubtableFieldsMap]["rest"]["form"];

type FormRestApiMap = {
  GetAppFormFields: {
    method: "GET";
    endpoint: "app/form/fields";
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      properties: {
        [fieldCode: string]:
          | FieldList["property"]["get"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["property"]["get"];
            }>["rest"]["form"]["property"]["get"];
      };
      revision: string;
    };
  };
  GetPreviewAppFormFields: {
    method: "GET";
    endpoint: "preview/app/form/fields";
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      properties: {
        [fieldCode: string]:
          | FieldList["property"]["get"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["property"]["get"];
            }>["rest"]["form"]["property"]["get"];
      };
      revision: string;
    };
  };
  PostPreviewAppFormFields: {
    method: "POST";
    endpoint: "preview/app/form/fields";
    parameters: {
      app: string | number;
      properties: {
        [fieldCode: string]:
          | FieldList["property"]["add"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["property"]["add"];
            }>["rest"]["form"]["property"]["add"];
      };
      revision?: string | number;
    };
    response: {
      revision: string;
    };
  };
  PutPreviewAppFormFields: {
    method: "PUT";
    endpoint: "preview/app/form/fields";
    parameters: {
      app: string | number;
      properties: {
        [fieldCode: string]:
          | FieldList["property"]["update"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["property"]["update"];
            }>["rest"]["form"]["property"]["update"];
      };
      revision?: string | number;
    };
    response: {
      revision: string;
    };
  };
  DeletePreviewAppFormFields: {
    method: "DELETE";
    endpoint: "preview/app/form/fields";
    parameters: {
      app: string | number;
      fields: string[];
      revision?: string | number;
    };
    response: {
      revision?: string;
    };
  };
  GetAppFormLayout: {
    method: "GET";
    endpoint: "app/form/layout";
    parameters: {
      app: string | number;
    };
    response: {
      layout: Array<
        | {
            type: "ROW";
            fields: Array<FieldList["layout"]["get"]>;
          }
        | {
            type: "SUBTABLE";
            code: string;
            fields: Array<InSubtableFieldList["layout"]["get"]>;
          }
        | {
            type: "GROUP";
            code: string;
            layout: Array<{
              type: "ROW";
              fields: Array<FieldList["layout"]["get"]>;
            }>;
          }
      >;
      revision: string;
    };
  };
  GetPreviewAppFormLayout: {
    method: "GET";
    endpoint: "preview/app/form/layout";
    parameters: {
      app: string | number;
    };
    response: {
      layout: Array<
        | {
            type: "ROW";
            fields: Array<FieldList["layout"]["get"]>;
          }
        | {
            type: "SUBTABLE";
            code: string;
            fields: Array<InSubtableFieldList["layout"]["get"]>;
          }
        | {
            type: "GROUP";
            code: string;
            layout: Array<{
              type: "ROW";
              fields: Array<FieldList["layout"]["get"]>;
            }>;
          }
      >;
      revision: string;
    };
  };
  PutPreviewAppFormLayout: {
    method: "PUT";
    endpoint: "preview/app/form/layout";
    parameters: {
      app: string | number;
      layout: Array<
        | {
            type: "ROW";
            fields?: Array<FieldList["layout"]["update"]>;
          }
        | {
            type: "SUBTABLE";
            code: string;
            fields?: Array<InSubtableFieldList["layout"]["update"]>;
          }
        | {
            type: "GROUP";
            code: string;
            layout?: Array<{
              type: "ROW";
              fields?: Array<FieldList["layout"]["update"]>;
            }>;
          }
      >;
      revision?: string | number;
    };
    response: { revision: string };
  };
};

export { FormRestApiMap };
