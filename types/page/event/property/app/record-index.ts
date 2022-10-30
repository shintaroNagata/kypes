import { ChangedField, RecordObject } from "../../../field";

type ShowEvent = {
  appId: number;
  viewId: number;
  viewName: string;
} & (
  | {
      viewType: "list";
      offset: number;
      size: number;
      date: null;
      records: RecordObject[];
    }
  | {
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: { [date in `${number}-${string}-${string}`]: RecordObject[] };
    }
  | {
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: RecordObject[];
    }
);

type EditShowEvent = {
  appId: number;
  recordId: string;
  record: RecordObject;
};

type EditChangeEvent = {
  appId: string;
  recordId: string;
  record: RecordObject;
  changes: {
    field: ChangedField;
  };
};
type EditSubmitEvent = {
  appId: string;
  recordId: string;
  record: RecordObject;
};
type EditSubmitSuccessEvent = {
  appId: number;
  recordId: string;
  record: RecordObject;
};
type DeleteSubmitEvent = {
  appId: number;
  recordId: number;
  record: RecordObject;
};

type Properties = {
  "app.record.index.show": ShowEvent;
  "app.record.index.edit.show": EditShowEvent;
  [key: `app.record.index.edit.change.${string}`]: EditChangeEvent;
  "app.record.index.edit.submit": EditSubmitEvent;
  "app.record.index.edit.submit.success": EditSubmitSuccessEvent;
  "app.record.index.delete.submit": DeleteSubmitEvent;
};

export { Properties };
