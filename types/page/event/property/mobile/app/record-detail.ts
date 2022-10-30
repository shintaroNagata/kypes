import { RecordObject } from "../../../../field";

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
  "mobile.app.record.detail.show": ShowEvent;
  "mobile.app.record.detail.delete.submit": DeleteSubmitEvent;
  "mobile.app.record.detail.process.proceed": ProcessProceedEvent;
};

export { Properties };
