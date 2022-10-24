import { Methods } from "./http";
import { RecordRestApiMap } from "./record";
import { BulkRequestRestApiMap } from "./bulkRequest";
import { AppRestApiMap } from "./app";
import { SpaceRestApiMap } from "./space";

type RestApiMapEntryFormat = {
  method: Methods;
  endpoint: string;
  parameters: Record<string, unknown>;
  response: Record<string, any>;
};
type RestApiMap = RecordRestApiMap &
  BulkRequestRestApiMap &
  AppRestApiMap &
  SpaceRestApiMap;
type RestApiMapEntries = RestApiMap[keyof RestApiMap];
type Endpoints = RestApiMapEntries["endpoint"];

type ExtractRestApiMapEntry<
  Entry extends RestApiMapEntryFormat,
  Endpoint extends Endpoints,
  Method extends Methods
> = Entry extends RestApiMapEntryFormat
  ? Endpoint extends Entry["endpoint"]
    ? Method extends Entry["method"]
      ? Entry
      : never
    : never
  : never;

type EnableMethods<Endpoint extends string> = Endpoint extends Endpoints
  ? ExtractRestApiMapEntry<RestApiMapEntries, Endpoint, Methods>["method"]
  : RestApiMapEntryFormat["method"];

type Parameters<
  Endpoint extends string,
  Method extends Methods
> = Endpoint extends Endpoints
  ? ExtractRestApiMapEntry<RestApiMapEntries, Endpoint, Method>["parameters"]
  : RestApiMapEntryFormat["parameters"];

type Response<
  Endpoint extends string,
  Method extends Methods
> = Endpoint extends Endpoints
  ? ExtractRestApiMapEntry<RestApiMapEntries, Endpoint, Method>["response"]
  : RestApiMapEntryFormat["response"];

export {
  ExtractRestApiMapEntry,
  Endpoints,
  EnableMethods,
  Parameters,
  Response,
};
