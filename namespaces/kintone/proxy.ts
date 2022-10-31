declare global {
  namespace kintone {
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
}

export {};
