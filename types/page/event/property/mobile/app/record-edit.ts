import {
  RecordObject,
  ChangedField,
  ChangedSubtable,
  ChangedRow,
} from "../../types";

type ShowEvent = {
  appId: number;
  recordId: number;
  record: RecordObject;
};

type ChangeEvent = {
  appId: number;
  recordId: number;
  record: RecordObject;
  changes: { field: ChangedField | ChangedSubtable; row: ChangedRow | null };
};

type SubmitEvent = {
  appId: number;
  recordId: number;
  record: RecordObject;
};

type SubmitSuccessEvent = {
  appId: number;
  recordId: string;
  record: RecordObject;
};

type Properties = {
  "mobile.app.record.edit.show": ShowEvent;
  [eventType: `mobile.app.record.edit.change.${string}`]: ChangeEvent;
  "mobile.app.record.edit.submit": SubmitEvent;
  "mobile.app.record.edit.submit.success": SubmitSuccessEvent;
};

export { Properties };
