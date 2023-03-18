import type {
  SubtableProperty,
  KintoneFormProperty,
  SubtablePropertyForAdd,
  KintoneFormPropertyForAdd,
  SubtablePropertyForUpdate,
  KintoneFormPropertyForUpdate,
  FieldPropertyMap,
} from "./properties";
import type { KintoneFormLayout, KintoneFormLayoutForUpdate } from "./layout";

type KintoneAppSchema = {
  properties: KintoneFormProperty;
};

export type {
  SubtableProperty,
  KintoneFormProperty,
  SubtablePropertyForAdd,
  KintoneFormPropertyForAdd,
  SubtablePropertyForUpdate,
  KintoneFormPropertyForUpdate,
  FieldPropertyMap,
  KintoneFormLayout,
  KintoneFormLayoutForUpdate,
  KintoneAppSchema,
};
