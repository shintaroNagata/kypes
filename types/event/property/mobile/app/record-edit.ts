import { Subtable } from "../../../../field";
import {
  ChangeEventSupported,
  FieldList,
  InSubtableFieldList,
} from "../../types";

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
  "mobile.app.record.edit.show": ShowEvent;
  [eventType: `mobile.app.record.edit.change.${string}`]: ChangeEvent;
  "mobile.app.record.edit.submit": SubmitEvent;
  "mobile.app.record.edit.submit.success": SubmitSuccessEvent;
};

export { Properties };
