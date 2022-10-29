import {
  CreatePageRecordObject,
  ChangedField,
  ChangedSubtable,
  ChangedRow,
} from "../../types";

type ShowEvent = {
  appId: number;
  reuse: boolean;
  record: CreatePageRecordObject;
};

type ChangeEvent = {
  appId: number;
  record: CreatePageRecordObject;
  changes: { field: ChangedField | ChangedSubtable; row: ChangedRow | null };
};

type SubmitEvent = {
  appId: number;
  record: CreatePageRecordObject;
};

type SubmitSuccessEvent = {
  appId: number;
  recordId: string;
  record: CreatePageRecordObject;
};

type Properties = {
  "mobile.app.record.create.show": ShowEvent;
  [eventType: `mobile.app.record.create.change.${string}`]: ChangeEvent;
  "mobile.app.record.create.submit": SubmitEvent;
  "mobile.app.record.create.submit.success": SubmitSuccessEvent;
};

export { Properties };
