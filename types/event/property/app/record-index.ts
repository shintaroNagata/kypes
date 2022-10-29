import { Subtable } from "../../../field";
import { ChangeEventSupported, FieldList, InSubtableFieldList } from "../types";

type ShowEvent = {
  appId: number;
  viewId: number;
  viewName: string;
} & (
  | {
      viewType: "list";
      offset: number;
      size: number;
      date: null;
      records: Array<{
        [fieldCode: string]:
          | FieldList["record"]["get"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["record"]["get"];
            }>["record"]["get"];
      }>;
    }
  | {
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: {
        [date in `${number}-${string}-${string}`]: Array<{
          [fieldCode: string]:
            | FieldList["record"]["get"]
            | Subtable<{
                [fieldCode: string]: InSubtableFieldList["record"]["get"];
              }>["record"]["get"];
        }>;
      };
    }
  | {
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: Array<{
        [fieldCode: string]:
          | FieldList["record"]["get"]
          | Subtable<{
              [fieldCode: string]: InSubtableFieldList["record"]["get"];
            }>["record"]["get"];
      }>;
    }
);

type EditShowEvent = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["record"]["get"];
  };
};

type EditChangeEvent = {
  appId: string;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["record"]["get"];
  };
  changes: {
    field: ChangeEventSupported<FieldList>["record"]["get"];
  };
};
type EditSubmitEvent = {
  appId: string;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["record"]["get"];
  };
};
type EditSubmitSuccessEvent = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["record"]["get"];
  };
};
type DeleteSubmitEvent = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["record"]["get"];
  };
};

type Properties = {
  "app.record.index.show": ShowEvent;
  "app.record.index.edit.show": EditShowEvent;
  [key: `app.record.index.edit.change.${string}`]: EditChangeEvent;
  "app.record.index.edit.submit": EditSubmitEvent;
  "app.record.index.edit.submit.success": EditSubmitSuccessEvent;
  "app.record.index.delete.submit": DeleteSubmitEvent;
};

export { Properties };
