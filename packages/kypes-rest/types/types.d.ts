type ApiSchema = {
  path: `/${string}`;
  method: "GET" | "PUT" | "POST" | "DELETE";
  request: Record<string, unknown>;
  response: Record<string, unknown>;
};

export type { ApiSchema };
