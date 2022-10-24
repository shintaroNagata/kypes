import { Endpoints } from "./http";
import { FindApi, FindEndpoint } from "./schema";

type EnableMethods<Endpoint extends Endpoints> = keyof FindEndpoint<Endpoint>;

type Parameters<
  Endpoint extends Endpoints,
  Method extends EnableMethods<Endpoint>
> = FindApi<Endpoint, Method>["parameters"];

type Response<
  Endpoint extends Endpoints,
  Method extends EnableMethods<Endpoint>
> = FindApi<Endpoint, Method>["response"];

export { Parameters, Response, EnableMethods };
