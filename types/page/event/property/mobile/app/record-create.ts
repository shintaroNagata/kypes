import type {
  KintoneRecordOnCreatePage,
  ChangedField,
  ChangedSubtable,
  ChangedRow,
} from "../../../../record";

type ShowEvent = {
  appId: number;
  reuse: boolean;
  record: KintoneRecordOnCreatePage;
};

type ChangeEvent = {
  appId: number;
  record: KintoneRecordOnCreatePage;
  changes:
    | { field: ChangedField; row: null }
    | { field: ChangedSubtable; row: ChangedRow | null };
};

type SubmitEvent = {
  appId: number;
  record: KintoneRecordOnCreatePage;
};

type SubmitSuccessEvent = {
  appId: number;
  recordId: string;
  record: KintoneRecordOnCreatePage;
};

type Properties = {
  "mobile.app.record.create.show": ShowEvent;
  [eventType: `mobile.app.record.create.change.${string}`]: ChangeEvent;
  "mobile.app.record.create.submit": SubmitEvent;
  "mobile.app.record.create.submit.success": SubmitSuccessEvent;
};

export type { Properties };
