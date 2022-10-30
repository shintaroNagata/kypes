import {
  RecordObject,
  ChangedField,
  ChangedRow,
  ChangedSubtable,
} from "../../../field";

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
  "app.record.edit.show": ShowEvent;
  [eventType: `app.record.edit.change.${string}`]: ChangeEvent;
  "app.record.edit.submit": SubmitEvent;
  "app.record.edit.submit.success": SubmitSuccessEvent;
};

export { Properties };
