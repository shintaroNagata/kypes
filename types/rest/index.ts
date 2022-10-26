import {
  Methods,
  PathFor,
  UrlFor,
  WithQuery,
  EndpointOf,
  Endpoints,
} from "./http";
import {
  EnableMethods as EnableMethodsInternal,
  Parameters as ParametersInternal,
  Response as ResponseInternal,
} from "./temporal";

type Paths = PathFor<Endpoints>;
type Urls = UrlFor<Endpoints>;
type UrlFromPath<Path extends string> = Path extends PathFor<infer Endpoint>
  ? UrlFor<Endpoint>
  : string;

type EnableMethods<PathOrUrl extends string> = EnableMethodsInternal<
  EndpointOf<PathOrUrl>
>;

type Parameters<
  PathOrUrl extends string,
  Method extends Methods
> = ParametersInternal<EndpointOf<PathOrUrl>, Method>;

type Response<
  PathOrUrl extends string,
  Method extends Methods
> = ResponseInternal<EndpointOf<PathOrUrl>, Method>;

export {
  Paths,
  Urls,
  UrlFromPath,
  WithQuery,
  EnableMethods,
  Parameters,
  Response,
};
