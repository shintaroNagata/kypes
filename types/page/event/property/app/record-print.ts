import { KintoneRecord } from "../../../record";

type ShowEvent = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};

type Properties = { "app.record.print.show": ShowEvent };

export { Properties };
