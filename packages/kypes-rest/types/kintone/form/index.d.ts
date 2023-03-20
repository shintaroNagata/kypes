import type {
  KintoneFormProperty,
  KintoneFormPropertyForAdd,
  KintoneFormPropertyForUpdate,
} from "./properties";
import type { KintoneFormLayout, KintoneFormLayoutForUpdate } from "./layout";

type KintoneAppSchema = {
  properties: KintoneFormProperty;
};

export type {
  KintoneFormProperty,
  KintoneFormPropertyForAdd,
  KintoneFormPropertyForUpdate,
  KintoneFormLayout,
  KintoneFormLayoutForUpdate,
  KintoneAppSchema,
};
