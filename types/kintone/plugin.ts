declare global {
  namespace kintone.plugin.app {
    function setConfig(
      config: { [Key in string]?: string },
      successCallback?: () => void
    ): void;
    function getConfig(pluginId: string): { [Key in string]?: string };
    function proxy(
      pluginId: string,
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: { [Key: string]: string },
      data: { [Key: string]: string } | string
    ): Promise<[string, number, { [Key in string]?: string }]>;
    function proxy(
      pluginId: string,
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: { [Key: string]: string },
      data: { [Key: string]: string } | string,
      successCallback: (
        responseBody: string,
        statusCode: number,
        responseHeader: { [Key in string]?: string }
      ) => void,
      failureCallback?: (errorResponseBody: string) => void
    ): void;

    function setProxyConfig(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: { [Key: string]: string },
      data: { [Key: string]: string },
      successCallback?: () => void
    ): void;
    function getProxyConfig(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE"
    ): {
      headers: { [Key in string]?: string };
      data: { [Key in string]?: string };
    };
  }
  namespace kintone.plugin.app.proxy {
    function upload(
      pluginId: string,
      url: string,
      method: "POST" | "PUT",
      headers: { [Key: string]: string },
      data: {
        format: "RAW";
        value: unknown;
      }
    ): Promise<[string, number, { [Key in string]?: string }]>;
    function upload(
      pluginId: string,
      url: string,
      method: "POST" | "PUT",
      headers: { [Key: string]: string },
      data: {
        format: "RAW";
        value: unknown;
      },
      successCallback: (
        responseBody: string,
        statusCode: number,
        responseHeader: { [Key in string]?: string }
      ) => void,
      failureCallback?: (errorResponseBody: string) => void
    ): void;
  }
}

export {};
