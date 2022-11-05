import type {
  PropertiesForGet,
  PropertiesForPost,
  PropertiesForPut,
} from "./types";

type AppFormFieldsSchema = {
  GET: {
    request: {
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
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      properties: PropertiesForGet;
      revision: string;
    };
  };
  POST: {
    request: {
      app: string | number;
      properties: PropertiesForPost;
      revision?: string | number;
    };
    response: { revision: string };
  };
  PUT: {
    request: {
      app: string | number;
      properties: PropertiesForPut;
      revision?: string | number;
    };
    response: { revision: string };
  };
  DELETE: {
    request: {
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

export type { Schema };
