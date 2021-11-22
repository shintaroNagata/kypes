declare global {
  namespace kintone {
    function api(
      pathOrUrl: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      params: { [key: string]: any }
    ): Promise<any>;
    function api(
      pathOrUrl: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      params: { [key: string]: any },
      successCallback?: (response: any) => void,
      failureCallback?: (errorResponse: any) => void
    ): void;
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
