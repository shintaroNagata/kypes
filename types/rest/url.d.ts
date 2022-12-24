type Domain = "cybozu.com" | "kintone.com" | "cybozu.cn";

type Url<Path extends `/${string}`> = `https://${string}.${Domain}${Path}`;
type QueriedUrl<Path extends `/${string}`> = `${Url<Path>}?${string}`;

export type { Url, QueriedUrl };
