import { FieldsMap, InSubtableFieldsMap } from "../../field";

type FieldList = FieldsMap[keyof FieldsMap];
type InSubtableFieldList = InSubtableFieldsMap[keyof InSubtableFieldsMap];

type ChangeEventSupported<
  FieldMap extends {
    supported: { change: boolean };
  }
> = FieldMap extends unknown
  ? FieldMap["supported"]["change"] extends true
    ? FieldMap
    : never
  : never;

type CreatePageSupported<
  FieldMap extends {
    supported: { createPage: boolean };
  }
> = FieldMap extends unknown
  ? FieldMap["supported"]["createPage"] extends true
    ? FieldMap
    : never
  : never;

export {
  FieldList,
  InSubtableFieldList,
  ChangeEventSupported,
  CreatePageSupported,
};
