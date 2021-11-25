type Methods = "GET" | "POST" | "PUT" | "DELETE";

type PathFor<Endpoint extends string> = `/k/v1/${Endpoint}`;
type Domain = "cybozu.com" | "kintone.com" | "cybozu.cn";
type UrlFor<Endpoint extends string> =
  | `https://${string}.${Domain}/k/v1/${Endpoint}.json`
  | `https://${string}.${Domain}/k/guest/${number}/v1/${Endpoint}.json`
  | `https://${string}.${Domain}/k/guest/${number}/v1/${Endpoint}.json?${string}`;

type EndpointOf<PathOrUrl extends PathFor<string> | UrlFor<string>> =
  PathOrUrl extends PathFor<infer Endpoint>
    ? Endpoint
    : PathOrUrl extends UrlFor<infer Endpoint>
    ? Endpoint
    : never;

export { Methods, PathFor, UrlFor, EndpointOf };
