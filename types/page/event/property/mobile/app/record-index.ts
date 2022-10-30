import { RecordObject } from "../../../../field";

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

type Properties = {
  "mobile.app.record.index.show": ShowEvent;
};

export { Properties };
