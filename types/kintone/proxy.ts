declare global {
  namespace kintone {
    function proxy(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: any,
      data: any
    ): Promise<any>;
  }
  namespace kintone.proxy {
    function upload(
      url: string,
      method: "POST" | "PUT",
      headers: any,
      data: any
    ): Promise<any>;
  }
}

export {};
