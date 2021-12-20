type Methods = "GET" | "POST" | "PUT" | "DELETE";

type PathFor<Endpoint extends string> = `/k/v1/${Endpoint}.json`;
type Domain = "cybozu.com" | "kintone.com" | "cybozu.cn";
type UrlFor<Endpoint extends string> =
  | `https://${string}.${Domain}/k/v1/${Endpoint}.json`
  | `https://${string}.${Domain}/k/guest/${number}/v1/${Endpoint}.json`;
type WithQuery<Url extends string> = `${Url}?${string}`;

type EndpointOf<PathOrUrl extends string> = PathOrUrl extends PathFor<
  infer Endpoint
>
  ? Endpoint
  : PathOrUrl extends UrlFor<infer Endpoint>
  ? Endpoint
  : PathOrUrl extends WithQuery<UrlFor<infer Endpoint>>
  ? Endpoint
  : string;

export { Methods, PathFor, UrlFor, WithQuery, EndpointOf };
