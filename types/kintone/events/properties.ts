import type { KintoneRecord, KintoneField } from "../types";

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
      records: KintoneRecord[];
    }
  | {
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: {
        [date in `${number}-${string}-${string}`]: KintoneRecord[];
      };
    }
  | {
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
    }
);

type AppRecordIndexEditShowProperties = {
  appId: number;
  recordId: string;
  record: KintoneRecord;
};

type AppRecordIndexEditChangeProperties = {
  appId: string;
  recordId: string;
  record: KintoneRecord;
  changes: { field: KintoneField };
};

type AppRecordIndexEditSubmitProperties = {
  appId: string;
  recordId: string;
  record: KintoneRecord;
};
type AppRecordIndexEditSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: KintoneRecord;
};

type AppRecordIndexDeleteSubmitProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};

type AppRecordDetailShowProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};
type AppRecordDetailDeleteSubmitProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};
type AppRecordDetailProcessProceedProperties = {
  action: { value: string };
  status: { value: string };
  nextStatus: { value: string };
  record: KintoneRecord;
};

type AppRecordCreateShowProperties = {
  appId: number;
  reuse: boolean;
  record: KintoneRecord;
};
type AppRecordCreateChangeProperties = {
  appId: number;
  record: KintoneRecord;
  changes: {
    field: KintoneField;
    row: any;
  };
};

type AppRecordCreateSubmitProperties = {
  appId: number;
  record: KintoneRecord;
};

type AppRecordCreateSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: KintoneRecord;
};

type AppRecordEditShowProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};

type AppRecordEditChangeProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
  changes: {
    field: KintoneField;
    row: any;
  };
};

type AppRecordEditSubmitProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};
type AppRecordEditSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: KintoneRecord;
};

type AppRecordPrintShowProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};

type AppReportShowProperties = { appId: number };

type PortalShowProperties = {};
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
      records: KintoneRecord[];
    }
  | {
      viewType: "calendar";
      offset: null;
      size: null;
      date: `${number}-${string}`;
      records: {
        [date in `${number}-${string}-${string}`]: KintoneRecord[];
      };
    }
  | {
      viewType: "custom";
      offset: number;
      size: number;
      date: null;
      records: KintoneRecord[];
    }
);

type MobileAppRecordDetailShowProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};
type MobileAppRecordDetailDeleteSubmitProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};
type MobileAppRecordDetailProcessProceedProperties = {
  action: { value: string };
  status: { value: string };
  nextStatus: { value: string };
  record: KintoneRecord;
};

type MobileAppRecordCreateShowProperties = {
  appId: number;
  reuse: boolean;
  record: KintoneRecord;
};
type MobileAppRecordCreateChangeProperties = {
  appId: number;
  record: KintoneRecord;
  changes: {
    field: KintoneField;
    row: any;
  };
};

type MobileAppRecordCreateSubmitProperties = {
  appId: number;
  record: KintoneRecord;
};
type MobileAppRecordCreateSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: KintoneRecord;
};

type MobileAppRecordEditShowProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};
type MobileAppRecordEditChangeProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
  changes: {
    field: KintoneField;
    row: any;
  };
};
type MobileAppRecordEditSubmitProperties = {
  appId: number;
  recordId: number;
  record: KintoneRecord;
};
type MobileAppRecordEditSubmitSuccessProperties = {
  appId: number;
  recordId: string;
  record: KintoneRecord;
};

type MobileAppReportShowProperties = { appId: number };

type MobilePortalShowProperties = {};
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
