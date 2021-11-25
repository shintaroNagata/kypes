import { Methods } from "./http";

type RestApiMapEntryFormat = {
  method: Methods;
  endpoint: string;
  requestParameters: unknown;
  responseProperties: unknown;
};

type ExtractRestApiMapEntry<
  Entry extends RestApiMapEntryFormat,
  Endpoint extends string,
  Method extends Methods
> = Entry extends RestApiMapEntryFormat
  ? Endpoint extends Entry["endpoint"]
    ? Method extends Entry["method"]
      ? Entry
      : never
    : never
  : never;

export { ExtractRestApiMapEntry };
