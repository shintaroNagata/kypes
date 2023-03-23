import type {
  KintoneApi,
  ApiSchema,
  Url,
  QueriedUrl,
} from "@shin-chan/kypes-rest";
import type {
  KintoneRecord,
  KintoneRecordOnCreatePage,
  KintoneRecordForSet,
  BuildRecord,
  BuildRecordForSet,
  BuildRecordOnCreatePage,
  ChangedField,
  ChangedSubtable,
  ChangedRow,
} from "./page";

type Paths = keyof KintoneApi.SchemaMap;

type PathOrUrl<Path> = Path extends Paths
  ? Path | KintoneApi.GuestPath<Path> | Url<Path | KintoneApi.GuestPath<Path>>
  : never;

type Methods<Path> = Path extends Paths
  ? keyof KintoneApi.SchemaMap[Path]
  : never;

type Request<Path, Method> = Path extends Paths
  ? Method extends Methods<Path>
    ? KintoneApi.SchemaMap[Path][Method] extends { request: infer R }
      ? R
      : never
    : never
  : never;

type Response<Path, Method> = Path extends Paths
  ? Method extends Methods<Path>
    ? KintoneApi.SchemaMap[Path][Method] extends { response: infer R }
      ? R
      : never
    : never
  : never;

declare global {
  namespace kintone {
    interface User {
      id: string;
      code: string;
      name: string;
      email: string;
      url: string;
      employeeNumber: string;
      phone: string;
      mobilePhone: string;
      extensionNumber: string;
      timezone: string;
      isGuest: boolean;
      language: string;
    }

    /**
     * @see [Get Logged-in User](https://kintone.dev/en/docs/kintone/js-api/get-data/get-logged-in-user/#get-logged-in-user) (Kintone Developer Program)
     */
    function getLoginUser(): User;

    /**
     * @see [Get CSRF Token](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#get-csrf-token) (Kintone Developer Program)
     */
    function getRequestToken(): string;

    /**
     * @see [Get Design](https://kintone.dev/en/docs/kintone/js-api/get-data/get-design/#get-design) (Kintone Developer Program)
     */
    function getUiVersion(): 1 | 2;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      TargetApiSchema extends KintoneApi.SchemaMap[Path][Method],
      Path extends Paths,
      Method extends Methods<Path>
    >(
      pathOrUrl: PathOrUrl<Path>,
      method: Method,
      params: Request<Path, Method>
    ): Promise<Response<Path, Method>>;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      TargetApiSchema extends ApiSchema,
      Path extends TargetApiSchema["path"] = TargetApiSchema["path"],
      Method extends TargetApiSchema["method"] = TargetApiSchema["method"]
    >(
      pathOrUrl: PathOrUrl<Path>,
      method: Method,
      params: TargetApiSchema["request"]
    ): Promise<TargetApiSchema["response"]>;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      TargetApiSchema extends KintoneApi.SchemaMap[Path][Method],
      Path extends Paths,
      Method extends Methods<Path>
    >(
      pathOrUrl: QueriedUrl<Path | KintoneApi.GuestPath<Path>>,
      method: Method,
      params: Record<string, never>
    ): Promise<Response<Path, Method>>;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      TargetApiSchema extends ApiSchema,
      Path extends TargetApiSchema["path"] = TargetApiSchema["path"],
      Method extends TargetApiSchema["method"] = TargetApiSchema["method"]
    >(
      pathOrUrl: QueriedUrl<Path | KintoneApi.GuestPath<Path>>,
      method: Extract<Method, "GET">,
      params: Record<string, never>
    ): Promise<TargetApiSchema["response"]>;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api(
      pathOrUrl: string,
      method: string,
      params: Record<string, unknown>
    ): Promise<Record<string, unknown>>;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      TargetApiSchema extends KintoneApi.SchemaMap[Path][Method],
      Path extends Paths,
      Method extends Methods<Path>
    >(
      pathOrUrl: PathOrUrl<Path>,
      method: Method,
      params: Request<Path, Method>,
      callback: (response: Response<Path, Method>) => void,
      errback?: (errorResponse: Record<string, unknown> | string) => void
    ): void;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      TargetApiSchema extends ApiSchema,
      Path extends TargetApiSchema["path"] = TargetApiSchema["path"],
      Method extends TargetApiSchema["method"] = TargetApiSchema["method"]
    >(
      pathOrUrl: PathOrUrl<Path>,
      method: Method,
      params: TargetApiSchema["request"],
      callback: (response: TargetApiSchema["response"]) => void,
      errback?: (errorResponse: Record<string, unknown> | string) => void
    ): void;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      TargetApiSchema extends KintoneApi.SchemaMap[Path][Method],
      Path extends Paths,
      Method extends Methods<Path>
    >(
      pathOrUrl: QueriedUrl<Path | KintoneApi.GuestPath<Path>>,
      method: Method,
      params: Record<string, never>,
      callback: (response: Response<Path, Method>) => void,
      errback?: (errorResponse: Record<string, unknown> | string) => void
    ): void;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      TargetApiSchema extends ApiSchema,
      Path extends TargetApiSchema["path"] = TargetApiSchema["path"],
      Method extends TargetApiSchema["method"] = TargetApiSchema["method"]
    >(
      pathOrUrl: QueriedUrl<Path | KintoneApi.GuestPath<Path>>,
      method: Extract<Method, "GET">,
      params: Record<string, never>,
      callback: (response: TargetApiSchema["response"]) => void,
      errback?: (errorResponse: Record<string, unknown> | string) => void
    ): void;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api(
      pathOrUrl: string,
      method: string,
      params: Record<string, unknown>,
      callback: (response: Record<string, unknown>) => void,
      errback?: (errorResponse: Record<string, unknown> | string) => void
    ): void;

    /**
     * @see [Kintone Proxy](https://kintone.dev/en/docs/kintone/js-api/other/kintone-proxy/#kintone-proxy) (Kintone Developer Program)
     */
    function proxy(
      url: string,
      method: "GET" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, never> | ""
    ): Promise<[string, number, Record<string, string>]>;

    /**
     * @see [Kintone Proxy](https://kintone.dev/en/docs/kintone/js-api/other/kintone-proxy/#kintone-proxy) (Kintone Developer Program)
     */
    function proxy(
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: Record<string, unknown> | string
    ): Promise<[string, number, Record<string, string>]>;

    /**
     * @see [Kintone Proxy](https://kintone.dev/en/docs/kintone/js-api/other/kintone-proxy/#kintone-proxy) (Kintone Developer Program)
     */
    function proxy(
      url: string,
      method: "GET" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, never> | "",
      callback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string>
      ) => void,
      errback?: (errorResponseBody: string) => void
    ): void;

    /**
     * @see [Kintone Proxy](https://kintone.dev/en/docs/kintone/js-api/other/kintone-proxy/#kintone-proxy) (Kintone Developer Program)
     */
    function proxy(
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: Record<string, unknown> | string,
      callback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string>
      ) => void,
      errback?: (errorResponseBody: string) => void
    ): void;

    const Promise: PromiseConstructorLike;

    const $PLUGIN_ID: string | undefined;
  }

  namespace kintone.api {
    /**
     * @see [Get URL](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#get-url) (Kintone Developer Program)
     */
    function url<Path extends Paths>(
      path: Path,
      detectGuestSpace?: boolean
    ): Url<Path | KintoneApi.GuestPath<Path>>;

    /**
     * @see [Get URL](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#get-url) (Kintone Developer Program)
     */
    function url(path: string, detectGuestSpace?: boolean): string;

    /**
     * @see [Get URL (including query)](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#get-url-including-query) (Kintone Developer Program)
     */
    function urlForGet<Path extends Paths>(
      path: Path,
      params: Request<Path, Extract<Methods<Path>, "GET">>,
      detectGuestSpace?: boolean
    ): QueriedUrl<Path | KintoneApi.GuestPath<Path>>;

    /**
     * @see [Get URL (including query)](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#get-url-including-query) (Kintone Developer Program)
     */
    function urlForGet(
      path: string,
      params: Record<string, unknown>,
      detectGuestSpace?: boolean
    ): string;

    /**
     * @see [Get Concurrency Limit](https://kintone.dev/en/docs/kintone/js-api/get-data/get-concurrency-limit/#get-concurrency-limit) (Kintone Developer Program)
     */
    function getConcurrencyLimit(): Promise<{ limit: number; running: number }>;
  }

  namespace kintone.proxy {
    /**
     * @see [Kintone Proxy Upload](https://kintone.dev/en/docs/kintone/js-api/other/kintone-proxy-upload/#kintone-proxy-upload) (Kintone Developer Program)
     */
    function upload(
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: {
        format: "RAW";
        value: Blob;
      }
    ): Promise<[string, number, Record<string, string>]>;

    /**
     * @see [Kintone Proxy Upload](https://kintone.dev/en/docs/kintone/js-api/other/kintone-proxy-upload/#kintone-proxy-upload) (Kintone Developer Program)
     */
    function upload(
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: {
        format: "RAW";
        value: Blob;
      },
      callback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string>
      ) => void,
      errback?: (errorResponseBody: string) => void
    ): void;
  }

  namespace kintone.portal {
    /**
     * @see [Get Space Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-portal/#get-space-element) (Kintone Developer Program)
     */
    function getContentSpaceElement(): HTMLElement | null;
  }

  namespace kintone.mobile.portal {
    /**
     * @see [Get Space Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-portal/#get-space-element) (Kintone Developer Program)
     */
    function getContentSpaceElement(): HTMLElement | null;
  }

  namespace kintone.space.portal {
    /**
     * @see [Get Space Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-space/#get-space-element) (Kintone Developer Program)
     */
    function getContentSpaceElement(): HTMLElement | null;
  }

  namespace kintone.mobile.space.portal {
    /**
     * @see [Get Space Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-space/#get-space-element) (Kintone Developer Program)
     */
    function getContentSpaceElement(): HTMLElement | null;
  }

  namespace kintone.app {
    /**
     * @see [Get App ID](https://kintone.dev/en/docs/kintone/js-api/get-data/get-app-id/#get-app-id) (Kintone Developer Program)
     */
    function getId(): number | null;

    /**
     * @see [Get Record List Query (with order by, limit, offset)](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record-list/#get-record-list-query-with-order-by-limit-offset) (Kintone Developer Program)
     */
    function getQuery(): string | null;

    /**
     * @see [Get Record List Query](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record-list/#get-record-list-query) (Kintone Developer Program)
     */
    function getQueryCondition(): string | null;

    /**
     * @see [Get Lookup Target](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-lookup-target) (Kintone Developer Program)
     */
    function getLookupTargetAppId(fieldCode: string): number | null;

    /**
     * @see [Get Related Records Target](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-related-records-target) (Kintone Developer Program)
     */
    function getRelatedRecordsTargetAppId(fieldCode: string): number | null;

    /**
     * @see [Get Record List Header Menu Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record-list/#get-record-list-header-menu-element) (Kintone Developer Program)
     */
    function getHeaderMenuSpaceElement(): HTMLElement | null;

    /**
     * @see [Get Record List Header Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record-list/#get-record-list-header-element) (Kintone Developer Program)
     */
    function getHeaderSpaceElement(): HTMLElement | null;

    /**
     * @see [Get Record List Field Elements](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record-list/#get-record-list-field-elements) (Kintone Developer Program)
     */
    function getFieldElements(fieldCode: string): HTMLElement[] | null;

    export {
      getId,
      getQuery,
      getQueryCondition,
      getLookupTargetAppId,
      getRelatedRecordsTargetAppId,
      getHeaderMenuSpaceElement,
      getHeaderSpaceElement,
      getFieldElements,
      KintoneRecord as Record,
      KintoneRecordOnCreatePage as RecordOnCreatePage,
      KintoneRecordForSet as RecordForSet,
      BuildRecord,
      BuildRecordForSet,
      BuildRecordOnCreatePage,
    };
  }

  namespace kintone.mobile.app {
    /**
     * @see [Get App ID](https://kintone.dev/en/docs/kintone/js-api/get-data/get-app-id/#get-app-id) (Kintone Developer Program)
     */
    function getId(): number | null;

    /**
     * @see [Get Record List Query (with order by, limit, offset)](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record-list/#get-record-list-query-with-order-by-limit-offset) (Kintone Developer Program)
     */
    function getQuery(): string | null;

    /**
     * @see [Get Record List Query](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record-list/#get-record-list-query) (Kintone Developer Program)
     */
    function getQueryCondition(): string | null;

    /**
     * @see [Get Lookup Target](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-lookup-target) (Kintone Developer Program)
     */
    function getLookupTargetAppId(fieldCode: string): number | null;

    /**
     * @see [Get Related Records Target](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-related-records-target) (Kintone Developer Program)
     */
    function getRelatedRecordsTargetAppId(fieldCode: string): number | null;

    /**
     * @see [Get Mobile Header Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-mobile-header-element) (Kintone Developer Program)
     */
    function getHeaderSpaceElement(): HTMLElement | null;

    /**
     * @see [Get Record List Field Elements](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record-list/#get-record-list-field-elements) (Kintone Developer Program)
     */
    function getFieldElements(fieldCode: string): HTMLElement[] | null;

    export {
      getId,
      getQuery,
      getQueryCondition,
      getLookupTargetAppId,
      getRelatedRecordsTargetAppId,
      getHeaderSpaceElement,
      getFieldElements,
      KintoneRecord as Record,
      KintoneRecordOnCreatePage as RecordOnCreatePage,
      KintoneRecordForSet as RecordForSet,
      BuildRecord,
      BuildRecordForSet,
      BuildRecordOnCreatePage,
    };
  }

  namespace kintone.app.record {
    /**
     * @see [Get Record ID](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-record-id) (Kintone Developer Program)
     */
    function getId(): number | null;

    /**
     * @see [Get Record Details](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-record-details) (Kintone Developer Program)
     */
    function get<AppSchema extends KintoneApi.KintoneAppSchema>(): {
      record: BuildRecord<AppSchema>;
    } | null;

    /**
     * @see [Set Record Value](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#set-record-value) (Kintone Developer Program)
     */
    function set<AppSchema extends KintoneApi.KintoneAppSchema>(recordObject: {
      record: BuildRecordForSet<AppSchema>;
    }): void;

    /**
     * @see [Get Record Header Menu Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-record-header-menu-element) (Kintone Developer Program)
     */
    function getHeaderMenuSpaceElement(): HTMLElement | null;

    /**
     * @see [Get Record Field Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-record-field-element) (Kintone Developer Program)
     */
    function getFieldElement(fieldCode: string): HTMLElement | null;

    /**
     * @see [Get Space Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-space-element) (Kintone Developer Program)
     */
    function getSpaceElement(id: string): HTMLElement | null;

    /**
     * @see [Show or hide a field](https://kintone.dev/en/docs/kintone/js-api/other/show-or-hide-a-field/#show-or-hide-a-field) (Kintone Developer Program)
     */
    function setFieldShown(fieldCode: string, isShown: boolean): void;

    /**
     * @see [Open Field Group](https://kintone.dev/en/docs/kintone/js-api/other/open-field-group/#open-field-group) (Kintone Developer Program)
     */
    function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void;
  }

  namespace kintone.mobile.app.record {
    /**
     * @see [Get Record ID](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-record-id) (Kintone Developer Program)
     */
    function getId(): number | null;

    /**
     * @see [Get Record Details](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-record-details) (Kintone Developer Program)
     */
    function get<AppSchema extends KintoneApi.KintoneAppSchema>(): {
      record: BuildRecord<AppSchema>;
    } | null;

    /**
     * @see [Set Record Value](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#set-record-value) (Kintone Developer Program)
     */
    function set<AppSchema extends KintoneApi.KintoneAppSchema>(recordObject: {
      record: BuildRecordForSet<AppSchema>;
    }): void;

    /**
     * @see [Get Record Field Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-record-field-element) (Kintone Developer Program)
     */
    function getFieldElement(fieldCode: string): HTMLElement | null;

    /**
     * @see [Get Space Element](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#get-space-element) (Kintone Developer Program)
     */
    function getSpaceElement(id: string): HTMLElement | null;

    /**
     * @see [Show or hide a field](https://kintone.dev/en/docs/kintone/js-api/other/show-or-hide-a-field/#show-or-hide-a-field) (Kintone Developer Program)
     */
    function setFieldShown(fieldCode: string, isShown: boolean): void;

    /**
     * @see [Open Field Group](https://kintone.dev/en/docs/kintone/js-api/other/open-field-group/#open-field-group) (Kintone Developer Program)
     */
    function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void;
  }

  namespace kintone.plugin.app {
    /**
     * @see [Set Config](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#set-config) (Kintone Developer Program)
     */
    function setConfig(
      config: Record<string, string>,
      callback?: () => void
    ): void;

    /**
     * @see [Get Config](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#get-config) (Kintone Developer Program)
     */
    function getConfig(pluginId: string): Record<string, string>;

    /**
     * @see [Kintone Plug-in Proxy](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#kintone-plug-in-proxy) (Kintone Developer Program)
     */
    function proxy(
      pluginId: string,
      url: string,
      method: "GET" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, never> | ""
    ): Promise<[string, number, Record<string, string>]>;

    /**
     * @see [Kintone Plug-in Proxy](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#kintone-plug-in-proxy) (Kintone Developer Program)
     */
    function proxy(
      pluginId: string,
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: Record<string, unknown> | string
    ): Promise<[string, number, Record<string, string>]>;

    /**
     * @see [Kintone Plug-in Proxy](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#kintone-plug-in-proxy) (Kintone Developer Program)
     */
    function proxy(
      pluginId: string,
      url: string,
      method: "GET" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, never> | "",
      callback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string>
      ) => void,
      errback?: (errorResponseBody: string) => void
    ): void;

    /**
     * @see [Kintone Plug-in Proxy](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#kintone-plug-in-proxy) (Kintone Developer Program)
     */
    function proxy(
      pluginId: string,
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: Record<string, unknown> | string,
      callback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string>
      ) => void,
      errback?: (errorResponseBody: string) => void
    ): void;

    /**
     * @see [Set Config for proxy](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#set-config-for-proxy) (Kintone Developer Program)
     */
    function setProxyConfig(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, unknown>,
      callback?: () => void
    ): void;

    /**
     * @see [Get Config for proxy](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#get-config-for-proxy) (Kintone Developer Program)
     */
    function getProxyConfig(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE"
    ): {
      headers: Record<string, string>;
      data: Record<string, unknown>;
    };
  }

  namespace kintone.plugin.app.proxy {
    /**
     * @see [Kintone Plug-in Proxy Upload](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#kintone-plug-in-proxy-upload) (Kintone Developer Program)
     */
    function upload(
      pluginId: string,
      url: string,
      method: "POST" | "PUT",
      headers: Record<string, string>,
      data: {
        format: "RAW";
        value: Blob;
      }
    ): Promise<[string, number, Record<string, string>]>;

    /**
     * @see [Kintone Plug-in Proxy Upload](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#kintone-plug-in-proxy-upload) (Kintone Developer Program)
     */
    function upload(
      pluginId: string,
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
     * @see [Record List Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordIndexShowEventForListView<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "list";
      offset: number;
      size: number;
      date: null;
      records: Array<BuildRecord<AppSchema>>;
    }

    /**
     * @see [Record List Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordIndexShowEventForCalendarView<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: {
        [date in `${number}-${string}-${string}`]: Array<
          BuildRecord<AppSchema>
        >;
      };
    }

    /**
     * @see [Record List Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordIndexShowEventForCustomView<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: Array<BuildRecord<AppSchema>>;
    }

    /**
     * @see [Record List Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-desktop) (Kintone Developer Program)
     */
    type AppRecordIndexShowEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > =
      | AppRecordIndexShowEventForListView<AppSchema>
      | AppRecordIndexShowEventForCalendarView<AppSchema>
      | AppRecordIndexShowEventForCustomView<AppSchema>;

    /**
     * @see [Record List Events > Inline Edit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#inline-edit-event) (Kintone Developer Program)
     */
    interface AppRecordIndexEditShowEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.index.edit.show";
      appId: number;
      recordId: string;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record List Events > Field Change Event](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#field-change-event) (Kintone Developer Program)
     */
    interface AppRecordIndexEditChangeEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema,
      TargetField extends string = string
    > {
      type: `app.record.index.edit.change.${TargetField}`;
      appId: string;
      recordId: string;
      record: BuildRecord<AppSchema>;
      changes: {
        field: ChangedField;
      };
    }

    /**
     * @see [Record List Events > Save Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#save-submit-event) (Kintone Developer Program)
     */
    interface AppRecordIndexEditSubmitEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.index.edit.submit";
      appId: string;
      recordId: string;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Save Submit Success Event](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#save-submit-success-event) (Kintone Developer Program)
     */
    interface AppRecordIndexEditSubmitSuccessEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.index.edit.submit.success";
      appId: number;
      recordId: string;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Delete Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#delete-submit-event) (Kintone Developer Program)
     */
    interface AppRecordIndexDeleteSubmitEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.index.delete.submit";
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Details Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordDetailShowEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.detail.show";
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Details Events > Delete Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#delete-submit-event) (Kintone Developer Program)
     */
    interface AppRecordDetailDeleteSubmitEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.detail.delete.submit";
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Proceed Process Event](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#proceed-process-event) (Kintone Developer Program)
     */
    interface AppRecordDetailProcessProceedEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.detail.process.proceed";
      action: { value: string };
      status: { value: string };
      nextStatus: { value: string };
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Create Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordCreateShowEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.create.show";
      appId: number;
      reuse: boolean;
      record: BuildRecordOnCreatePage<AppSchema>;
    }

    /**
     * @see [Record Create Events > Field Change Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#field-change-event) (Kintone Developer Program)
     */
    interface AppRecordCreateChangeEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema,
      TargetField extends string = string
    > {
      type: `app.record.create.change.${TargetField}`;
      appId: number;
      record: BuildRecordOnCreatePage<AppSchema>;
      changes:
        | { field: ChangedField; row: ChangedRow | null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    }

    /**
     * @see [Record Create Events > Save Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-event) (Kintone Developer Program)
     */
    interface AppRecordCreateSubmitEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.create.submit";
      appId: number;
      record: BuildRecordOnCreatePage<AppSchema>;
    }

    /**
     * @see [Record Create Events > Save Submit Success Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-success-event) (Kintone Developer Program)
     */
    interface AppRecordCreateSubmitSuccessEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.create.submit.success";
      appId: number;
      recordId: string;
      record: BuildRecordOnCreatePage<AppSchema>;
    }

    /**
     * @see [Record Edit Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordEditShowEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.edit.show";
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Edit Events > Field Change Event](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#field-change-event) (Kintone Developer Program)
     */
    interface AppRecordEditChangeEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema,
      TargetField extends string = string
    > {
      type: `app.record.edit.change.${TargetField}`;
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
      changes:
        | { field: ChangedField; row: ChangedRow | null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    }

    /**
     * @see [Record Edit Events > Save Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#save-submit-event) (Kintone Developer Program)
     */
    interface AppRecordEditSubmitEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.edit.submit";
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Edit Events > Save Submit Success Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-success-event) (Kintone Developer Program)
     */
    interface AppRecordEditSubmitSuccessEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.edit.submit.success";
      appId: number;
      recordId: string;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Print Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-print-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordPrintShowEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "app.record.print.show";
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Graph Display Events > Onload Event](https://kintone.dev/en/docs/kintone/js-api/events/graph-display-event/#onload-event) (Kintone Developer Program)
     */
    interface AppReportShowEvent {
      type: "app.report.show";
      appId: number;
    }

    /**
     * @see [Portal Display Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/portal-display-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface PortalShowEvent {
      type: "portal.show";
    }

    /**
     * @see [Space Display Events > Desktop Onload Event](https://kintone.dev/en/docs/kintone/js-api/events/space-display-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface SpacePortalShowEvent {
      type: "space.portal.show";
      spaceId: string;
    }

    /**
     * @see [Record List Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileAppRecordIndexShowEventForListView<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "list";
      offset: number;
      size: number;
      date: null;
      records: Array<BuildRecord<AppSchema>>;
    }

    /**
     * @see [Record List Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileAppRecordIndexShowEventForCalendarView<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: {
        [date in `${number}-${string}-${string}`]: Array<
          BuildRecord<AppSchema>
        >;
      };
    }

    /**
     * @see [Record List Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileAppRecordIndexShowEventForCustomView<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: Array<BuildRecord<AppSchema>>;
    }

    /**
     * @see [Record List Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-mobile) (Kintone Developer Program)
     */
    type MobileAppRecordIndexShowEvent =
      | MobileAppRecordIndexShowEventForListView
      | MobileAppRecordIndexShowEventForCalendarView
      | MobileAppRecordIndexShowEventForCustomView;

    /**
     * @see [Record Details Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileAppRecordDetailShowEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.detail.show";
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Details Events > Delete Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#delete-submit-event) (Kintone Developer Program)
     */
    interface MobileAppRecordDetailDeleteSubmitEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.detail.delete.submit";
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Details Events > Proceed Process Event](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#proceed-process-event) (Kintone Developer Program)
     */
    interface MobileAppRecordDetailProcessProceedEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.detail.process.proceed";
      action: { value: string };
      status: { value: string };
      nextStatus: { value: string };
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Create Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileAppRecordCreateShowEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.create.show";
      appId: number;
      reuse: boolean;
      record: BuildRecordOnCreatePage<AppSchema>;
    }

    /**
     * @see [Record Create Events > Field Change Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#field-change-event) (Kintone Developer Program)
     */
    interface MobileAppRecordCreateChangeEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema,
      TargetField extends string = string
    > {
      type: `mobile.app.record.create.change.${TargetField}`;
      appId: number;
      record: BuildRecordOnCreatePage<AppSchema>;
      changes:
        | { field: ChangedField; row: ChangedRow | null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    }

    /**
     * @see [Record Create Events > Save Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-event) (Kintone Developer Program)
     */
    interface MobileAppRecordCreateSubmitEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.create.submit";
      appId: number;
      record: BuildRecordOnCreatePage<AppSchema>;
    }

    /**
     * @see [Record Create Events > Save Submit Success Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-success-event) (Kintone Developer Program)
     */
    interface MobileAppRecordCreateSubmitSuccessEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.create.submit.success";
      appId: number;
      recordId: string;
      record: BuildRecordOnCreatePage<AppSchema>;
    }

    /**
     * @see [Record Edit Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileAppRecordEditShowEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.edit.show";
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Edit Events > Field Change Event](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#field-change-event) (Kintone Developer Program)
     */
    interface MobileAppRecordEditChangeEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema,
      TargetField extends string = string
    > {
      type: `mobile.app.record.edit.change.${TargetField}`;
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
      changes:
        | { field: ChangedField; row: ChangedRow | null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    }

    /**
     * @see [Record Edit Events > Save Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#save-submit-event) (Kintone Developer Program)
     */
    interface MobileAppRecordEditSubmitEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.edit.submit";
      appId: number;
      recordId: number;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Record Edit Events > Save Submit Success Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-success-event) (Kintone Developer Program)
     */
    interface MobileAppRecordEditSubmitSuccessEvent<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > {
      type: "mobile.app.record.edit.submit.success";
      appId: number;
      recordId: string;
      record: BuildRecord<AppSchema>;
    }

    /**
     * @see [Graph Display Events > Onload Event](https://kintone.dev/en/docs/kintone/js-api/events/graph-display-event/#onload-event) (Kintone Developer Program)
     */
    interface MobileAppReportShowEvent {
      type: "mobile.app.report.show";
      appId: number;
    }

    /**
     * @see [Portal Display Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/portal-display-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobilePortalShowEvent {
      type: "mobile.portal.show";
    }

    /**
     * @see [Space Display Events > Mobile Onload Event](https://kintone.dev/en/docs/kintone/js-api/events/space-display-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileSpacePortalShowEvent {
      type: "mobile.space.portal.show";
      spaceId: string;
    }

    type KintoneEventMap<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema,
      ChangeEventTargetField extends string = string
    > = {
      "app.record.index.show": AppRecordIndexShowEvent<AppSchema>;
      "app.record.index.edit.show": AppRecordIndexEditShowEvent<AppSchema>;
      "app.record.index.edit.submit": AppRecordIndexEditSubmitEvent<AppSchema>;
      "app.record.index.edit.submit.success": AppRecordIndexEditSubmitSuccessEvent<AppSchema>;
      "app.record.index.delete.submit": AppRecordIndexDeleteSubmitEvent<AppSchema>;
      "app.record.detail.show": AppRecordDetailShowEvent<AppSchema>;
      "app.record.detail.delete.submit": AppRecordDetailDeleteSubmitEvent<AppSchema>;
      "app.record.detail.process.proceed": AppRecordDetailProcessProceedEvent<AppSchema>;
      "app.record.create.show": AppRecordCreateShowEvent<AppSchema>;
      "app.record.create.submit": AppRecordCreateSubmitEvent<AppSchema>;
      "app.record.create.submit.success": AppRecordCreateSubmitSuccessEvent<AppSchema>;
      "app.record.edit.show": AppRecordEditShowEvent<AppSchema>;
      "app.record.edit.submit": AppRecordEditSubmitEvent<AppSchema>;
      "app.record.edit.submit.success": AppRecordEditSubmitSuccessEvent<AppSchema>;
      "app.record.print.show": AppRecordPrintShowEvent<AppSchema>;
      "app.report.show": AppReportShowEvent;
      "portal.show": PortalShowEvent;
      "space.portal.show": SpacePortalShowEvent;
      "mobile.app.record.index.show": MobileAppRecordIndexShowEvent;
      "mobile.app.record.detail.show": MobileAppRecordDetailShowEvent<AppSchema>;
      "mobile.app.record.detail.delete.submit": MobileAppRecordDetailDeleteSubmitEvent<AppSchema>;
      "mobile.app.record.detail.process.proceed": MobileAppRecordDetailProcessProceedEvent<AppSchema>;
      "mobile.app.record.create.show": MobileAppRecordCreateShowEvent<AppSchema>;
      "mobile.app.record.create.submit": MobileAppRecordCreateSubmitEvent<AppSchema>;
      "mobile.app.record.create.submit.success": MobileAppRecordCreateSubmitSuccessEvent<AppSchema>;
      "mobile.app.record.edit.show": MobileAppRecordEditShowEvent<AppSchema>;
      "mobile.app.record.edit.submit": MobileAppRecordEditSubmitEvent<AppSchema>;
      "mobile.app.record.edit.submit.success": MobileAppRecordEditSubmitSuccessEvent<AppSchema>;
      "mobile.app.report.show": MobileAppReportShowEvent;
      "mobile.portal.show": MobilePortalShowEvent;
      "mobile.space.portal.show": MobileSpacePortalShowEvent;
    } & KintoneChangeEventMap<AppSchema, ChangeEventTargetField>;

    type KintoneChangeEventMap<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema,
      TargetField extends string = string
    > = {
      [EventType in `app.record.index.edit.change.${TargetField}`]: AppRecordIndexEditChangeEvent<
        AppSchema,
        TargetField
      >;
    } & {
      [EventType in `app.record.create.change.${TargetField}`]: AppRecordCreateChangeEvent<
        AppSchema,
        TargetField
      >;
    } & {
      [EventType in `app.record.edit.change.${TargetField}`]: AppRecordEditChangeEvent<
        AppSchema,
        TargetField
      >;
    } & {
      [EventType in `mobile.app.record.create.change.${TargetField}`]: MobileAppRecordCreateChangeEvent<
        AppSchema,
        TargetField
      >;
    } & {
      [EventType in `mobile.app.record.edit.change.${TargetField}`]: MobileAppRecordEditChangeEvent<
        AppSchema,
        TargetField
      >;
    };

    type KintoneChangeEventTypes<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema,
      TargetField extends string = string
    > = keyof KintoneChangeEventMap<AppSchema, TargetField>;
    type KintoneEventTypes<
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema,
      TargetField extends string = string
    > = keyof KintoneEventMap<AppSchema, TargetField>;

    type KintoneEvent<
      EventType extends KintoneEventTypes | readonly KintoneEventTypes[],
      AppSchema extends KintoneApi.KintoneAppSchema = KintoneApi.KintoneAppSchema
    > = EventType extends ReadonlyArray<
      infer EventTypes extends KintoneEventTypes
    >
      ? KintoneEvent<EventTypes, AppSchema>
      : EventType extends KintoneEventTypes
      ? EventType extends KintoneChangeEventTypes<AppSchema, infer TargetField>
        ? KintoneChangeEventMap<AppSchema, TargetField>[EventType]
        : KintoneEventMap<AppSchema>[EventType]
      : never;

    /**
     * @see [Register Event Handlers](https://kintone.dev/en/docs/kintone/js-api/events/event-handling/#register-event-handlers) (Kintone Developer Program)
     */
    function on<EventType extends KintoneEventTypes>(
      type: EventType | readonly EventType[],
      handler: (event: KintoneEvent<EventType>) => unknown
    ): void;

    /**
     * @see [Register Event Handlers](https://kintone.dev/en/docs/kintone/js-api/events/event-handling/#register-event-handlers) (Kintone Developer Program)
     */
    function on<Event extends KintoneEvent<KintoneEventTypes>>(
      type: Event["type"] | ReadonlyArray<Event["type"]>,
      handler: (event: Event) => unknown
    ): void;

    /**
     * @see [Remove Event Handlers](https://kintone.dev/en/docs/kintone/js-api/events/event-handling/#remove-event-handlers) (Kintone Developer Program)
     */
    function off<EventType extends KintoneEventTypes>(
      type?: EventType | readonly EventType[],
      handler?: (event: KintoneEvent<EventType>) => unknown
    ): boolean;

    /**
     * @see [Remove Event Handlers](https://kintone.dev/en/docs/kintone/js-api/events/event-handling/#remove-event-handlers) (Kintone Developer Program)
     */
    function off<Event extends KintoneEvent<KintoneEventTypes>>(
      type?: Event["type"] | ReadonlyArray<Event["type"]>,
      handler?: (event: Event) => unknown
    ): boolean;

    export {
      AppRecordIndexShowEvent,
      AppRecordIndexShowEventForListView,
      AppRecordIndexShowEventForCalendarView,
      AppRecordIndexShowEventForCustomView,
      AppRecordIndexEditShowEvent,
      AppRecordIndexEditChangeEvent,
      AppRecordIndexEditSubmitEvent,
      AppRecordIndexEditSubmitSuccessEvent,
      AppRecordIndexDeleteSubmitEvent,
      AppRecordDetailShowEvent,
      AppRecordDetailDeleteSubmitEvent,
      AppRecordDetailProcessProceedEvent,
      AppRecordCreateShowEvent,
      AppRecordCreateChangeEvent,
      AppRecordCreateSubmitEvent,
      AppRecordCreateSubmitSuccessEvent,
      AppRecordEditShowEvent,
      AppRecordEditChangeEvent,
      AppRecordEditSubmitEvent,
      AppRecordEditSubmitSuccessEvent,
      AppRecordPrintShowEvent,
      AppReportShowEvent,
      PortalShowEvent,
      SpacePortalShowEvent,
      MobileAppRecordIndexShowEvent,
      MobileAppRecordIndexShowEventForListView,
      MobileAppRecordIndexShowEventForCalendarView,
      MobileAppRecordIndexShowEventForCustomView,
      MobileAppRecordDetailShowEvent,
      MobileAppRecordDetailDeleteSubmitEvent,
      MobileAppRecordDetailProcessProceedEvent,
      MobileAppRecordCreateShowEvent,
      MobileAppRecordCreateChangeEvent,
      MobileAppRecordCreateSubmitEvent,
      MobileAppRecordCreateSubmitSuccessEvent,
      MobileAppRecordEditShowEvent,
      MobileAppRecordEditChangeEvent,
      MobileAppRecordEditSubmitEvent,
      MobileAppRecordEditSubmitSuccessEvent,
      MobileAppReportShowEvent,
      MobilePortalShowEvent,
      MobileSpacePortalShowEvent,
      KintoneEventTypes as EventTypes,
      KintoneEvent as Event,
      on,
      off,
      ChangedField,
      ChangedSubtable,
      ChangedRow,
    };
  }
}

export {};
