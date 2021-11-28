import { Methods } from "./http";
import { RecordRestApiMap } from "./record";
import { BulkRequestRestApiMap } from "./bulkRequest";
import { AppRestApiMap } from "./app";
import { SpaceRestApiMap } from "./space";

type RestApiMapEntryFormat = {
  method: Methods;
  endpoint: string;
  requestParameters: Record<string, unknown>;
  responseProperties: Record<string, any>;
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

type RequestParameters<
  Endpoint extends string,
  Method extends Methods
> = Endpoint extends Endpoints
  ? ExtractRestApiMapEntry<
      RestApiMapEntries,
      Endpoint,
      Method
    >["requestParameters"]
  : RestApiMapEntryFormat["requestParameters"];

type ResponseProperties<
  Endpoint extends string,
  Method extends Methods
> = Endpoint extends Endpoints
  ? ExtractRestApiMapEntry<
      RestApiMapEntries,
      Endpoint,
      Method
    >["responseProperties"]
  : RestApiMapEntryFormat["responseProperties"];

export {
  ExtractRestApiMapEntry,
  Endpoints,
  EnableMethods,
  RequestParameters,
  ResponseProperties,
};
