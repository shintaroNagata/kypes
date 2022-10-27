import { Endpoints, PathFor, UrlFor, WithQuery } from "./http";
import { FindApi, EnableMethods } from "./schema";

type Parameters<
  Endpoint extends Endpoints,
  Method extends EnableMethods<Endpoint>
> = FindApi<Endpoint, Method>["parameters"];

type Response<
  Endpoint extends Endpoints,
  Method extends EnableMethods<Endpoint>
> = FindApi<Endpoint, Method>["response"];

export {
  Endpoints,
  PathFor,
  UrlFor,
  WithQuery,
  EnableMethods,
  Parameters,
  Response,
};
