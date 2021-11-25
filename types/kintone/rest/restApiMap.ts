import { Methods } from "./http";
import { RecordRestApiMap } from "./record";
import { BulkRequestRestApiMap } from "./bulkRequest";
import { AppRestApiMap } from "./app";
import { SpaceRestApiMap } from "./space";

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

type RestApiMap = RecordRestApiMap &
  BulkRequestRestApiMap &
  AppRestApiMap &
  SpaceRestApiMap;

type RestApiMapEntries = RestApiMap[keyof RestApiMap];
type Endpoints = RestApiMapEntries["endpoint"];

type EnableMethodsOf<Endpoint extends string> = ExtractRestApiMapEntry<
  RestApiMapEntries,
  Endpoint,
  Methods
>["method"];

type RequestParametersOf<
  Endpoint extends string,
  Method extends Methods
> = ExtractRestApiMapEntry<
  RestApiMapEntries,
  Endpoint,
  Method
>["requestParameters"];

type ResponsePropertiesOf<
  Endpoint extends string,
  Method extends Methods
> = ExtractRestApiMapEntry<
  RestApiMapEntries,
  Endpoint,
  Method
>["responseProperties"];

export {
  ExtractRestApiMapEntry,
  Endpoints,
  EnableMethodsOf,
  RequestParametersOf,
  ResponsePropertiesOf,
};
