declare global {
  namespace kintone.plugin.app {
    function setConfig(config: any, successCallback?: () => any): void;
    function getConfig(pluginId: string): any;
    function proxy(
      pluginId: string,
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: any,
      data: any
    ): Promise<any>;
    function setProxyConfig(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: any,
      data: any,
      successCallback?: () => any
    ): void;
    function getProxyConfig(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE"
    ): any;
  }
  namespace kintone.plugin.app.proxy {
    function upload(
      pluginId: string,
      url: string,
      method: "POST" | "PUT",
      headers: any,
      data: any
    ): Promise<any>;
  }
}

export {};
