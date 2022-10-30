import { RecordObject } from "../../../field";

type ShowEvent = {
  appId: number;
  recordId: number;
  record: RecordObject;
};

type Properties = { "app.record.print.show": ShowEvent };

export { Properties };
