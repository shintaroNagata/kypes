import type { Schema as FieldsApiSchema } from "./fields";
import type { Schema as LayoutApiSchema } from "./layout";

type Schema = FieldsApiSchema & LayoutApiSchema;

export type { Schema };
