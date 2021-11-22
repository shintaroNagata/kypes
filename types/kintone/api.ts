declare global {
  namespace kintone {
    function api(
      path: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      parameter: any
    ): Promise<any>;
  }
  namespace kintone.api {
    function url(path: string, detectGuestSpace?: boolean): string;
    function urlForGet(
      path: string,
      params: any,
      detectGuestSpace?: boolean
    ): string;
    function getConcurrencyLimit(): Promise<{ limit: number; running: number }>;
  }
}

export {};
