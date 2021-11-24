type NotificationsRestApiMap = {
  GetAppNotificationsGeneral: {
    method: "GET";
    endpoint: "app/notifications/general";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppNotificationsGeneral: {
    method: "GET";
    endpoint: "preview/app/notifications/general";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppNotificationsGeneral: {
    method: "PUT";
    endpoint: "preview/app/notifications/general";
    requestParameters: any;
    responseProperties: any;
  };
  GetAppNotificationsPerRecord: {
    method: "GET";
    endpoint: "app/notifications/perRecord";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppNotificationsPerRecord: {
    method: "GET";
    endpoint: "preview/app/notifications/perRecord";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppNotificationsPerRecord: {
    method: "PUT";
    endpoint: "preview/app/notifications/perRecord";
    requestParameters: any;
    responseProperties: any;
  };
  GetAppNotificationsReminder: {
    method: "GET";
    endpoint: "app/notifications/reminder";
    requestParameters: any;
    responseProperties: any;
  };
  GetPreviewAppNotificationsReminder: {
    method: "GET";
    endpoint: "preview/app/notifications/reminder";
    requestParameters: any;
    responseProperties: any;
  };
  PutPreviewAppNotificationsReminder: {
    method: "PUT";
    endpoint: "preview/app/notifications/reminder";
    requestParameters: any;
    responseProperties: any;
  };
};

export { NotificationsRestApiMap };
