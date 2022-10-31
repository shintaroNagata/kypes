import {
  KintoneRecord,
  ChangedField,
  ChangedSubtable,
  ChangedRow,
} from "../../../../record";

type ShowEvent = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};

type ChangeEvent = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
  changes: { field: ChangedField | ChangedSubtable; row: ChangedRow | null };
};

type SubmitEvent = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};

type SubmitSuccessEvent = {
  appId: number;
  recordId: string;
  record: KintoneRecord;
};

type Properties = {
  "mobile.app.record.edit.show": ShowEvent;
  [eventType: `mobile.app.record.edit.change.${string}`]: ChangeEvent;
  "mobile.app.record.edit.submit": SubmitEvent;
  "mobile.app.record.edit.submit.success": SubmitSuccessEvent;
};

export { Properties };
