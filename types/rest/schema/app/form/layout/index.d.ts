import type { LayoutForGet, LayoutForPut } from "./types";

type AppFormLayoutSchema = {
  GET: {
    request: { app: string | number };
    response: {
      layout: LayoutForGet;
      revision: string;
    };
  };
};

type PreviewAppFormLayoutSchema = {
  GET: {
    request: {
      app: string | number;
    };
    response: {
      layout: LayoutForGet;
      revision: string;
    };
  };
  PUT: {
    request: {
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

export type { Schema };
