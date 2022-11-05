import { KintoneRecord, KintoneRecordForSet } from "./page";
import {
  ChangedField,
  ChangedRow,
  ChangedSubtable,
  KintoneRecordOnCreatePage,
} from "./page/record";
import {
  EnableMethods,
  Endpoints,
  Request,
  PathFor,
  Response,
  UrlFor,
  WithQuery,
} from "./rest";

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
      Endpoint extends Endpoints,
      Method extends EnableMethods<Endpoint>
    >(
      pathOrUrl: PathFor<Endpoint> | UrlFor<Endpoint>,
      method: Method,
      params: Request<Endpoint, Method>
    ): Promise<Response<Endpoint, Method>>;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
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
      Endpoint extends Endpoints,
      Method extends EnableMethods<Endpoint>
    >(
      pathOrUrl: PathFor<Endpoint> | UrlFor<Endpoint>,
      method: Method,
      params: Request<Endpoint, Method>,
      callback: (response: Response<Endpoint, Method>) => void,
      errback?: (errorResponse: Record<string, unknown> | string) => void
    ): void;

    /**
     * @see [Kintone REST API Request](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#kintone-rest-api-request) (Kintone Developer Program)
     */
    function api<
      Endpoint extends Endpoints,
      Method extends Extract<EnableMethods<Endpoint>, "GET">
    >(
      pathOrUrl: WithQuery<UrlFor<Endpoint>>,
      method: Method,
      params: Record<string, never>,
      callback: (response: Response<Endpoint, Method>) => void,
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
      data: Record<string, never> | string
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
      data: Record<string, never> | string,
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
    function getQueryCondition(): string | null;
    function getQuery(): string | null;
    function getId(): number | null;
    function getLookupTargetAppId(fieldCode: string): number | null;
    function getRelatedRecordsTargetAppId(fieldCode: string): number | null;
    function getFieldElements(fieldCode: string): HTMLElement[] | null;
    function getHeaderMenuSpaceElement(): HTMLElement | null;
    function getHeaderSpaceElement(): HTMLElement | null;
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

  namespace kintone.mobile.app.record {
    function getId(): number | null;
    function get(): KintoneRecord | null;
    function set(recordObject: { record: KintoneRecordForSet }): void;
    function setFieldShown(fieldCode: string, isShown: boolean): void;
    function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void;
    function getFieldElement(fieldCode: string): HTMLElement | null;
    function getSpaceElement(id: string): HTMLElement | null;
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
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, string> | string
    ): Promise<[string, number, Record<string, string>]>;

    /**
     * @see [Kintone Plug-in Proxy](https://kintone.dev/en/docs/kintone/js-api/plugin/plug-in-javascript-api/#kintone-plug-in-proxy) (Kintone Developer Program)
     */
    function proxy(
      pluginId: string,
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, string> | string,
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
      data: Record<string, string>,
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
      data: Record<string, string>;
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
        value: unknown;
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

  namespace kintone.api {
    /**
     * @see [Get URL](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#get-url) (Kintone Developer Program)
     */
    function url<Endpoint extends Endpoints>(
      path: PathFor<Endpoint>,
      detectGuestSpace?: boolean
    ): UrlFor<Endpoint>;

    /**
     * @see [Get URL](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#get-url) (Kintone Developer Program)
     */
    function url(path: string, detectGuestSpace?: boolean): string;

    /**
     * @see [Get URL (including query)](https://kintone.dev/en/docs/kintone/js-api/other/kintone-rest-api-request/#get-url-including-query) (Kintone Developer Program)
     */
    function urlForGet<Endpoint extends Endpoints>(
      path: PathFor<Endpoint>,
      params: Request<Endpoint, Extract<EnableMethods<Endpoint>, "GET">>,
      detectGuestSpace?: boolean
    ): WithQuery<UrlFor<Endpoint>>;

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

    export { url, urlForGet, getConcurrencyLimit, Request, Response };
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

  namespace kintone.events {
    type AppRecordIndexShowEventForListView = {
      type: "app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "list";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
    };

    type AppRecordIndexShowEventForCalendarView = {
      type: "app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: { [date in `${number}-${string}-${string}`]: KintoneRecord[] };
    };

    type AppRecordIndexShowEventForCustomView = {
      type: "app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
    };

    type AppRecordIndexShowEvent =
      | AppRecordIndexShowEventForListView
      | AppRecordIndexShowEventForCalendarView
      | AppRecordIndexShowEventForCustomView;

    type AppRecordIndexEditShowEvent = {
      type: "app.record.index.edit.show";
      appId: number;
      recordId: string;
      record: KintoneRecord;
    };

    type AppRecordIndexEditChangeEvent = {
      type: `app.record.index.edit.change.${string}`;
      appId: string;
      recordId: string;
      record: KintoneRecord;
      changes: {
        field: ChangedField;
      };
    };

    type AppRecordIndexEditSubmitEvent = {
      type: "app.record.index.edit.submit";
      appId: string;
      recordId: string;
      record: KintoneRecord;
    };

    type AppRecordIndexEditSubmitSuccessEvent = {
      type: "app.record.index.edit.submit.success";
      appId: number;
      recordId: string;
      record: KintoneRecord;
    };

    type AppRecordIndexDeleteSubmitEvent = {
      type: "app.record.index.delete.submit";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    };

    type AppRecordDetailShowEvent = {
      type: "app.record.detail.show";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    };

    type AppRecordDetailDeleteSubmitEvent = {
      type: "app.record.detail.delete.submit";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    };

    type AppRecordDetailProcessProceedEvent = {
      type: "app.record.detail.process.proceed";
      action: { value: string };
      status: { value: string };
      nextStatus: { value: string };
      record: KintoneRecord;
    };

    type AppRecordCreateShowEvent = {
      type: "app.record.create.show";
      appId: number;
      reuse: boolean;
      record: KintoneRecordOnCreatePage;
    };

    type AppRecordCreateChangeEvent = {
      type: `app.record.create.change.${string}`;
      appId: number;
      record: KintoneRecordOnCreatePage;
      changes:
        | { field: ChangedField; row: null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    };

    type AppRecordCreateSubmitEvent = {
      type: "app.record.create.submit";
      appId: number;
      record: KintoneRecordOnCreatePage;
    };
    type AppRecordCreateSubmitSuccessEvent = {
      type: "app.record.create.submit.success";
      appId: number;
      recordId: string;
      record: KintoneRecordOnCreatePage;
    };

    type AppRecordEditShowEvent = {
      type: "app.record.edit.show";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    };

    type AppRecordEditChangeEvent = {
      type: `app.record.edit.change.${string}`;
      appId: number;
      recordId: number;
      record: KintoneRecord;
      changes:
        | { field: ChangedField; row: null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    };

    type AppRecordEditSubmitEvent = {
      type: "app.record.edit.submit";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    };

    type AppRecordEditSubmitSuccessEvent = {
      type: "app.record.edit.submit.success";
      appId: number;
      recordId: string;
      record: KintoneRecord;
    };

    type AppRecordPrintShowEvent = {
      type: "app.record.print.show";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    };

    type AppReportShowEvent = { type: "app.report.show"; appId: number };

    type PortalShowEvent = { type: "portal.show" };

    type SpacePortalShowEvent = { type: "space.portal.show"; spaceId: string };

    type MobileAppRecordIndexShowEventListView = {
      type: "mobile.app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "list";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
    };
    type MobileAppRecordIndexShowEventCalendarView = {
      type: "mobile.app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: { [date in `${number}-${string}-${string}`]: KintoneRecord[] };
    };
    type MobileAppRecordIndexShowEventCustomView = {
      type: "mobile.app.record.index.show";
      appId: number;
      viewId: number;
      viewName: string;
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
    };

    type MobileAppRecordIndexShowEvent =
      | MobileAppRecordIndexShowEventListView
      | MobileAppRecordIndexShowEventCalendarView
      | MobileAppRecordIndexShowEventCustomView;

    type MobileAppRecordDetailShowEvent = {
      type: "mobile.app.record.detail.show";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    };

    type MobileAppRecordDetailDeleteSubmitEvent = {
      type: "mobile.app.record.detail.delete.submit";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    };

    type MobileAppRecordDetailProcessProceedEvent = {
      type: "mobile.app.record.detail.process.proceed";
      action: { value: string };
      status: { value: string };
      nextStatus: { value: string };
      record: KintoneRecord;
    };

    type MobileAppRecordCreateShowEvent = {
      type: "mobile.app.record.create.show";
      appId: number;
      reuse: boolean;
      record: KintoneRecordOnCreatePage;
    };

    type MobileAppRecordCreateChangeEvent = {
      type: `mobile.app.record.create.change.${string}`;
      appId: number;
      record: KintoneRecordOnCreatePage;
      changes:
        | { field: ChangedField; row: null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    };

    type MobileAppRecordCreateSubmitEvent = {
      type: "mobile.app.record.create.submit";
      appId: number;
      record: KintoneRecordOnCreatePage;
    };

    type MobileAppRecordCreateSubmitSuccessEvent = {
      type: "mobile.app.record.create.submit.success";
      appId: number;
      recordId: string;
      record: KintoneRecordOnCreatePage;
    };

    type MobileAppRecordEditShowEvent = {
      type: "mobile.app.record.edit.show";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    };

    type MobileAppRecordEditChangeEvent = {
      type: `mobile.app.record.edit.change.${string}`;
      appId: number;
      recordId: number;
      record: KintoneRecord;
      changes:
        | { field: ChangedField; row: null }
        | { field: ChangedSubtable; row: ChangedRow | null };
    };

    type MobileAppRecordEditSubmitEvent = {
      type: "mobile.app.record.edit.submit";
      appId: number;
      recordId: number;
      record: KintoneRecord;
    };

    type MobileAppRecordEditSubmitSuccessEvent = {
      type: "mobile.app.record.edit.submit.success";
      appId: number;
      recordId: string;
      record: KintoneRecord;
    };

    type MobileAppReportShowEvent = {
      type: "mobile.app.report.show";
      appId: number;
    };

    type MobilePortalShowEvent = { type: "mobile.portal.show" };

    type MobileSpacePortalShowEvent = {
      type: "mobile.space.portal.show";
      spaceId: string;
    };

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
  }
}

export {};
