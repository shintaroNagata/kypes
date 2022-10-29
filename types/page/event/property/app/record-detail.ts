import { RecordObject } from "../types";

type ShowEvent = {
  appId: number;
  recordId: number;
  record: RecordObject;
};
type DeleteSubmitEvent = {
  appId: number;
  recordId: number;
  record: RecordObject;
};
type ProcessProceedEvent = {
  action: { value: string };
  status: { value: string };
  nextStatus: { value: string };
  record: RecordObject;
};

type Properties = {
  "app.record.detail.show": ShowEvent;
  "app.record.detail.delete.submit": DeleteSubmitEvent;
  "app.record.detail.process.proceed": ProcessProceedEvent;
};

export { Properties };
