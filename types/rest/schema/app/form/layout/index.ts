import { FieldsMap, InSubtableFieldsMap, Subtable } from "../../../../../field";

type FieldList = FieldsMap[keyof FieldsMap]["rest"]["form"];
type InSubtableFieldList =
  InSubtableFieldsMap[keyof InSubtableFieldsMap]["rest"]["form"];

type AppFormLayoutSchema = {
  GET: {
    parameters: { app: string | number };
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
};

type PreviewAppFormLayoutSchema = {
  GET: {
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
  PUT: {
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

type Schema = {
  "app/form/layout": AppFormLayoutSchema;
  "preview/app/form/layout": PreviewAppFormLayoutSchema;
};

export { Schema };
