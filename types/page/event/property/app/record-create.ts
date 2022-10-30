import {
  CreatePageRecordObject,
  ChangedField,
  ChangedSubtable,
  ChangedRow,
} from "../../../field";

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
  "app.record.create.show": ShowEvent;
  [eventType: `app.record.create.change.${string}`]: ChangeEvent;
  "app.record.create.submit": SubmitEvent;
  "app.record.create.submit.success": SubmitSuccessEvent;
};

export { Properties };
