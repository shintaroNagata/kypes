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
      AppSchema extends KintoneApi.KintoneAppSchema,
      Endpoint extends keyof KintoneApi.SchemaMap<AppSchema>,
      Method extends keyof KintoneApi.SchemaMap<AppSchema>[Endpoint],
      Params extends Extract<
        KintoneApi.SchemaMap<AppSchema>[Endpoint][Method],
        ApiSchema
      >["request"],
      Response extends Extract<
        KintoneApi.SchemaMap<AppSchema>[Endpoint][Method],
        ApiSchema
      >["response"]
    >(
      pathOrUrl:
        | KintoneApi.Path<Endpoint>
        | KintoneApi.GuestPath<Endpoint>
        | Url<KintoneApi.Path<Endpoint> | KintoneApi.GuestPath<Endpoint>>,
      method: Method,
      params: Params
    ): Promise<Response>;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      AppSchema extends KintoneApi.KintoneAppSchema,
      Endpoint extends keyof KintoneApi.SchemaMap<AppSchema>,
      Method extends Extract<
        keyof KintoneApi.SchemaMap<AppSchema>[Endpoint],
        "GET"
      >,
      Response extends Extract<
        KintoneApi.SchemaMap<AppSchema>[Endpoint][Method],
        ApiSchema
      >["response"]
    >(
      pathOrUrl: QueriedUrl<
        KintoneApi.Path<Endpoint> | KintoneApi.GuestPath<Endpoint>
      >,
      method: Method,
      params: Record<string, never>
    ): Promise<Response>;

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
      AppSchema extends KintoneApi.KintoneAppSchema,
      Endpoint extends keyof KintoneApi.SchemaMap<AppSchema>,
      Method extends keyof KintoneApi.SchemaMap<AppSchema>[Endpoint],
      Params extends Extract<
        KintoneApi.SchemaMap<AppSchema>[Endpoint][Method],
        ApiSchema
      >["request"],
      Response extends Extract<
        KintoneApi.SchemaMap<AppSchema>[Endpoint][Method],
        ApiSchema
      >["response"]
    >(
      pathOrUrl:
        | KintoneApi.Path<Endpoint>
        | KintoneApi.GuestPath<Endpoint>
        | Url<KintoneApi.Path<Endpoint> | KintoneApi.GuestPath<Endpoint>>,
      method: Method,
      params: Params,
      callback: (response: Response) => void,
      errback?: (errorResponse: Record<string, unknown> | string) => void
    ): void;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      AppSchema extends KintoneApi.KintoneAppSchema,
      Endpoint extends keyof KintoneApi.SchemaMap<AppSchema>,
      Method extends Extract<
        keyof KintoneApi.SchemaMap<AppSchema>[Endpoint],
        "GET"
      >,
      Response extends Extract<
        KintoneApi.SchemaMap<AppSchema>[Endpoint][Method],
        ApiSchema
      >["response"]
    >(
      pathOrUrl: QueriedUrl<
        KintoneApi.Path<Endpoint> | KintoneApi.GuestPath<Endpoint>
      >,
      method: Method,
      params: Record<string, never>,
      callback: (response: Response) => void,
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
    function url<
      AppSchema extends KintoneApi.KintoneAppSchema,
      Endpoint extends keyof KintoneApi.SchemaMap<AppSchema>
    >(
      path: KintoneApi.Path<Endpoint>,
      detectGuestSpace?: boolean
    ): Url<KintoneApi.Path<Endpoint> | KintoneApi.GuestPath<Endpoint>>;

    /**
     * @see [Get URL](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#get-url) (Kintone Developer Program)
     */
    function url(path: string, detectGuestSpace?: boolean): string;

    /**
     * @see [Get URL (including query)](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#get-url-including-query) (Kintone Developer Program)
     */
    function urlForGet<
      AppSchema extends KintoneApi.KintoneAppSchema,
      Endpoint extends keyof KintoneApi.SchemaMap<AppSchema>,
      Params extends Extract<
        KintoneApi.SchemaMap<AppSchema>[Endpoint][Extract<
          keyof KintoneApi.SchemaMap<AppSchema>[Endpoint],
          "GET"
        >],
        ApiSchema
      >["request"]
    >(
      path: KintoneApi.Path<Endpoint>,
      params: Params,
      detectGuestSpace?: boolean
    ): QueriedUrl<KintoneApi.Path<Endpoint> | KintoneApi.GuestPath<Endpoint>>;

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
    function get(): { record: KintoneRecord } | null;

    /**
     * @see [Set Record Value](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#set-record-value) (Kintone Developer Program)
     */
    function set(recordObject: { record: KintoneRecordForSet }): void;

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
    function get(): { record: KintoneRecord } | null;

    /**
     * @see [Set Record Value](https://kintone.dev/en/docs/kintone/js-api/get-data/get-record/#set-record-value) (Kintone Developer Program)
     */
    function set(recordObject: { record: KintoneRecordForSet }): void;

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
    interface AppRecordIndexShowEventForListView {
      type: "app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "list";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
    }

    /**
     * @see [Record List Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordIndexShowEventForCalendarView {
      type: "app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: { [date in `${number}-${string}-${string}`]: KintoneRecord[] };
    }

    /**
     * @see [Record List Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordIndexShowEventForCustomView {
      type: "app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
    }

    /**
     * @see [Record List Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-desktop) (Kintone Developer Program)
     */
    type AppRecordIndexShowEvent =
      | AppRecordIndexShowEventForListView
      | AppRecordIndexShowEventForCalendarView
      | AppRecordIndexShowEventForCustomView;

    /**
     * @see [Record List Events > Inline Edit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#inline-edit-event) (Kintone Developer Program)
     */
    interface AppRecordIndexEditShowEvent {
      type: "app.record.index.edit.show";
      appId: number;
      recordId: string;
      record: KintoneRecord;
    }

    /**
     * @see [Record List Events > Field Change Event](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#field-change-event) (Kintone Developer Program)
     */
    interface AppRecordIndexEditChangeEvent {
      type: `app.record.index.edit.change.${string}`;
      appId: string;
      recordId: string;
      record: KintoneRecord;
      changes: {
        field: ChangedField;
      };
    }

    /**
     * @see [Record List Events > Save Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#save-submit-event) (Kintone Developer Program)
     */
    interface AppRecordIndexEditSubmitEvent {
      type: "app.record.index.edit.submit";
      appId: string;
      recordId: string;
      record: KintoneRecord;
    }

    /**
     * @see [Save Submit Success Event](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#save-submit-success-event) (Kintone Developer Program)
     */
    interface AppRecordIndexEditSubmitSuccessEvent {
      type: "app.record.index.edit.submit.success";
      appId: number;
      recordId: string;
      record: KintoneRecord;
    }

    /**
     * @see [Delete Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#delete-submit-event) (Kintone Developer Program)
     */
    interface AppRecordIndexDeleteSubmitEvent {
      type: "app.record.index.delete.submit";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    }

    /**
     * @see [Record Details Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordDetailShowEvent {
      type: "app.record.detail.show";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    }

    /**
     * @see [Record Details Events > Delete Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#delete-submit-event) (Kintone Developer Program)
     */
    interface AppRecordDetailDeleteSubmitEvent {
      type: "app.record.detail.delete.submit";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    }

    /**
     * @see [Proceed Process Event](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#proceed-process-event) (Kintone Developer Program)
     */
    interface AppRecordDetailProcessProceedEvent {
      type: "app.record.detail.process.proceed";
      action: { value: string };
      status: { value: string };
      nextStatus: { value: string };
      record: KintoneRecord;
    }

    /**
     * @see [Record Create Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordCreateShowEvent {
      type: "app.record.create.show";
      appId: number;
      reuse: boolean;
      record: KintoneRecordOnCreatePage;
    }

    /**
     * @see [Record Create Events > Field Change Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#field-change-event) (Kintone Developer Program)
     */
    interface AppRecordCreateChangeEvent {
      type: `app.record.create.change.${string}`;
      appId: number;
      record: KintoneRecordOnCreatePage;
      changes:
        | { field: ChangedField; row: ChangedRow | null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    }

    /**
     * @see [Record Create Events > Save Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-event) (Kintone Developer Program)
     */
    interface AppRecordCreateSubmitEvent {
      type: "app.record.create.submit";
      appId: number;
      record: KintoneRecordOnCreatePage;
    }

    /**
     * @see [Record Create Events > Save Submit Success Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-success-event) (Kintone Developer Program)
     */
    interface AppRecordCreateSubmitSuccessEvent {
      type: "app.record.create.submit.success";
      appId: number;
      recordId: string;
      record: KintoneRecordOnCreatePage;
    }

    /**
     * @see [Record Edit Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordEditShowEvent {
      type: "app.record.edit.show";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    }

    /**
     * @see [Record Edit Events > Field Change Event](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#field-change-event) (Kintone Developer Program)
     */
    interface AppRecordEditChangeEvent {
      type: `app.record.edit.change.${string}`;
      appId: number;
      recordId: number;
      record: KintoneRecord;
      changes:
        | { field: ChangedField; row: ChangedRow | null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    }

    /**
     * @see [Record Edit Events > Save Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#save-submit-event) (Kintone Developer Program)
     */
    interface AppRecordEditSubmitEvent {
      type: "app.record.edit.submit";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    }

    /**
     * @see [Record Edit Events > Save Submit Success Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-success-event) (Kintone Developer Program)
     */
    interface AppRecordEditSubmitSuccessEvent {
      type: "app.record.edit.submit.success";
      appId: number;
      recordId: string;
      record: KintoneRecord;
    }

    /**
     * @see [Record Print Events > Onload Event (desktop)](https://kintone.dev/en/docs/kintone/js-api/events/record-print-event/#onload-event-desktop) (Kintone Developer Program)
     */
    interface AppRecordPrintShowEvent {
      type: "app.record.print.show";
      appId: number;
      recordId: number;
      record: KintoneRecord;
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
    interface MobileAppRecordIndexShowEventForListView {
      type: "mobile.app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "list";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
    }

    /**
     * @see [Record List Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileAppRecordIndexShowEventForCalendarView {
      type: "mobile.app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: { [date in `${number}-${string}-${string}`]: KintoneRecord[] };
    }

    /**
     * @see [Record List Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-list-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileAppRecordIndexShowEventForCustomView {
      type: "mobile.app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
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
    interface MobileAppRecordDetailShowEvent {
      type: "mobile.app.record.detail.show";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    }

    /**
     * @see [Record Details Events > Delete Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#delete-submit-event) (Kintone Developer Program)
     */
    interface MobileAppRecordDetailDeleteSubmitEvent {
      type: "mobile.app.record.detail.delete.submit";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    }

    /**
     * @see [Record Details Events > Proceed Process Event](https://kintone.dev/en/docs/kintone/js-api/events/record-details-event/#proceed-process-event) (Kintone Developer Program)
     */
    interface MobileAppRecordDetailProcessProceedEvent {
      type: "mobile.app.record.detail.process.proceed";
      action: { value: string };
      status: { value: string };
      nextStatus: { value: string };
      record: KintoneRecord;
    }

    /**
     * @see [Record Create Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileAppRecordCreateShowEvent {
      type: "mobile.app.record.create.show";
      appId: number;
      reuse: boolean;
      record: KintoneRecordOnCreatePage;
    }

    /**
     * @see [Record Create Events > Field Change Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#field-change-event) (Kintone Developer Program)
     */
    interface MobileAppRecordCreateChangeEvent {
      type: `mobile.app.record.create.change.${string}`;
      appId: number;
      record: KintoneRecordOnCreatePage;
      changes:
        | { field: ChangedField; row: ChangedRow | null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    }

    /**
     * @see [Record Create Events > Save Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-event) (Kintone Developer Program)
     */
    interface MobileAppRecordCreateSubmitEvent {
      type: "mobile.app.record.create.submit";
      appId: number;
      record: KintoneRecordOnCreatePage;
    }

    /**
     * @see [Record Create Events > Save Submit Success Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-success-event) (Kintone Developer Program)
     */
    interface MobileAppRecordCreateSubmitSuccessEvent {
      type: "mobile.app.record.create.submit.success";
      appId: number;
      recordId: string;
      record: KintoneRecordOnCreatePage;
    }

    /**
     * @see [Record Edit Events > Onload Event (mobile)](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#onload-event-mobile) (Kintone Developer Program)
     */
    interface MobileAppRecordEditShowEvent {
      type: "mobile.app.record.edit.show";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    }

    /**
     * @see [Record Edit Events > Field Change Event](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#field-change-event) (Kintone Developer Program)
     */
    interface MobileAppRecordEditChangeEvent {
      type: `mobile.app.record.edit.change.${string}`;
      appId: number;
      recordId: number;
      record: KintoneRecord;
      changes:
        | { field: ChangedField; row: ChangedRow | null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    }

    /**
     * @see [Record Edit Events > Save Submit Event](https://kintone.dev/en/docs/kintone/js-api/events/record-edit-event/#save-submit-event) (Kintone Developer Program)
     */
    interface MobileAppRecordEditSubmitEvent {
      type: "mobile.app.record.edit.submit";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    }

    /**
     * @see [Record Edit Events > Save Submit Success Event](https://kintone.dev/en/docs/kintone/js-api/events/record-create-event/#save-submit-success-event) (Kintone Developer Program)
     */
    interface MobileAppRecordEditSubmitSuccessEvent {
      type: "mobile.app.record.edit.submit.success";
      appId: number;
      recordId: string;
      record: KintoneRecord;
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

    type KintoneEventMap = {
      "app.record.index.show": AppRecordIndexShowEvent;
      "app.record.index.edit.show": AppRecordIndexEditShowEvent;
      [
        key: `app.record.index.edit.change.${string}`
      ]: AppRecordIndexEditChangeEvent;
      "app.record.index.edit.submit": AppRecordIndexEditSubmitEvent;
      "app.record.index.edit.submit.success": AppRecordIndexEditSubmitSuccessEvent;
      "app.record.index.delete.submit": AppRecordIndexDeleteSubmitEvent;
      "app.record.detail.show": AppRecordDetailShowEvent;
      "app.record.detail.delete.submit": AppRecordDetailDeleteSubmitEvent;
      "app.record.detail.process.proceed": AppRecordDetailProcessProceedEvent;
      "app.record.create.show": AppRecordCreateShowEvent;
      [
        eventType: `app.record.create.change.${string}`
      ]: AppRecordCreateChangeEvent;
      "app.record.create.submit": AppRecordCreateSubmitEvent;
      "app.record.create.submit.success": AppRecordCreateSubmitSuccessEvent;
      "app.record.edit.show": AppRecordEditShowEvent;
      [eventType: `app.record.edit.change.${string}`]: AppRecordEditChangeEvent;
      "app.record.edit.submit": AppRecordEditSubmitEvent;
      "app.record.edit.submit.success": AppRecordEditSubmitSuccessEvent;
      "app.record.print.show": AppRecordPrintShowEvent;
      "app.report.show": AppReportShowEvent;
      "portal.show": PortalShowEvent;
      "space.portal.show": SpacePortalShowEvent;
      "mobile.app.record.index.show": MobileAppRecordIndexShowEvent;
      "mobile.app.record.detail.show": MobileAppRecordDetailShowEvent;
      "mobile.app.record.detail.delete.submit": MobileAppRecordDetailDeleteSubmitEvent;
      "mobile.app.record.detail.process.proceed": MobileAppRecordDetailProcessProceedEvent;
      "mobile.app.record.create.show": MobileAppRecordCreateShowEvent;
      [
        eventType: `mobile.app.record.create.change.${string}`
      ]: MobileAppRecordCreateChangeEvent;
      "mobile.app.record.create.submit": MobileAppRecordCreateSubmitEvent;
      "mobile.app.record.create.submit.success": MobileAppRecordCreateSubmitSuccessEvent;
      "mobile.app.record.edit.show": MobileAppRecordEditShowEvent;
      [
        eventType: `mobile.app.record.edit.change.${string}`
      ]: MobileAppRecordEditChangeEvent;
      "mobile.app.record.edit.submit": MobileAppRecordEditSubmitEvent;
      "mobile.app.record.edit.submit.success": MobileAppRecordEditSubmitSuccessEvent;
      "mobile.app.report.show": MobileAppReportShowEvent;
      "mobile.portal.show": MobilePortalShowEvent;
      "mobile.space.portal.show": MobileSpacePortalShowEvent;
    };

    type KintoneEventTypes = keyof KintoneEventMap;

    type KintoneEvent<EventType extends KintoneEventTypes> =
      EventType extends unknown
        ? { type: EventType } & KintoneEventMap[EventType]
        : never;

    /**
     * @see [Register Event Handlers](https://kintone.dev/en/docs/kintone/js-api/events/event-handling/#register-event-handlers) (Kintone Developer Program)
     */
    function on<T extends KintoneEventTypes>(
      type: T | T[],
      handler: (event: KintoneEvent<T>) => unknown
    ): void;

    /**
     * @see [Remove Event Handlers](https://kintone.dev/en/docs/kintone/js-api/events/event-handling/#remove-event-handlers) (Kintone Developer Program)
     */
    function off<T extends KintoneEventTypes>(
      type?: T | T[],
      handler?: (event: KintoneEvent<T>) => unknown
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
