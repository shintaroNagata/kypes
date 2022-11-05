import type { Endpoints, PathFor, UrlFor, WithQuery } from "./http";
import type { FindApi, EnableMethods } from "./schema";

type Request<
  Endpoint extends Endpoints,
  Method extends EnableMethods<Endpoint>
> = FindApi<Endpoint, Method>["request"];

type Response<
  Endpoint extends Endpoints,
  Method extends EnableMethods<Endpoint>
> = FindApi<Endpoint, Method>["response"];

export type {
  Endpoints,
  PathFor,
  UrlFor,
  WithQuery,
  EnableMethods,
  Request,
  Response,
};
