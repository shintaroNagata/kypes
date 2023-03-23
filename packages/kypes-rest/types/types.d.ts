type ApiSchema = {
  path: string;
  method: string;
  request: Record<string, unknown>;
  response: Record<string, unknown>;
};

export type { ApiSchema };
