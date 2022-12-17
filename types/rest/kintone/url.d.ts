type Domains = "cybozu.com" | "kintone.com" | "cybozu.cn";

type PathFor<Endpoint> = Endpoint extends string
  ? `/k/v1/${Endpoint}.json`
  : never;
type UrlFor<Endpoint> = Endpoint extends string
  ?
      | `https://${string}.${Domains}/k/v1/${Endpoint}.json`
      | `https://${string}.${Domains}/k/guest/${number}/v1/${Endpoint}.json`
  : never;
type WithQuery<Url> = Url extends string ? `${Url}?${string}` : never;

export type { PathFor, UrlFor, WithQuery };
