import { KintoneRecord, ChangedField } from "../../../record";

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
      records: KintoneRecord[];
    }
  | {
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: { [date in `${number}-${string}-${string}`]: KintoneRecord[] };
    }
  | {
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
    }
);

type EditShowEvent = {
  appId: number;
  recordId: string;
  record: KintoneRecord;
};

type EditChangeEvent = {
  appId: string;
  recordId: string;
  record: KintoneRecord;
  changes: {
    field: ChangedField;
  };
};
type EditSubmitEvent = {
  appId: string;
  recordId: string;
  record: KintoneRecord;
};
type EditSubmitSuccessEvent = {
  appId: number;
  recordId: string;
  record: KintoneRecord;
};
type DeleteSubmitEvent = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
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