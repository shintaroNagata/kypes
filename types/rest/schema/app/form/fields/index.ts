import { FieldsMap, InSubtableFieldsMap, Subtable } from "../../../../../field";

type FieldList = FieldsMap[keyof FieldsMap]["rest"]["form"];
type InSubtableFieldList =
  InSubtableFieldsMap[keyof InSubtableFieldsMap]["rest"]["form"];

type AppFormFieldsSchema = {
  GET: {
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
};

type PreviewAppFormFieldsSchema = {
  GET: {
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
  POST: {
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
    response: { revision: string };
  };
  PUT: {
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
    response: { revision: string };
  };
  DELETE: {
    parameters: {
      app: string | number;
      fields: string[];
      revision?: string | number;
    };
    response: { revision?: string };
  };
};

type Schema = {
  "app/form/fields": AppFormFieldsSchema;
  "preview/app/form/fields": PreviewAppFormFieldsSchema;
};

export { Schema };
