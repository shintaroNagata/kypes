declare global {
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
}

export {};
