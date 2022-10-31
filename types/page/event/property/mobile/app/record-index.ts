import { KintoneRecord } from "../../../../record";

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

type Properties = {
  "mobile.app.record.index.show": ShowEvent;
};

export { Properties };
