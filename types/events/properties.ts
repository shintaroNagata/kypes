import { FieldsMap, InSubtableFieldsMap, Subtable } from "../field";

type FieldList = FieldsMap[keyof FieldsMap]["page"];
type InSubtableFieldList =
  InSubtableFieldsMap[keyof InSubtableFieldsMap]["page"];

type ChangeEventSupported<
  FieldMap extends {
    supported: { change: boolean };
  }
> = FieldMap extends unknown
  ? FieldMap["supported"]["change"] extends true
    ? FieldMap
    : never
  : never;

type CreatePageSupported<
  FieldMap extends {
    supported: { createPage: boolean };
  }
> = FieldMap extends unknown
  ? FieldMap["supported"]["createPage"] extends true
    ? FieldMap
    : never
  : never;

type AppRecordIndexShowProperties = {
  appId: number;
  viewId: number;
  viewName: string;
} & (
  | {
      viewType: "list";
      offset: number;
      size: number;
      date: null;
      records: Array<{
        [fieldCode: string]:
          | FieldList["record"]["get"]
          | Subtable<{
              [fieldCode: string]:
                | InSubtableFieldList["record"]["get"]
                | undefined;
            }>["page"]["record"]["get"]
          | undefined;
      }>;
    }
  | {
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: {
        [date in `${number}-${string}-${string}`]: Array<{
          [fieldCode: string]:
            | FieldList["record"]["get"]
            | Subtable<{
                [fieldCode: string]:
                  | InSubtableFieldList["record"]["get"]
                  | undefined;
              }>["page"]["record"]["get"]
            | undefined;
        }>;
      };
    }
  | {
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: Array<{
        [fieldCode: string]:
          | FieldList["record"]["get"]
          | Subtable<{
              [fieldCode: string]:
                | InSubtableFieldList["record"]["get"]
                | undefined;
            }>["page"]["record"]["get"]
          | undefined;
      }>;
    }
);

type AppRecordIndexEditShowProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordIndexEditChangeProperties = {
  appId: string;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
  changes: {
    field: ChangeEventSupported<FieldList>["record"]["get"];
  };
};

type AppRecordIndexEditSubmitProperties = {
  appId: string;
  recordId: string;
  error: string;
  record: {
    [fieldCode: string]:
      (| FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: (InSubtableFieldList["record"]["get"] &
          {error: string}) |
          undefined;
        }>["page"]["record"]["get"]
      | undefined) & ({error: string});
  };
};
type AppRecordIndexEditSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordIndexDeleteSubmitProperties = {
  appId: number;
  recordId: number;
  error: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordDetailShowProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};
type AppRecordDetailDeleteSubmitProperties = {
  appId: number;
  recordId: number;
  error: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};
type AppRecordDetailProcessProceedProperties = {
  action: { value: string };
  status: { value: string };
  nextStatus: { value: string };
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordCreateShowProperties = {
  appId: number;
  reuse: boolean;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
        }>["page"]["record"]["get"]
      | undefined;
  };
};
type AppRecordCreateChangeProperties = {
  appId: number;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
        }>["page"]["record"]["get"]
      | undefined;
  };
  changes: {
    field:
      | ChangeEventSupported<FieldList>["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["page"]["record"]["get"];
    row:
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["page"]["record"]["get"]["value"][number]
      | null;
  };
};

type AppRecordCreateSubmitProperties = {
  appId: number;
  error: string;
  record: {
    [fieldCode: string]:
      (| CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [fieldCode: string]: CreatePageSupported<InSubtableFieldList>["record"]["get"] &
          {error :string};
        }>["page"]["record"]["get"]
      | undefined) & {error :string};
  };
};

type AppRecordCreateSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordEditShowProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordEditChangeProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
  changes: {
    field:
      | ChangeEventSupported<FieldList>["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["page"]["record"]["get"];
    row:
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["page"]["record"]["get"]["value"][number]
      | null;
  };
};

type AppRecordEditSubmitProperties = {
  appId: number;
  recordId: number;
  error: string;
  record: {
    [fieldCode: string]:
      (| FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: (InSubtableFieldList["record"]["get"] & {error: string}) | undefined;
        }>["page"]["record"]["get"]
      | undefined) & {error: string};
  };
};
type AppRecordEditSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordPrintShowProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type AppReportShowProperties = { appId: number };

type PortalShowProperties = Record<string, never>;
type SpacePortalShowProperties = { spaceId: string };

type MobileAppRecordIndexShowProperties = {
  appId: number;
  viewId: number;
  viewName: string;
} & (
  | {
      viewType: "list";
      offset: number;
      size: number;
      date: null;
      records: Array<{
        [fieldCode: string]:
          | FieldList["record"]["get"]
          | Subtable<{
              [fieldCode: string]:
                | InSubtableFieldList["record"]["get"]
                | undefined;
            }>["page"]["record"]["get"]
          | undefined;
      }>;
    }
  | {
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: {
        [date in `${number}-${string}-${string}`]: Array<{
          [fieldCode: string]:
            | FieldList["record"]["get"]
            | Subtable<{
                [fieldCode: string]:
                  | InSubtableFieldList["record"]["get"]
                  | undefined;
              }>["page"]["record"]["get"]
            | undefined;
        }>;
      };
    }
  | {
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: Array<{
        [fieldCode: string]:
          | FieldList["record"]["get"]
          | Subtable<{
              [fieldCode: string]:
                | InSubtableFieldList["record"]["get"]
                | undefined;
            }>["page"]["record"]["get"]
          | undefined;
      }>;
    }
);

type MobileAppRecordDetailShowProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordDetailDeleteSubmitProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordDetailProcessProceedProperties = {
  action: { value: string };
  status: { value: string };
  nextStatus: { value: string };
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type MobileAppRecordCreateShowProperties = {
  appId: number;
  reuse: boolean;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
        }>["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordCreateChangeProperties = {
  appId: number;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
        }>["page"]["record"]["get"]
      | undefined;
  };
  changes: {
    field:
      | ChangeEventSupported<FieldList>["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["page"]["record"]["get"];
    row:
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["page"]["record"]["get"]["value"][number]
      | null;
  };
};

type MobileAppRecordCreateSubmitProperties = {
  appId: number;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
        }>["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordCreateSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldList>["record"]["get"]
      | Subtable<{
          [
            fieldCode: string
          ]: CreatePageSupported<InSubtableFieldList>["record"]["get"];
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type MobileAppRecordEditShowProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordEditChangeProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
  changes: {
    field:
      | ChangeEventSupported<FieldList>["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["page"]["record"]["get"];
    row:
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"];
        }>["page"]["record"]["get"]["value"][number]
      | null;
  };
};

type MobileAppRecordEditSubmitProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordEditSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldList["record"]["get"]
      | Subtable<{
          [fieldCode: string]: InSubtableFieldList["record"]["get"] | undefined;
        }>["page"]["record"]["get"]
      | undefined;
  };
};

type MobileAppReportShowProperties = { appId: number };

type MobilePortalShowProperties = Record<string, never>;
type MobileSpacePortalShowProperties = { spaceId: string };

export {
  AppRecordIndexShowProperties,
  AppRecordIndexEditShowProperties,
  AppRecordIndexEditChangeProperties,
  AppRecordIndexEditSubmitProperties,
  AppRecordIndexEditSubmitSuccessProperties,
  AppRecordIndexDeleteSubmitProperties,
  AppRecordDetailShowProperties,
  AppRecordDetailDeleteSubmitProperties,
  AppRecordDetailProcessProceedProperties,
  AppRecordCreateShowProperties,
  AppRecordCreateChangeProperties,
  AppRecordCreateSubmitProperties,
  AppRecordCreateSubmitSuccessProperties,
  AppRecordEditShowProperties,
  AppRecordEditChangeProperties,
  AppRecordEditSubmitProperties,
  AppRecordEditSubmitSuccessProperties,
  AppRecordPrintShowProperties,
  AppReportShowProperties,
  PortalShowProperties,
  SpacePortalShowProperties,
  MobileAppRecordIndexShowProperties,
  MobileAppRecordDetailShowProperties,
  MobileAppRecordDetailDeleteSubmitProperties,
  MobileAppRecordDetailProcessProceedProperties,
  MobileAppRecordCreateShowProperties,
  MobileAppRecordCreateChangeProperties,
  MobileAppRecordCreateSubmitProperties,
  MobileAppRecordCreateSubmitSuccessProperties,
  MobileAppRecordEditShowProperties,
  MobileAppRecordEditChangeProperties,
  MobileAppRecordEditSubmitProperties,
  MobileAppRecordEditSubmitSuccessProperties,
  MobileAppReportShowProperties,
  MobilePortalShowProperties,
  MobileSpacePortalShowProperties,
};
