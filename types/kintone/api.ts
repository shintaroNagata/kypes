declare global {
  namespace kintone {
    /**
     * REST APIs with the GET, POST, PUT, DELETE method can be used.
     * @param pathOrUrl The path of the Kintone REST API, or the URL obtained with `kintone.api.url`.
     * If the URL of the API is `https://{subdomain}.kintone.com/k/v1/xxx.json`, then specify the parameter as `/k/v1/xxx`.
     * If the app is to be used inside a guest space, specify the parameter as `kintone.api.url("/k/v1/xxx", true)`.
     * @param method The HTTP method. Specify one of the following: `GET` / `POST` / `PUT` / `DELETE`.
     * @param params The parameters to be used with the API, specified as an object.
     */
    function api(
      pathOrUrl: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      params: { [key: string]: any }
    ): Promise<any>;
    /**
     * REST APIs with the GET, POST, PUT, DELETE method can be used.
     * @param pathOrUrl The path of the Kintone REST API, or the URL obtained with `kintone.api.url`.
     * If the URL of the API is `https://{subdomain}.kintone.com/k/v1/xxx.json`, then specify the parameter as `/k/v1/xxx`.
     * If the app is to be used inside a guest space, specify the parameter as `kintone.api.url("/k/v1/xxx", true)`.
     * @param method The HTTP method. Specify one of the following: `GET` / `POST` / `PUT` / `DELETE`.
     * @param params The parameters to be used with the API, specified as an object.
     * @param successCallback The callback function called when the API succeeds.
     * The parameter for this function is an object.
     * @param failureCallback The callback function called when the API fails.
     * The parameter for this function is a JSON response. If the JSON response cannot be parsed, an unparsed string will be given.
     */
    function api(
      pathOrUrl: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      params: { [key: string]: any },
      successCallback: (response: any) => void,
      failureCallback?: (errorResponse: any) => void
    ): void;
  }
  namespace kintone.api {
    /**
     * Returns a URL from a shortened API path.
     * @param path The Kintone REST API path string beginning with `/`.
     * If the URL of the API is `https://{subdomain}.kintone.com/k/v1/xxx.json`, then specify the parameter as `/k/v1/xxx`.
     * @param detectGuestSpace If this is set to true, and is used in a guest space app, the URI of the guest space will be returned. Default is false.
     * @returns A URL string.
     */
    function url(path: string, detectGuestSpace?: boolean): string;

    /**
     * Returns a URL including a query string, from an API path and parameters.
     * @param path The Kintone REST API path string beginning with `/`.
     * If the URL of the API is `https://{subdomain}.kintone.com/k/v1/xxx.json`, then specify the parameter as `/k/v1/xxx`.
     * @param params The parameters to be used with the API, specified as an object.
     * @param detectGuestSpace If this is set to true, and is used in a guest space app, the URI of the guest space will be returned. Default is false.
     * @returns A URL string including a query string, with URL encoded parameters.
     */
    function urlForGet(
      path: string,
      params: any,
      detectGuestSpace?: boolean
    ): string;

    /**
     * Gets the current number of simultaneous API calls and the maximum number of API calls you can make simultaneously in your Kintone domain.
     */
    function getConcurrencyLimit(): Promise<{
      /**
       * The maximum number of calls you can make simultaneously in your Kintone domain.
       */
      limit: number;

      /**
       * The current number of simultaneous calls in your Kintone domain.
       */
      running: number;
    }>;
  }
}

export {};
