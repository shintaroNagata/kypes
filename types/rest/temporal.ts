import { FindApi, EnableMethods } from "./schema";

type Parameters<Endpoint, Method> = FindApi<Endpoint, Method>["parameters"];
type Response<Endpoint, Method> = FindApi<Endpoint, Method>["response"];

export { Parameters, Response, EnableMethods };
