import { RecordRestApiMap } from "./record";
import { Methods } from "./types";

type RestApiMap = RecordRestApiMap;

type RestApiMapEntries = RestApiMap[keyof RestApiMap];
type Endpoints = RestApiMapEntries["endpoint"];

type PathFor<Endpoint extends Endpoints> = `/k/v1/${Endpoint}`;
type Domain = "cybozu.com" | "kintone.com" | "cybozu.cn";
type UrlFor<Endpoint extends Endpoints> =
  | `https://${string}.${Domain}/k/v1/${Endpoint}.json`
  | `https://${string}.${Domain}/k/guest/${number}/v1/${Endpoint}.json`;

type Paths = PathFor<Endpoints>;
type Urls = UrlFor<Endpoints>;

type ExtractEntryInternal<
  RestApiMapEntry extends RestApiMapEntries,
  Endpoint extends Endpoints,
  Method extends Methods
> = RestApiMapEntry extends RestApiMapEntries
  ? Endpoint extends RestApiMapEntry["endpoint"]
    ? Method extends RestApiMapEntry["method"]
      ? RestApiMapEntry
      : never
    : never
  : never;

type ExtractEntry<
  Endpoint extends Endpoints,
  Method extends Methods
> = ExtractEntryInternal<RestApiMapEntries, Endpoint, Method>;

type EnableMethods<Endpoint extends Endpoints> = ExtractEntry<
  Endpoint,
  Methods
>["method"];

type EndpointFromPath<Path extends PathFor<Endpoints>> = Path extends PathFor<
  infer Endpoint
>
  ? Endpoint
  : never;

type EndpointFromUrl<Url extends UrlFor<Endpoints>> = Url extends UrlFor<
  infer Endpoint
>
  ? Endpoint
  : never;

type RequestParameters<
  Endpoint extends Endpoints,
  Method extends Methods
> = ExtractEntry<Endpoint, Method>["requestParameters"];

type ResponseProperties<
  Endpoint extends Endpoints,
  Method extends Methods
> = ExtractEntry<Endpoint, Method>["responseProperties"];

export {
  Paths,
  Urls,
  EnableMethods,
  EndpointFromPath,
  EndpointFromUrl,
  RequestParameters,
  ResponseProperties,
};
