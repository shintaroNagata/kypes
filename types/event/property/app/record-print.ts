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

type Properties = { "app.record.print.show": ShowEvent };

export { Properties };
