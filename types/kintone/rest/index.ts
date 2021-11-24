import { RecordRestApiMap } from "./record";
import { ExtractRestApiMapEntry, Methods } from "./types";

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

type EnableMethods<Endpoint extends Endpoints> = ExtractRestApiMapEntry<
  RestApiMapEntries,
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
