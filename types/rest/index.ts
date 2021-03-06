import { Methods, PathFor, UrlFor, WithQuery, EndpointOf } from "./http";
import {
  Endpoints,
  EnableMethods as EnableMethodsInternal,
  RequestParameters as RequestParametersInternal,
  ResponseProperties as ResponsePropertiesInternal,
} from "./restApiMap";

type Paths = PathFor<Endpoints>;
type Urls = UrlFor<Endpoints>;
type UrlFromPath<Path extends string> = Path extends PathFor<infer Endpoint>
  ? UrlFor<Endpoint>
  : string;

type EnableMethods<PathOrUrl extends string> = EnableMethodsInternal<
  EndpointOf<PathOrUrl>
>;

type RequestParameters<
  PathOrUrl extends string,
  Method extends Methods
> = RequestParametersInternal<EndpointOf<PathOrUrl>, Method>;

type ResponseProperties<
  PathOrUrl extends string,
  Method extends Methods
> = ResponsePropertiesInternal<EndpointOf<PathOrUrl>, Method>;

export {
  Paths,
  Urls,
  UrlFromPath,
  WithQuery,
  EnableMethods,
  RequestParameters,
  ResponseProperties,
};
