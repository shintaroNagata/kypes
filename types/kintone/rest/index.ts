import {
  Methods,
  PathFor,
  UrlFor,
  EndpointFromPath,
  EndpointFromUrl,
} from "./http";
import { ExtractRestApiMapEntry } from "./types";
import { RecordRestApiMap } from "./record";
import { BulkRequestRestApiMap } from "./bulkRequest";
import { AppRestApiMap } from "./app";
import { SpaceRestApiMap } from "./space";

type RestApiMap = RecordRestApiMap &
  BulkRequestRestApiMap &
  AppRestApiMap &
  SpaceRestApiMap;

type RestApiMapEntries = RestApiMap[keyof RestApiMap];
type Endpoints = RestApiMapEntries["endpoint"];

type Paths = PathFor<Endpoints>;
type Urls = UrlFor<Endpoints>;

type EnableMethods<Endpoint extends Endpoints> = ExtractRestApiMapEntry<
  RestApiMapEntries,
  Endpoint,
  Methods
>["method"];

type RequestParameters<
  Endpoint extends Endpoints,
  Method extends Methods
> = ExtractRestApiMapEntry<
  RestApiMapEntries,
  Endpoint,
  Method
>["requestParameters"];

type ResponseProperties<
  Endpoint extends Endpoints,
  Method extends Methods
> = ExtractRestApiMapEntry<
  RestApiMapEntries,
  Endpoint,
  Method
>["responseProperties"];

export {
  Paths,
  Urls,
  EnableMethods,
  EndpointFromPath,
  EndpointFromUrl,
  RequestParameters,
  ResponseProperties,
};
