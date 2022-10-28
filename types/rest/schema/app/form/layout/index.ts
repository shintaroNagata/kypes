import { LayoutForGet, LayoutForPut } from "./types";

type AppFormLayoutSchema = {
  GET: {
    parameters: { app: string | number };
    response: {
      layout: LayoutForGet;
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
      layout: LayoutForGet;
      revision: string;
    };
  };
  PUT: {
    parameters: {
      app: string | number;
      layout: LayoutForPut;
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
