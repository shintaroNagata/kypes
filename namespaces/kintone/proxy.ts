declare global {
  namespace kintone {
    function proxy(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, string> | string
    ): Promise<[string, number, Record<string, string | undefined>]>;

    function proxy(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE",
      headers: Record<string, string>,
      data: Record<string, string> | string,
      successCallback: (
        responseBody: string,
        statusCode: number,
        responseHeader: Record<string, string | undefined>
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
        value: unknown;
      }
    ): Promise<[string, number, Record<string, string | undefined>]>;
    function upload(
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
        responseHeader: Record<string, string | undefined>
      ) => void,
      failureCallback?: (errorResponseBody: string) => void
    ): void;
  }
}

export {};
