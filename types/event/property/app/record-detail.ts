import { Subtable } from "../../../field";
import { FieldList, InSubtableFieldList } from "../types";

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
type ProcessProceedEvent = {
  action: { value: string };
  status: { value: string };
  nextStatus: { value: string };
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["record"]["get"];
  };
};

type Properties = {
  "app.record.detail.show": ShowEvent;
  "app.record.detail.delete.submit": DeleteSubmitEvent;
  "app.record.detail.process.proceed": ProcessProceedEvent;
};

export { Properties };
