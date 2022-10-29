import { Subtable } from "../../../field";
import {
  ChangeEventSupported,
  CreatePageSupported,
  FieldList,
  InSubtableFieldList,
} from "../types";

type ShowEvent = {
  appId: number;
  reuse: boolean;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
        }>["record"]["get"];
  };
};
type ChangeEvent = {
  appId: number;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
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
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
        }>["record"]["get"];
  };
};
type SubmitSuccessEvent = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
        }>["record"]["get"];
  };
};

type Properties = {
  "app.record.create.show": ShowEvent;
  [eventType: `app.record.create.change.${string}`]: ChangeEvent;
  "app.record.create.submit": SubmitEvent;
  "app.record.create.submit.success": SubmitSuccessEvent;
};

export { Properties };
