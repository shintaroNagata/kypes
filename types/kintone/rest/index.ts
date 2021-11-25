import { Methods, PathFor, UrlFor, EndpointOf } from "./http";
import {
  Endpoints,
  EnableMethodsOf,
  RequestParametersOf,
  ResponsePropertiesOf,
} from "./restApiMap";

type Paths = PathFor<Endpoints>;
type Urls = UrlFor<Endpoints>;

type EnableMethods<PathOrUrl extends Paths | Urls> = EnableMethodsOf<
  EndpointOf<PathOrUrl>
>;

type RequestParameters<
  PathOrUrl extends Paths | Urls,
  Method extends Methods
> = RequestParametersOf<EndpointOf<PathOrUrl>, Method>;

type ResponseProperties<
  PathOrUrl extends Paths | Urls,
  Method extends Methods
> = ResponsePropertiesOf<EndpointOf<PathOrUrl>, Method>;

export { Paths, Urls, EnableMethods, RequestParameters, ResponseProperties };
