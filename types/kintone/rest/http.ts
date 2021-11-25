type Methods = "GET" | "POST" | "PUT" | "DELETE";

type PathFor<Endpoint extends string> = `/k/v1/${Endpoint}`;
type Domain = "cybozu.com" | "kintone.com" | "cybozu.cn";
type UrlFor<Endpoint extends string> =
  | `https://${string}.${Domain}/k/v1/${Endpoint}.json`
  | `https://${string}.${Domain}/k/guest/${number}/v1/${Endpoint}.json`;

type EndpointFromPath<Path extends PathFor<string>> = Path extends PathFor<
  infer Endpoint
>
  ? Endpoint
  : never;

type EndpointFromUrl<Url extends UrlFor<string>> = Url extends UrlFor<
  infer Endpoint
>
  ? Endpoint
  : never;

export { Methods, PathFor, UrlFor, EndpointFromPath, EndpointFromUrl };
