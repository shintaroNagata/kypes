import { Subtable } from "../../../field";
import { ChangeEventSupported, FieldList, InSubtableFieldList } from "../types";

type ShowEvent = {
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
type ChangeEvent = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["record"]["get"];
  };
  changes: {
    field:
      | ChangeEventSupported<FieldList>["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["record"]["get"];
    row:
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["record"]["get"]["value"][number]
      | null;
  };
};
type SubmitEvent = {
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
type SubmitSuccessEvent = {
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

type Properties = {
  "app.record.edit.show": ShowEvent;
  [eventType: `app.record.edit.change.${string}`]: ChangeEvent;
  "app.record.edit.submit": SubmitEvent;
  "app.record.edit.submit.success": SubmitSuccessEvent;
};

export { Properties };
