import { FieldsMap } from "../field";

type ChangeEventSupported<
  FieldMap extends {
    page: { supported: { change: boolean } };
  }
> = FieldMap extends unknown
  ? FieldMap["page"]["supported"]["change"] extends true
    ? FieldMap
    : never
  : never;

type CreatePageSupported<
  FieldMap extends {
    page: { supported: { createPage: boolean } };
  }
> = FieldMap extends unknown
  ? FieldMap["page"]["supported"]["createPage"] extends true
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
          | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
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
            | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
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
          | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
          | undefined;
      }>;
    }
);

type AppRecordIndexEditShowProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordIndexEditChangeProperties = {
  appId: string;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
  changes: {
    field: ChangeEventSupported<
      FieldsMap[keyof FieldsMap]
    >["page"]["record"]["get"];
  };
};

type AppRecordIndexEditSubmitProperties = {
  appId: string;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};
type AppRecordIndexEditSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordIndexDeleteSubmitProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordDetailShowProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};
type AppRecordDetailDeleteSubmitProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};
type AppRecordDetailProcessProceedProperties = {
  action: { value: string };
  status: { value: string };
  nextStatus: { value: string };
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordCreateShowProperties = {
  appId: number;
  reuse: boolean;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldsMap[keyof FieldsMap]>["page"]["record"]["get"]
      | undefined;
  };
};
type AppRecordCreateChangeProperties = {
  appId: number;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldsMap[keyof FieldsMap]>["page"]["record"]["get"]
      | undefined;
  };
  changes: {
    field: ChangeEventSupported<
      FieldsMap[keyof FieldsMap]
    >["page"]["record"]["get"];
    row: any;
  };
};

type AppRecordCreateSubmitProperties = {
  appId: number;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldsMap[keyof FieldsMap]>["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordCreateSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldsMap[keyof FieldsMap]>["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordEditShowProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordEditChangeProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
  changes: {
    field: ChangeEventSupported<
      FieldsMap[keyof FieldsMap]
    >["page"]["record"]["get"];
    row: any;
  };
};

type AppRecordEditSubmitProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};
type AppRecordEditSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};

type AppRecordPrintShowProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
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
          | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
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
            | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
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
          | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
          | undefined;
      }>;
    }
);

type MobileAppRecordDetailShowProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordDetailDeleteSubmitProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordDetailProcessProceedProperties = {
  action: { value: string };
  status: { value: string };
  nextStatus: { value: string };
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};

type MobileAppRecordCreateShowProperties = {
  appId: number;
  reuse: boolean;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldsMap[keyof FieldsMap]>["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordCreateChangeProperties = {
  appId: number;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldsMap[keyof FieldsMap]>["page"]["record"]["get"]
      | undefined;
  };
  changes: {
    field: ChangeEventSupported<
      FieldsMap[keyof FieldsMap]
    >["page"]["record"]["get"];
    row: any;
  };
};

type MobileAppRecordCreateSubmitProperties = {
  appId: number;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldsMap[keyof FieldsMap]>["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordCreateSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | CreatePageSupported<FieldsMap[keyof FieldsMap]>["page"]["record"]["get"]
      | undefined;
  };
};

type MobileAppRecordEditShowProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordEditChangeProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
  changes: {
    field: ChangeEventSupported<
      FieldsMap[keyof FieldsMap]
    >["page"]["record"]["get"];
    row: any;
  };
};

type MobileAppRecordEditSubmitProperties = {
  appId: number;
  recordId: number;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
      | undefined;
  };
};
type MobileAppRecordEditSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: {
    [fieldCode: string]:
      | FieldsMap[keyof FieldsMap]["page"]["record"]["get"]
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
