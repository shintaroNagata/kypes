import {
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
  MobilePortalShow,
  MobileSpacePortalShowProperties,
} from "./properties";

type EventsMap = {
  AppRecordIndexShow: {
    type: "app.record.index.show";
    properties: AppRecordIndexShowProperties;
  };
  AppRecordIndexEditShow: {
    type: "app.record.index.edit.show";
    properties: AppRecordIndexEditShowProperties;
  };
  AppRecordIndexEditChange: {
    type: `app.record.index.edit.change.${string}`;
    properties: AppRecordIndexEditChangeProperties;
  };
  AppRecordIndexEditSubmit: {
    type: "app.record.index.edit.submit";
    properties: AppRecordIndexEditSubmitProperties;
  };
  AppRecordIndexEditSubmitSuccess: {
    type: "app.record.index.edit.submit.success";
    properties: AppRecordIndexEditSubmitSuccessProperties;
  };
  AppRecordIndexDeleteSubmit: {
    type: "app.record.index.delete.submit";
    properties: AppRecordIndexDeleteSubmitProperties;
  };

  AppRecordDetailShow: {
    type: "app.record.detail.show";
    properties: AppRecordDetailShowProperties;
  };
  AppRecordDetailDeleteSubmit: {
    type: "app.record.detail.delete.submit";
    properties: AppRecordDetailDeleteSubmitProperties;
  };
  AppRecordDetailProcessProceed: {
    type: "app.record.detail.process.proceed";
    properties: AppRecordDetailProcessProceedProperties;
  };

  AppRecordCreateShow: {
    type: "app.record.create.show";
    properties: AppRecordCreateShowProperties;
  };
  AppRecordCreateChange: {
    type: `app.record.create.change.${string}`;
    properties: AppRecordCreateChangeProperties;
  };
  AppRecordCreateSubmit: {
    type: "app.record.create.submit";
    properties: AppRecordCreateSubmitProperties;
  };
  AppRecordCreateSubmitSuccess: {
    type: "app.record.create.submit.success";
    properties: AppRecordCreateSubmitSuccessProperties;
  };

  AppRecordEditShow: {
    type: "app.record.edit.show";
    properties: AppRecordEditShowProperties;
  };
  AppRecordEditChange: {
    type: `app.record.edit.change.${string}`;
    properties: AppRecordEditChangeProperties;
  };
  AppRecordEditSubmit: {
    type: "app.record.edit.submit";
    properties: AppRecordEditSubmitProperties;
  };
  AppRecordEditSubmitSuccess: {
    type: "app.record.edit.submit.success";
    properties: AppRecordEditSubmitSuccessProperties;
  };

  AppRecordPrintShow: {
    type: "app.record.print.show";
    properties: AppRecordPrintShowProperties;
  };
  AppReportShow: {
    type: "app.report.show";
    properties: AppReportShowProperties;
  };

  PortalShow: { type: "portal.show"; properties: PortalShowProperties };
  SpacePortalShow: {
    type: "space.portal.show";
    properties: SpacePortalShowProperties;
  };

  MobileAppRecordIndexShow: {
    type: "mobile.app.record.index.show";
    properties: MobileAppRecordIndexShowProperties;
  };

  MobileAppRecordDetailShow: {
    type: "mobile.app.record.detail.show";
    properties: MobileAppRecordDetailShowProperties;
  };
  MobileAppRecordDetailDeleteSubmit: {
    type: "mobile.app.record.detail.delete.submit";
    properties: MobileAppRecordDetailDeleteSubmitProperties;
  };
  MobileAppRecordDetailProcessProceed: {
    type: "mobile.app.record.detail.process.proceed";
    properties: MobileAppRecordDetailProcessProceedProperties;
  };

  MobileAppRecordCreateShow: {
    type: "mobile.app.record.create.show";
    properties: MobileAppRecordCreateShowProperties;
  };
  MobileAppRecordCreateChange: {
    type: `mobile.app.record.create.change.${string}`;
    properties: MobileAppRecordCreateChangeProperties;
  };
  MobileAppRecordCreateSubmit: {
    type: "mobile.app.record.create.submit";
    properties: MobileAppRecordCreateSubmitProperties;
  };
  MobileAppRecordCreateSubmitSuccess: {
    type: "mobile.app.record.create.submit.success";
    properties: MobileAppRecordCreateSubmitSuccessProperties;
  };

  MobileAppRecordEditShow: {
    type: "mobile.app.record.edit.show";
    properties: MobileAppRecordEditShowProperties;
  };
  MobileAppRecordEditChange: {
    type: `mobile.app.record.edit.change.${string}`;
    properties: MobileAppRecordEditChangeProperties;
  };
  MobileAppRecordEditSubmit: {
    type: "mobile.app.record.edit.submit";
    properties: MobileAppRecordEditSubmitProperties;
  };
  MobileAppRecordEditSubmitSuccess: {
    type: "mobile.app.record.edit.submit.success";
    properties: MobileAppRecordEditSubmitSuccessProperties;
  };

  MobileAppReportShow: {
    type: "mobile.app.report.show";
    properties: MobileAppReportShowProperties;
  };
  MobilePortalShow: {
    type: "mobile.portal.show";
    properties: MobilePortalShow;
  };
  MobileSpacePortalShow: {
    type: "mobile.space.portal.show";
    properties: MobileSpacePortalShowProperties;
  };
};

type EventsMapEntries = EventsMap[keyof EventsMap];
type EventTypes = EventsMapEntries["type"];

type EventInternal<
  EventsMapEntry extends EventsMapEntries,
  EventType extends EventTypes
> = EventsMapEntry extends EventsMapEntries
  ? EventType extends EventsMapEntry["type"]
    ? { type: EventType } & EventsMapEntry["properties"]
    : never
  : never;

type Event<EventType extends EventTypes> = EventInternal<
  EventsMapEntries,
  EventType
>;

export { EventTypes, Event };
