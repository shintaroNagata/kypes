import { Event, EventTypes, KintoneRecord, KintoneRecordForSet } from "./page";
import {
  EnableMethods,
  Endpoints,
  Parameters,
  PathFor,
  Response,
  UrlFor,
  WithQuery,
} from "./rest";

declare global {
  /**
   * The global object for kintone JS API.
   */
  namespace kintone {
    /**
     * The user information.
     */
    interface User {
      /**
       * User ID. Auto incremented by the service.
       */
      id: string;

      /**
       * Login name. An identifier used to log in to cybozu.com.
       * For guest users, this will be their email.
       */
      code: string;

      /**
       * Display name. This appear in the services.
       */
      name: string;

      /**
       * An e-mail address that the user uses.
       */
      email: string;

      /**
       * The URL of a Web page. Blank for guest users.
       */
      url: string;

      /**
       * 	Employee ID. Blank for guest users.
       */
      employeeNumber: string;

      /**
       * Telephone number.
       */
      phone: string;

      /**
       * Mobile phone number. Blank for guest users.
       */
      mobilePhone: string;

      /**
       * Extension. Blank for guest users.
       */
      extensionNumber: string;

      /**
       * 	Time Zone.
       */
      timezone: string;

      /**
       * True for guest users, false for non-guest users.
       */
      isGuest: boolean;

      /**
       * The default language used in cybozu.com.
       */
      language: string;
    }

    /**
     * Retrieves the user information of the user that is currently viewing the page.
     */
    function getLoginUser(): User;

    /**
     * Retrieves a CSRF token to be used for file downloads/uploads.
     * This can be used for all APIs that have an HTTP method of POST, PUT and DELETE. APIs with an HTTP method of GET do not need a CSRF token.
     */
    function getRequestToken(): string;

    /**
     * Retrieves the current Kintone UI Design version that the user is currently viewing.
     * By default, the user settings of the Kintone UI Design should be set to the New UI Design.
     * @returns In the case of Classic UI Design (Desktop version) or Mobile version are used, returns `1`.
     * In the case of New UI Design are used, returns `2`.
     */
    function getUiVersion(): 1 | 2;

    /**
     * REST APIs with the GET, POST, PUT, DELETE method can be used.
     * @param pathOrUrl The path of the Kintone REST API, or the URL obtained with `kintone.api.url`.
     * If the URL of the API is `https://{subdomain}.kintone.com/k/v1/xxx.json`, then specify the parameter as `/k/v1/xxx`.
     * If the app is to be used inside a guest space, specify the parameter as `kintone.api.url("/k/v1/xxx", true)`.
     * @param method The HTTP method. Specify one of the following: `GET` / `POST` / `PUT` / `DELETE`.
     * @param params The parameters to be used with the API, specified as an object.
     */
    function api<
      Endpoint extends Endpoints,
      Method extends EnableMethods<Endpoint>
    >(
      pathOrUrl: PathFor<Endpoint> | UrlFor<Endpoint>,
      method: Method,
      params: Parameters<Endpoint, Method>
    ): Promise<Response<Endpoint, Method>>;

    /**
     * REST APIs with the GET, POST, PUT, DELETE method can be used.
     * @param pathOrUrl The path of the Kintone REST API, or the URL obtained with `kintone.api.url`.
     * If the URL of the API is `https://{subdomain}.kintone.com/k/v1/xxx.json`, then specify the parameter as `/k/v1/xxx`.
     * If the app is to be used inside a guest space, specify the parameter as `kintone.api.url("/k/v1/xxx", true)`.
     * @param method The HTTP method. Specify one of the following: `GET` / `POST` / `PUT` / `DELETE`.
     * @param params The parameters to be used with the API, specified as an object.
     */
    function api<
      Endpoint extends Endpoints,
      Method extends Extract<EnableMethods<Endpoint>, "GET">
    >(
      pathOrUrl: WithQuery<UrlFor<Endpoint>>,
      method: Method,
      params: Record<string, never>
    ): Promise<Response<Endpoint, Method>>;

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
      method: string,
      params: Record<string, unknown>
    ): Promise<Record<string, unknown>>;

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
    function api<
      Endpoint extends Endpoints,
      Method extends EnableMethods<Endpoint>
    >(
      pathOrUrl: PathFor<Endpoint> | UrlFor<Endpoint>,
      method: Method,
      params: Parameters<Endpoint, Method>,
      successCallback: (response: Response<Endpoint, Method>) => void,
      failureCallback?: (
        errorResponse: Record<string, unknown> | string
      ) => void
    ): void;

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
    function api<
      Endpoint extends Endpoints,
      Method extends Extract<EnableMethods<Endpoint>, "GET">
    >(
      pathOrUrl: WithQuery<UrlFor<Endpoint>>,
      method: Method,
      params: Record<string, never>,
      successCallback: (response: Response<Endpoint, Method>) => void,
      failureCallback?: (
        errorResponse: Record<string, unknown> | string
      ) => void
    ): void;

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
      method: string,
      params: Record<string, unknown>,
      successCallback: (response: Record<string, unknown>) => void,
      failureCallback?: (
        errorResponse: Record<string, unknown> | string
      ) => void
    ): void;

    function proxy(
      url: string,
      method: "GET" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, never> | string
    ): Promise<[string, number, Record<string, string>]>;
    function proxy(
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: Record<string, unknown> | string
    ): Promise<[string, number, Record<string, string>]>;
    function proxy(
      url: string,
      method: "GET" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, never> | string,
      successCallback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string>
      ) => void,
      failureCallback?: (errorResponseBody: string) => void
    ): void;
    function proxy(
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: Record<string, unknown> | string,
      successCallback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string>
      ) => void,
      failureCallback?: (errorResponseBody: string) => void
    ): void;
  }

  namespace kintone.portal {
    function getContentSpaceElement(): HTMLElement | null;
  }

  namespace kintone.space.portal {
    function getContentSpaceElement(): HTMLElement | null;
  }

  namespace kintone.app {
    function getQueryCondition(): string | null;
    function getQuery(): string | null;
    function getId(): number | null;
    function getLookupTargetAppId(fieldCode: string): number | null;
    function getRelatedRecordsTargetAppId(fieldCode: string): number | null;
    function getFieldElements(fieldCode: string): HTMLElement[] | null;
    function getHeaderMenuSpaceElement(): HTMLElement | null;
    function getHeaderSpaceElement(): HTMLElement | null;
  }

  namespace kintone.app.record {
    function getId(): number | null;
    function get(): KintoneRecord | null;
    function set(recordObject: { record: KintoneRecordForSet }): void;
    function setFieldShown(fieldCode: string, isShown: boolean): void;
    function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void;
    function getFieldElement(fieldCode: string): HTMLElement | null;
    function getHeaderMenuSpaceElement(): HTMLElement | null;
    function getSpaceElement(id: string): HTMLElement | null;
  }

  namespace kintone.plugin.app {
    function setConfig(
      config: Record<string, string>,
      successCallback?: () => void
    ): void;
    function getConfig(pluginId: string): Record<string, string>;
    function proxy(
      pluginId: string,
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, string> | string
    ): Promise<[string, number, Record<string, string>]>;
    function proxy(
      pluginId: string,
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, string> | string,
      successCallback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string>
      ) => void,
      failureCallback?: (errorResponseBody: string) => void
    ): void;

    function setProxyConfig(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, string>,
      successCallback?: () => void
    ): void;
    function getProxyConfig(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE"
    ): {
      headers: Record<string, string>;
      data: Record<string, string>;
    };
  }

  namespace kintone.plugin.app.proxy {
    function upload(
      pluginId: string,
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: {
        format: "RAW";
        value: unknown;
      }
    ): Promise<[string, number, Record<string, string>]>;
    function upload(
      pluginId: string,
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: {
        format: "RAW";
        value: unknown;
      },
      successCallback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string>
      ) => void,
      failureCallback?: (errorResponseBody: string) => void
    ): void;
  }

  namespace kintone.mobile.portal {
    function getContentSpaceElement(): HTMLElement | null;
  }

  namespace kintone.mobile.space.portal {
    function getContentSpaceElement(): HTMLElement | null;
  }

  namespace kintone.mobile.app {
    function getQueryCondition(): string | null;
    function getQuery(): string | null;
    function getId(): number | null;
    function getLookupTargetAppId(fieldCode: string): number | null;
    function getRelatedRecordsTargetAppId(fieldCode: string): number | null;
    function getFieldElements(fieldCode: string): HTMLElement[] | null;
    function getHeaderSpaceElement(): HTMLElement | null;
  }

  namespace kintone.mobile.app.record {
    function getId(): number | null;
    function get(): KintoneRecord | null;
    function set(recordObject: { record: KintoneRecordForSet }): void;
    function setFieldShown(fieldCode: string, isShown: boolean): void;
    function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void;
    function getFieldElement(fieldCode: string): HTMLElement | null;
    function getSpaceElement(id: string): HTMLElement | null;
  }

  namespace kintone.api {
    /**
     * Returns a URL from a shortened API path.
     * @param path The Kintone REST API path string beginning with `/`.
     * If the URL of the API is `https://{subdomain}.kintone.com/k/v1/xxx.json`, then specify the parameter as `/k/v1/xxx`.
     * @param detectGuestSpace If this is set to true, and is used in a guest space app, the URI of the guest space will be returned. Default is false.
     * @returns A URL string.
     */
    function url<Endpoint extends Endpoints>(
      path: PathFor<Endpoint>,
      detectGuestSpace?: boolean
    ): UrlFor<Endpoint>;

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
    function urlForGet<Endpoint extends Endpoints>(
      path: PathFor<Endpoint>,
      params: Parameters<Endpoint, Extract<EnableMethods<Endpoint>, "GET">>,
      detectGuestSpace?: boolean
    ): WithQuery<UrlFor<Endpoint>>;

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
      params: Record<string, unknown>,
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
    export { url, urlForGet, getConcurrencyLimit, Parameters, Response };
  }

  namespace kintone.proxy {
    function upload(
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: {
        format: "RAW";
        value: Blob;
      }
    ): Promise<[string, number, Record<string, string>]>;
    function upload(
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: {
        format: "RAW";
        value: Blob;
      },
      successCallback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string>
      ) => void,
      failureCallback?: (errorResponseBody: string) => void
    ): void;
  }

  namespace kintone.events {
    /**
     * Registers an event handler.
     * @param type The event type or array of event types, to which the event handler will bind to.
     * @param handler The handler that will run when the event is triggered.
     * All event objects have an event type in their type property.
     */
    function on<T extends EventTypes>(
      type: T | T[],
      handler: (event: Event<T>) => unknown
    ): void;

    /**
     * Removes event handlers from the specified event type(s).
     * @param type The event type(s) to which the event handler is bound to.
     * @param handler The handler that will be removed from the specified event type(s).
     * If no value is set for this parameter, all event handlers will be removed from the specified event type(s).
     * If no values are set for both the type and handler parameter, then all event handlers will be removed from all event types.
     */
    function off<T extends EventTypes>(
      type?: T | T[],
      handler?: (event: Event<T>) => unknown
    ): boolean;

    export { EventTypes, on, off };
  }
}

export {};
