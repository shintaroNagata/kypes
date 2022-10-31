import { KintoneRecord } from "../../../../record";

type ShowEvent = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};
type DeleteSubmitEvent = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};
type ProcessProceedEvent = {
  action: { value: string };
  status: { value: string };
  nextStatus: { value: string };
  record: KintoneRecord;
};

type Properties = {
  "mobile.app.record.detail.show": ShowEvent;
  "mobile.app.record.detail.delete.submit": DeleteSubmitEvent;
  "mobile.app.record.detail.process.proceed": ProcessProceedEvent;
};

export { Properties };
