import type {
  KintoneRecord,
  ChangedField,
  ChangedRow,
  ChangedSubtable,
} from "../../../record";

type ShowEvent = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};
type ChangeEvent = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
  changes:
    | { field: ChangedField; row: null }
    | { field: ChangedSubtable; row: ChangedRow | null };
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
  "app.record.edit.show": ShowEvent;
  [eventType: `app.record.edit.change.${string}`]: ChangeEvent;
  "app.record.edit.submit": SubmitEvent;
  "app.record.edit.submit.success": SubmitSuccessEvent;
};

export type { Properties };
