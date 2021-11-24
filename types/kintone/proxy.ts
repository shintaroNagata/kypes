declare global {
  namespace kintone {
    function proxy(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: { [Key: string]: string },
      data: { [Key: string]: string } | string
    ): Promise<[string, number, { [Key in string]?: string }]>;

    function proxy(
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
  }
  namespace kintone.proxy {
    function upload(
      url: string,
      method: "POST" | "PUT",
      headers: { [Key: string]: string },
      data: {
        format: "RAW";
        value: unknown;
      }
    ): Promise<[string, number, { [Key in string]?: string }]>;
    function upload(
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
