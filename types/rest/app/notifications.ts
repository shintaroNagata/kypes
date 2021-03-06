type NotificationsRestApiMap = {
  GetAppNotificationsGeneral: {
    method: "GET";
    endpoint: "app/notifications/general";
    requestParameters: {
      app: string | number;
    };
    responseProperties: {
      notifications: Array<{
        entity: {
          type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
          code: string;
        };
        includeSubs: boolean;
        recordAdded: boolean;
        recordEdited: boolean;
        commentAdded: boolean;
        statusChanged: boolean;
        fileImported: boolean;
      }>;
      notifyToCommenter: boolean;
      revision: string;
    };
  };
  GetPreviewAppNotificationsGeneral: {
    method: "GET";
    endpoint: "preview/app/notifications/general";
    requestParameters: {
      app: string | number;
    };
    responseProperties: {
      notifications: Array<{
        entity: {
          type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
          code: string;
        };
        includeSubs: boolean;
        recordAdded: boolean;
        recordEdited: boolean;
        commentAdded: boolean;
        statusChanged: boolean;
        fileImported: boolean;
      }>;
      notifyToCommenter: boolean;
      revision: string;
    };
  };
  PutPreviewAppNotificationsGeneral: {
    method: "PUT";
    endpoint: "preview/app/notifications/general";
    requestParameters: {
      app: string;
      notifications?: Array<{
        entity: {
          type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
          code: string;
        };
        includeSubs?: boolean;
        recordAdded?: boolean;
        recordEdited?: boolean;
        commentAdded?: boolean;
        statusChanged?: boolean;
        fileImported?: boolean;
      }>;
      notifyToCommenter?: boolean;
      revision?: string | number;
    };
    responseProperties: { revision: string };
  };
  GetAppNotificationsPerRecord: {
    method: "GET";
    endpoint: "app/notifications/perRecord";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      notifications: Array<{
        filterCond: string;
        title: string;
        targets: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          includeSubs: boolean;
        }>;
      }>;
      revision: string;
    };
  };
  GetPreviewAppNotificationsPerRecord: {
    method: "GET";
    endpoint: "preview/app/notifications/perRecord";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      notifications: Array<{
        filterCond: string;
        title: string;
        targets: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          includeSubs: boolean;
        }>;
      }>;
      revision: string;
    };
  };
  PutPreviewAppNotificationsPerRecord: {
    method: "PUT";
    endpoint: "preview/app/notifications/perRecord";
    requestParameters: {
      app: string | number;
      notifications: Array<{
        filterCond?: string;
        title?: string;
        targets?: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          includeSubs?: boolean;
        }>;
      }>;
      revision?: string | number;
    };
    responseProperties: { revision: string };
  };
  GetAppNotificationsReminder: {
    method: "GET";
    endpoint: "app/notifications/reminder";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      notifications: Array<{
        timing:
          | {
              code: string;
              daysLater: string;
              hoursLater: string;
            }
          | {
              code: string;
              daysLater: string;
              time: string;
            };
        filterCond: string;
        title: string;
        targets: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          includeSubs: boolean;
        }>;
      }>;
      timezone: string | null;
      revision: string;
    };
  };
  GetPreviewAppNotificationsReminder: {
    method: "GET";
    endpoint: "preview/app/notifications/reminder";
    requestParameters: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
      notifications: Array<{
        timing:
          | {
              code: string;
              daysLater: string;
              hoursLater: string;
            }
          | {
              code: string;
              daysLater: string;
              time: string;
            };
        filterCond: string;
        title: string;
        targets: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          includeSubs: boolean;
        }>;
      }>;
      timezone: string | null;
      revision: string;
    };
  };
  PutPreviewAppNotificationsReminder: {
    method: "PUT";
    endpoint: "preview/app/notifications/reminder";
    requestParameters: {
      app: string | number;
      notifications?: Array<{
        timing:
          | {
              code: string;
              daysLater: string | number;
              hoursLater: string | number;
            }
          | {
              code: string;
              daysLater: string | number;
              time: string;
            };
        filterCond?: string;
        title?: string;
        targets: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          includeSubs?: boolean;
        }>;
      }>;
      timezone?: string;
      revision?: string | number;
    };
    responseProperties: {
      revision: string;
    };
  };
};

export { NotificationsRestApiMap };
