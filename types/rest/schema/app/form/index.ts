import { Schema as FieldsApiSchema } from "./fields";
import { Schema as LayoutApiSchema } from "./layout";

type Schema = FieldsApiSchema & LayoutApiSchema;

export { Schema };
