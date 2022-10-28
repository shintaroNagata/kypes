import { PropertiesForGet, PropertiesForPost, PropertiesForPut } from "./types";

type AppFormFieldsSchema = {
  GET: {
    parameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      properties: PropertiesForGet;
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
      properties: PropertiesForGet;
      revision: string;
    };
  };
  POST: {
    parameters: {
      app: string | number;
      properties: PropertiesForPost;
      revision?: string | number;
    };
    response: { revision: string };
  };
  PUT: {
    parameters: {
      app: string | number;
      properties: PropertiesForPut;
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
