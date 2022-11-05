type AppNotificationsGeneralSchema = {
  GET: {
    request: {
      app: string | number;
    };
    response: {
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
};
type PreviewAppNotificationsGeneralSchema = {
  GET: {
    request: {
      app: string | number;
    };
    response: {
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
  PUT: {
    request: {
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
    response: { revision: string };
  };
};
type AppNotificationsPerRecordSchema = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
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
};
type PreviewAppNotificationsPerRecordSchema = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
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
  PUT: {
    request: {
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
    response: { revision: string };
  };
};
type AppNotificationsReminderSchema = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
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
};
type PreviewAppNotificationsReminderSchema = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
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
  PUT: {
    request: {
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
    response: {
      revision: string;
    };
  };
};

type Schema = {
  "app/notifications/general": AppNotificationsGeneralSchema;
  "preview/app/notifications/general": PreviewAppNotificationsGeneralSchema;
  "app/notifications/perRecord": AppNotificationsPerRecordSchema;
  "preview/app/notifications/perRecord": PreviewAppNotificationsPerRecordSchema;
  "app/notifications/reminder": AppNotificationsReminderSchema;
  "preview/app/notifications/reminder": PreviewAppNotificationsReminderSchema;
};

export type { Schema };
