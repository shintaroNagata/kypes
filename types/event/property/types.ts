import { FieldsMap, InSubtableFieldsMap, Subtable } from "../../field";

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

type RecordObject = {
  [fieldCode: string]:
    | FieldList["record"]["get"]
    | Subtable<{
        [fieldCode: string]: InSubtableFieldList["record"]["get"];
      }>["record"]["get"];
};

type CreatePageRecordObject = {
  [fieldCode: string]:
    | CreatePageSupported<FieldList>["record"]["get"]
    | Subtable<{
        [
          fieldCode: string
        ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
      }>["record"]["get"];
};

type ChangedField = ChangeEventSupported<FieldList>["record"]["get"];

type ChangedSubtable = Subtable<{
  [fieldCode: string]: InSubtableFieldList["record"]["get"];
}>["record"]["get"];

type ChangedRow =
  | Subtable<{
      [fieldCode: string]: InSubtableFieldList["record"]["get"];
    }>["record"]["get"]["value"][number];

export {
  RecordObject,
  CreatePageRecordObject,
  ChangedField,
  ChangedSubtable,
  ChangedRow,
};
