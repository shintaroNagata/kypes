import { Endpoints } from "../temporal";
import { Methods } from "../http";

interface ApiSchema {
  parameters: Record<string, unknown>;
  response: Record<string, unknown>;
}

type EndpointSchema = {
  [Method in Methods]?: ApiSchema;
};

type EndpointsSchema = {
  [Endpoint in Endpoints]: EndpointSchema;
};

export { ApiSchema, EndpointSchema, EndpointsSchema };
