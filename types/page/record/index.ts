import { FieldTypes, FieldValue, Supported } from "./field";

type KintoneRecord = {
  $id: FieldValue["__ID__"]["get"];
  $revision: FieldValue["__REVISION__"]["get"];
  [fieldCode: string]:
    | FieldValue[FieldTypes]["get"]
    | {
        type: "SUBTABLE";
        value: Array<{
          id: string | null;
          value: {
            [fieldCode: string]: FieldValue[Supported["InSubtable"]]["get"];
          };
        }>;
      };
};

type KintoneRecordOnCreatePage = {
  [fieldCode: string]:
    | FieldValue[Supported["CreatePage"]]["get"]
    | {
        type: "SUBTABLE";
        value: Array<{
          id: null;
          value: {
            [fieldCode: string]: FieldValue[Supported["CreatePage"] &
              Supported["InSubtable"]]["get"];
          };
        }>;
      };
};

type KintoneRecordForSet = {
  [fieldCode: string]:
    | FieldValue[FieldTypes]["set"]
    | {
        type: "SUBTABLE";
        value: Array<{
          id: string | null;
          value: {
            [fieldCode: string]: FieldValue[Supported["InSubtable"]]["set"];
          };
        }>;
      };
};

type ChangedField = FieldValue[Supported["ChangeEvent"]]["get"];
type ChangedSubtable = {
  type: "SUBTABLE";
  value: Array<{
    id: string | null;
    value: {
      [fieldCode: string]: FieldValue[Supported["InSubtable"]]["get"];
    };
  }>;
};
type ChangedRow = {
  type: "SUBTABLE";
  value: Array<{
    id: string | null;
    value: {
      [fieldCode: string]: FieldValue[Supported["InSubtable"]]["get"];
    };
  }>;
};

export {
  KintoneRecord,
  KintoneRecordForSet,
  KintoneRecordOnCreatePage,
  ChangedField,
  ChangedSubtable,
  ChangedRow,
};
