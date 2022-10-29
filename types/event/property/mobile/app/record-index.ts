import { Subtable } from "../../../../field";
import { FieldList, InSubtableFieldList } from "../../types";

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

type Properties = {
  "mobile.app.record.index.show": ShowEvent;
};

export { Properties };
