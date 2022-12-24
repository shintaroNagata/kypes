import type { ApiSchema } from "../types";
import type { KintoneRecord } from "./record";
import type { KintoneFormProperty } from "./form/properties";
import type { KintoneFormLayout } from "./form/layout";

// Record
type RecordJson = {
  GET: {
    request: { app: string | number; id: string | number };
    response: {
      record: KintoneRecord["get"];
    };
  };
  POST: {
    request: {
      app: string | number;
      record?: KintoneRecord["add"];
    };
    response: {
      id: string;
      revision: string;
    };
  };
  PUT: {
    request:
      | {
          app: string | number;
          id: string | number;
          record?: KintoneRecord["update"];
          revision?: string | number;
        }
      | {
          app: string | number;
          updateKey: { field: string; value: string };
          record?: KintoneRecord["update"];
          revision?: string | number;
        };
    response: {
      id: string;
      revision: string;
    };
  };
};

type RecordsJson = {
  GET: {
    request: {
      app: string | number;
      fields?: string[];
      query?: string;
      totalCount?: true;
    };
    response: {
      records: Array<KintoneRecord["get"]>;
      totalCount: string | null;
    };
  };
  POST: {
    request: {
      app: string | number;
      records: Array<KintoneRecord["add"]>;
    };
    response: {
      ids: string[];
      revisions: string[];
    };
  };
  PUT: {
    request: {
      app: string | number;
      records: Array<
        | {
            id: string | number;
            record?: KintoneRecord["update"];
            revision?: string | number;
          }
        | {
            updateKey: { field: string; value: string };
            record?: KintoneRecord["update"];
            revision?: string | number;
          }
      >;
    };
    response: { records: Array<{ id: string; revision: string }> };
  };
  DELETE: {
    request: {
      app: string | number;
      ids: Array<string | number>;
      revisions?: Array<string | number>;
    };
    response: Record<string, never>;
  };
};

// Cursor
type RecordsCursorJson = {
  GET: {
    request: { id: string };
    response: {
      records: Array<KintoneRecord["get"]>;
      next: boolean;
    };
  };
  POST: {
    request: {
      app: string | number;
      fields?: string[];
      query?: string;
      size?: string | number;
    };
    response: { id: string; totalCount: string };
  };
  DELETE: { request: { id: string }; response: Record<string, never> };
};

// Comments
type RecordCommentJson = {
  POST: {
    request: {
      app: string | number;
      record: string | number;
      comment: {
        text: string;
        mentions?: Array<{
          code: string;
          type: "USER" | "GROUP" | "ORGANIZATION";
        }>;
      };
    };
    response: { id: string };
  };
  DELETE: {
    request: {
      app: string | number;
      record: string | number;
      comment: string | number;
    };
    response: Record<string, never>;
  };
};

type RecordCommentsJson = {
  GET: {
    request: {
      app: string | number;
      record: string | number;
      order?: "asc" | "desc";
      offset?: number;
      limit?: number;
    };
    response: {
      comments: Array<{
        id: string;
        text: string;
        createdAt: string;
        creator: {
          code: string;
          name: string;
        };
        mentions: Array<{
          code: string;
          type: "USER" | "GROUP" | "ORGANIZATION";
        }>;
      }>;
      older: boolean;
      newer: boolean;
    };
  };
};

// Process Management
type RecordAssigneesJson = {
  PUT: {
    request: {
      app: string | number;
      id: string | number;
      assignees: string[];
      revision?: string | number;
    };
    response: { revision: string };
  };
};

type RecordStatusJson = {
  PUT: {
    request: {
      action: string;
      app: string | number;
      assignee?: string;
      id: string | number;
      revision?: string | number;
    };
    response: { revision: string };
  };
};

type RecordsStatusJson = {
  PUT: {
    request: {
      app: string | number;
      records: Array<{
        action: string;
        assignee?: string;
        id: string | number;
        revision?: string | number;
      }>;
    };
    response: { records: Array<{ id: string; revision: string }> };
  };
};

// Bulk Request
type BulkRequestSupported = {
  record: {
    POST: RecordJson["POST"];
    PUT: RecordJson["PUT"];
  };
  records: {
    POST: RecordsJson["POST"];
    PUT: RecordsJson["PUT"];
    DELETE: RecordsJson["DELETE"];
  };
  "record/assignees": RecordAssigneesJson;
  "record/status": RecordStatusJson;
  "records/status": RecordsStatusJson;
};

type BulkRequestSupportedEndpoints = keyof BulkRequestSupported;
type KeyOfUnion<T> = T extends unknown ? keyof T : never;
type BulkRequestSupportedMethods = KeyOfUnion<
  BulkRequestSupported[keyof BulkRequestSupported]
>;

type BuildRequest<Endpoint, Method> =
  Endpoint extends keyof BulkRequestSupported
    ? Method extends keyof BulkRequestSupported[Endpoint]
      ? {
          method: Method;
          api: `/k/v1/${Endpoint}.json`;
          payload: Extract<
            BulkRequestSupported[Endpoint][Method],
            ApiSchema
          >["request"];
        }
      : never
    : never;
type Request = BuildRequest<
  BulkRequestSupportedEndpoints,
  BulkRequestSupportedMethods
>;

type BuildSuccessResult<Endpoint, Method> =
  Endpoint extends keyof BulkRequestSupported
    ? Method extends keyof BulkRequestSupported[Endpoint]
      ? Extract<BulkRequestSupported[Endpoint][Method], ApiSchema>["response"]
      : never
    : never;
type SuccessResult = BuildSuccessResult<
  BulkRequestSupportedEndpoints,
  BulkRequestSupportedMethods
>;

type FailureResult =
  | Record<string, never>
  | { message: string; id: string; code: string };

type BulkRequestJson = {
  POST: {
    request: {
      requests: Request[];
    };
    response: { results: SuccessResult[] } | { results: FailureResult[] };
  };
};

// App
type AppJson = {
  GET: {
    request: {
      id: string | number;
    };
    response: {
      appId: string;
      code: string;
      name: string;
      description: string;
      spaceId: string | null;
      threadId: string | null;
      createdAt: string;
      creator: {
        code: string;
        name: string;
      };
      modifiedAt: string;
      modifier: {
        code: string;
        name: string;
      };
    };
  };
};

type AppsJson = {
  GET: {
    request: {
      ids?: Array<string | number>;
      codes?: string[];
      name?: string;
      spaceIds?: Array<string | number>;
      limit?: string | number;
      offset?: string | number;
    };
    response: {
      apps: Array<{
        appId: string;
        code: string;
        name: string;
        description: string;
        spaceId: string | null;
        threadId: string | null;
        createdAt: string;
        creator: {
          code: string;
          name: string;
        };
        modifiedAt: string;
        modifier: {
          code: string;
          name: string;
        };
      }>;
    };
  };
};

type PreviewAppJson = {
  POST: {
    request:
      | { name: string }
      | { name: string; space: string | number; thread: string | number };
    response: { app: string; revision: string };
  };
};

// Deploy
type PreviewAppDeployJson = {
  GET: {
    request: { apps: Array<string | number> };
    response: {
      apps: Array<{
        app: string;
        status: "PROCESSING" | "SUCCESS" | "FAIL" | "CANCEL";
      }>;
    };
  };
  POST: {
    request: {
      apps: Array<{
        app: string | number;
        revision?: string | number;
      }>;
      revert?: boolean;
    };
    response: Record<string, never>;
  };
};

// Form Fields
type AppFormFieldsJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      properties: KintoneFormProperty["get"];
      revision: string;
    };
  };
};

type PreviewAppFormFieldsJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      properties: KintoneFormProperty["get"];
      revision: string;
    };
  };
  POST: {
    request: {
      app: string | number;
      properties: KintoneFormProperty["add"];
      revision?: string | number;
    };
    response: { revision: string };
  };
  PUT: {
    request: {
      app: string | number;
      properties: KintoneFormProperty["update"];
      revision?: string | number;
    };
    response: { revision: string };
  };
  DELETE: {
    request: {
      app: string | number;
      fields: string[];
      revision?: string | number;
    };
    response: { revision?: string };
  };
};

// Form Layout
type AppFormLayoutJson = {
  GET: {
    request: { app: string | number };
    response: {
      layout: KintoneFormLayout["get"];
      revision: string;
    };
  };
};

type PreviewAppFormLayoutJson = {
  GET: {
    request: {
      app: string | number;
    };
    response: {
      layout: KintoneFormLayout["get"];
      revision: string;
    };
  };
  PUT: {
    request: {
      app: string | number;
      layout: KintoneFormLayout["update"];
      revision?: string | number;
    };
    response: { revision: string };
  };
};

// Views
type AppViewsJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      views: {
        [viewName: string]:
          | {
              name: string;
              id: string;
              index: string;
              filterCond: string;
              sort: string;
            } & (
              | {
                  type: "LIST";
                  builtinType: "ASSIGNEE" | undefined;
                  fields: string[];
                }
              | { type: "CALENDAR"; date: string; title: string }
              | {
                  type: "CUSTOM";
                  html: string;
                  pager: boolean;
                  device: "DESKTOP" | "ANY";
                }
            );
      };
      revision: string;
    };
  };
};

type PreviewAppViewsJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      views: {
        [viewName: string]:
          | {
              name: string;
              id: string;
              index: string;
              filterCond: string;
              sort: string;
            } & (
              | {
                  type: "LIST";
                  builtinType: "ASSIGNEE" | undefined;
                  fields: string[];
                }
              | { type: "CALENDAR"; date: string; title: string }
              | {
                  type: "CUSTOM";
                  html: string;
                  pager: boolean;
                  device: "DESKTOP" | "ANY";
                }
            );
      };
      revision: string;
    };
  };
  PUT: {
    request: {
      app: string | number;
      views: {
        [viewName: string]: {
          name?: string;
          id: string;
          index: string;
          filterCond?: string;
          sort?: string;
        } & (
          | {
              type: "LIST";
              fields?: string[];
            }
          | { type: "CALENDAR"; date?: string; title?: string }
          | {
              type: "CUSTOM";
              html?: string;
              pager?: boolean;
              device?: "DESKTOP" | "ANY";
            }
        );
      };
      revision?: string | number;
    };
    response: {
      revision: string;
      views: { [viewName: string]: { id: string } };
    };
  };
};

// Graph Settings
type AppReportsJson = {
  GET: {
    request: {
      app: string;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      reports: {
        [reportName: string]:
          | (
              | {
                  chartType: "BAR" | "COLUMN" | "AREA" | "SPLINE_AREA";
                  chartMode: "NORMAL" | "STACKED" | "PERCENTAGE";
                }
              | {
                  chartType:
                    | "PIE"
                    | "LINE"
                    | "PIVOT_TABLE"
                    | "TABLE"
                    | "SPLINE";
                }
            ) & {
              id: string;
              name: string;
              index: string;
              groups: Array<{
                code: string;
                per:
                  | "YEAR"
                  | "QUARTER"
                  | "MONTH"
                  | "WEEK"
                  | "DAY"
                  | "HOUR"
                  | "MINUTE"
                  | undefined;
              }>;
              aggregations: Array<
                | { type: "SUM" | "AVERAGE" | "MAX" | "MIN"; code: string }
                | { type: "COUNT" }
              >;
              filterCond: string;
              sorts: Array<{
                by: "TOTAL" | "GROUP1" | "GROUP2" | "GROUP3";
                order: "ASC" | "DESC";
              }>;
              periodicReport: {
                active: boolean;
                period:
                  | {
                      every: "YEAR";
                      month: string;
                      time: string;
                      dayOfMonth: string;
                    }
                  | {
                      every: "QUARTER";
                      time: string;
                      pattern:
                        | "JAN_APR_JUL_OCT"
                        | "FEB_MAY_AUG_NOV"
                        | "MAR_JUN_SEP_DEC";
                      dayOfMonth: string;
                    }
                  | { every: "MONTH"; time: string; dayOfMonth: string }
                  | {
                      every: "WEEK";
                      time: string;
                      dayOfWeek:
                        | "SUNDAY"
                        | "MONDAY"
                        | "TUESDAY"
                        | "WEDNESDAY"
                        | "THURSDAY"
                        | "FRIDAY"
                        | "SATURDAY";
                    }
                  | { every: "DAY"; time: string }
                  | {
                      every: "HOUR";
                      minute: "0" | "10" | "20" | "30" | "40" | "50";
                    };
              } | null;
            };
      };
      revision: string;
    };
  };
};

type PreviewAppReportsJson = {
  GET: {
    request: {
      app: string;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      reports: {
        [reportName: string]:
          | (
              | {
                  chartType: "BAR" | "COLUMN" | "AREA" | "SPLINE_AREA";
                  chartMode: "NORMAL" | "STACKED" | "PERCENTAGE";
                }
              | {
                  chartType:
                    | "PIE"
                    | "LINE"
                    | "PIVOT_TABLE"
                    | "TABLE"
                    | "SPLINE";
                }
            ) & {
              id: string;
              name: string;
              index: string;
              groups: Array<{
                code: string;
                per:
                  | "YEAR"
                  | "QUARTER"
                  | "MONTH"
                  | "WEEK"
                  | "DAY"
                  | "HOUR"
                  | "MINUTE"
                  | undefined;
              }>;
              aggregations: Array<
                | { type: "SUM" | "AVERAGE" | "MAX" | "MIN"; code: string }
                | { type: "COUNT" }
              >;
              filterCond: string;
              sorts: Array<{
                by: "TOTAL" | "GROUP1" | "GROUP2" | "GROUP3";
                order: "ASC" | "DESC";
              }>;
              periodicReport: {
                active: boolean;
                period:
                  | {
                      every: "YEAR";
                      month: string;
                      time: string;
                      dayOfMonth: string;
                    }
                  | {
                      every: "QUARTER";
                      time: string;
                      pattern:
                        | "JAN_APR_JUL_OCT"
                        | "FEB_MAY_AUG_NOV"
                        | "MAR_JUN_SEP_DEC";
                      dayOfMonth: string;
                    }
                  | { every: "MONTH"; time: string; dayOfMonth: string }
                  | {
                      every: "WEEK";
                      time: string;
                      dayOfWeek:
                        | "SUNDAY"
                        | "MONDAY"
                        | "TUESDAY"
                        | "WEDNESDAY"
                        | "THURSDAY"
                        | "FRIDAY"
                        | "SATURDAY";
                    }
                  | { every: "DAY"; time: string }
                  | {
                      every: "HOUR";
                      minute: "0" | "10" | "20" | "30" | "40" | "50";
                    };
              } | null;
            };
      };
      revision: string;
    };
  };
  PUT: {
    request: {
      app: string | number;
      reports: {
        [reportName: string]: (
          | {
              chartType: "BAR" | "COLUMN" | "AREA" | "SPLINE_AREA";
              chartMode: "NORMAL" | "STACKED" | "PERCENTAGE";
            }
          | { chartType: "PIE" | "LINE" | "PIVOT_TABLE" | "TABLE" | "SPLINE" }
        ) & {
          name?: string;
          index: string | number;
          groups?: Array<{
            code: string;
            per?:
              | "YEAR"
              | "QUARTER"
              | "MONTH"
              | "WEEK"
              | "DAY"
              | "HOUR"
              | "MINUTE";
          }>;
          aggregations?: Array<
            | { type: "SUM" | "AVERAGE" | "MAX" | "MIN"; code: string }
            | { type: "COUNT" }
          >;
          filterCond?: string;
          sorts?: Array<{
            by: "TOTAL" | "GROUP1" | "GROUP2" | "GROUP3";
            order: "ASC" | "DESC";
          }>;
          periodicReport?: {
            active?: boolean;
            period?:
              | {
                  every: "YEAR";
                  month: string;
                  time: string;
                  dayOfMonth: string;
                }
              | {
                  every: "QUARTER";
                  time: string;
                  pattern:
                    | "JAN_APR_JUL_OCT"
                    | "FEB_MAY_AUG_NOV"
                    | "MAR_JUN_SEP_DEC";
                  dayOfMonth: string;
                }
              | { every: "MONTH"; time: string; dayOfMonth: string }
              | {
                  every: "WEEK";
                  time: string;
                  dayOfWeek:
                    | "SUNDAY"
                    | "MONDAY"
                    | "TUESDAY"
                    | "WEDNESDAY"
                    | "THURSDAY"
                    | "FRIDAY"
                    | "SATURDAY";
                }
              | { every: "DAY"; time: string }
              | {
                  every: "HOUR";
                  minute: "0" | "10" | "20" | "30" | "40" | "50";
                };
          } | null;
        };
      };
      revision?: string | number;
    };
    response: {
      revision: string;
      reports: { [reportName: string]: { id: string } };
    };
  };
};

// General Settings
type AppSettingsJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      name: string;
      description: string;
      icon:
        | {
            type: "FILE";
            file: {
              contentType: string;
              fileKey: string;
              name: string;
              size: string;
            };
          }
        | {
            type: "PRESET";
            key: string;
          };
      theme:
        | "WHITE"
        | "RED"
        | "BLUE"
        | "GREEN"
        | "YELLOW"
        | "BLACK"
        | "CLIPBOARD"
        | "BINDER"
        | "PENCIL"
        | "CLIPS";
      revision: string;
    };
  };
};

type PreviewAppSettingsJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      name: string;
      description: string;
      icon:
        | {
            type: "FILE";
            file: {
              contentType: string;
              fileKey: string;
              name: string;
              size: string;
            };
          }
        | {
            type: "PRESET";
            key: string;
          };
      theme:
        | "WHITE"
        | "RED"
        | "BLUE"
        | "GREEN"
        | "YELLOW"
        | "BLACK"
        | "CLIPBOARD"
        | "BINDER"
        | "PENCIL"
        | "CLIPS";
      revision: string;
    };
  };
  PUT: {
    request: {
      app: string | number;
      name?: string;
      description?: string;
      icon?:
        | {
            type: "FILE";
            file: {
              fileKey: string;
            };
          }
        | {
            type: "PRESET";
            key: string;
          };
      theme?:
        | "WHITE"
        | "RED"
        | "BLUE"
        | "GREEN"
        | "YELLOW"
        | "BLACK"
        | "CLIPBOARD"
        | "BINDER"
        | "PENCIL"
        | "CLIPS";
      revision?: string | number;
    };
    response: {
      revision: string;
    };
  };
};

// General Notifications
type AppNotificationsGeneralJson = {
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

type PreviewAppNotificationsGeneralJson = {
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

// Per Record Notifications
type AppNotificationsPerRecordJson = {
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

type PreviewAppNotificationsPerRecordJson = {
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

// Reminder Notifications
type AppNotificationsReminderJson = {
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

type PreviewAppNotificationsReminderJson = {
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

// Process Management
type AppStatusJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      enable: boolean;
      states: {
        [stateName: string]: {
          name: string;
          index: string;
          assignee: {
            type: "ONE" | "ALL" | "ANY";
            entities: Array<{
              entity:
                | {
                    type:
                      | "USER"
                      | "GROUP"
                      | "ORGANIZATION"
                      | "FIELD_ENTITY"
                      | "CUSTOM_FIELD";
                    code: string;
                  }
                | { type: "CREATOR"; code: null };
              includeSubs: boolean;
            }>;
          };
        };
      } | null;
      actions: Array<{
        name: string;
        from: string;
        to: string;
        filterCond: string;
      }>;
      revision: string;
    };
  };
};

type PreviewAppStatusJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      enable: boolean;
      states: {
        [stateName: string]:
          | {
              name: string;
              index: string;
              assignee: {
                type: "ONE" | "ALL" | "ANY";
                entities: Array<{
                  entity:
                    | {
                        type:
                          | "USER"
                          | "GROUP"
                          | "ORGANIZATION"
                          | "FIELD_ENTITY"
                          | "CUSTOM_FIELD";
                        code: string;
                      }
                    | { type: "CREATOR"; code: null };
                  includeSubs: boolean;
                }>;
              };
            }
          | undefined;
      } | null;
      actions: Array<{
        name: string;
        from: string;
        to: string;
        filterCond: string;
      }>;
      revision: string;
    };
  };
  PUT: {
    request: {
      app: string | number;
      enable?: boolean;
      states?: {
        [stateName: string]: {
          name?: string;
          index: string;
          assignee?: {
            type: "ONE" | "ALL" | "ANY";
            entities: Array<{
              entity:
                | {
                    type:
                      | "USER"
                      | "GROUP"
                      | "ORGANIZATION"
                      | "FIELD_ENTITY"
                      | "CUSTOM_FIELD";
                    code: string;
                  }
                | { type: "CREATOR" };
              includeSubs?: boolean;
            }>;
          };
        };
      };
      actions?: Array<{
        name: string;
        from: string;
        to: string;
        filterCond?: string;
      }>;
      revision?: string | number;
    };
    response: { revision: string };
  };
};

// Action Settings
type AppActionsJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      actions: {
        [actionName: string]: {
          name: string;
          id: string;
          index: string;
          destApp: { app: string; code: string };
          mapping: Array<
            | { srcType: "FIELD"; srcField: string; destField: string }
            | { srcType: "RECORD_URL"; destField: string }
          >;
          entities: Array<{
            type: "USER" | "GROUP" | "ORGANIZATION";
            code: string;
          }>;
        };
      };
      revision: string;
    };
  };
};

type PreviewAppActionsJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      actions: {
        [actionName: string]: {
          name: string;
          id: string;
          index: string;
          destApp: { app: string; code: string };
          mapping: Array<
            | { srcType: "FIELD"; srcField: string; destField: string }
            | { srcType: "RECORD_URL"; destField: string }
          >;
          entities: Array<{
            type: "USER" | "GROUP" | "ORGANIZATION";
            code: string;
          }>;
        };
      };
      revision: string;
    };
  };
  PUT: {
    request: {
      app: string | number;
      actions: {
        [actionName: string]: {
          name?: string;
          index: string;
          destApp?: { app?: string; code?: string };
          mapping?: Array<
            | { srcType: "FIELD"; srcField: string; destField: string }
            | { srcType: "RECORD_URL"; destField: string }
          >;
          entities?: Array<{
            type: "USER" | "GROUP" | "ORGANIZATION";
            code: string;
          }>;
        };
      };
      revision?: string | number;
    };
    response: {
      actions: { [actionName: string]: { id: string } };
      revision: string;
    };
  };
};

// Customization
type AppCustomizeJson = {
  GET: {
    request: { app: string | number };
    response: {
      scope: "ALL" | "ADMIN" | "NONE";
      desktop: {
        js: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
        css: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
      };
      mobile: {
        js: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
        css: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
      };
      revision: string;
    };
  };
};

type PreviewAppCustomizeJson = {
  GET: {
    request: { app: string | number };
    response: {
      scope: "ALL" | "ADMIN" | "NONE";
      desktop: {
        js: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
        css: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
      };
      mobile: {
        js: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
        css: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                contentType: string;
                fileKey: string;
                name: string;
                size: string;
              };
            }
        >;
      };
      revision: string;
    };
  };
  PUT: {
    request: {
      app: string | number;
      scope?: "ALL" | "ADMIN" | "NONE";
      desktop?: {
        js?: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                fileKey: string;
              };
            }
        >;
        css?: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                fileKey: string;
              };
            }
        >;
      };
      mobile?: {
        js?: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                fileKey: string;
              };
            }
        >;
        css?: Array<
          | {
              type: "URL";
              url: string;
            }
          | {
              type: "FILE";
              file: {
                fileKey: string;
              };
            }
        >;
      };
      revision?: string | number;
    };
    response: {
      revision: string;
    };
  };
};

// App Permissions
type AppAclJson = {
  GET: {
    request: { app: string | number };
    response: {
      rights: Array<
        {
          appEditable: boolean;
          recordViewable: boolean;
          recordAddable: boolean;
          recordEditable: boolean;
          recordDeletable: boolean;
          recordImportable: boolean;
          recordExportable: boolean;
          includeSubs: boolean;
        } & (
          | {
              entity: {
                type: "USER" | "GROUP" | "ORGANIZATION";
                code: string;
              };
            }
          | {
              entity: {
                type: "CREATOR";
                code: null;
              };
            }
        )
      >;
      revision: string;
    };
  };
};

type PreviewAppAclJson = {
  GET: {
    request: { app: string | number };
    response: {
      rights: Array<
        {
          appEditable: boolean;
          recordViewable: boolean;
          recordAddable: boolean;
          recordEditable: boolean;
          recordDeletable: boolean;
          recordImportable: boolean;
          recordExportable: boolean;
          includeSubs: boolean;
        } & (
          | {
              entity: {
                type: "USER" | "GROUP" | "ORGANIZATION";
                code: string;
              };
            }
          | {
              entity: {
                type: "CREATOR";
                code: null;
              };
            }
        )
      >;
      revision: string;
    };
  };
  PUT: {
    request: {
      app: string | number;
      revision?: string;
      rights: Array<
        {
          appEditable?: boolean;
          recordViewable?: boolean;
          recordAddable?: boolean;
          recordEditable?: boolean;
          recordDeletable?: boolean;
          recordImportable?: boolean;
          recordExportable?: boolean;
          includeSubs?: boolean;
        } & (
          | {
              entity: {
                type: "USER" | "GROUP" | "ORGANIZATION";
                code: string;
              };
            }
          | {
              entity: {
                type: "CREATOR";
              };
            }
        )
      >;
    };
    response: { revision: string };
  };
};

// Record Permissions
type RecordAclJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      rights: Array<{
        filterCond: string;
        entities: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          viewable: boolean;
          editable: boolean;
          deletable: boolean;
          includeSubs: boolean;
        }>;
      }>;
      revision: string;
    };
  };
};

type PreviewRecordAclJson = {
  GET: {
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      rights: Array<{
        filterCond: string;
        entities: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          viewable: boolean;
          editable: boolean;
          deletable: boolean;
          includeSubs: boolean;
        }>;
      }>;
      revision: string;
    };
  };
  PUT: {
    request: {
      app: string | number;
      rights: Array<{
        filterCond?: string;
        entities: Array<{
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          viewable?: boolean;
          editable?: boolean;
          deletable?: boolean;
          includeSubs?: boolean;
        }>;
      }>;
      revision?: string | number;
    };
    response: {
      revision: string;
    };
  };
};

type RecordAclEvaluateJson = {
  GET: {
    request: {
      app: string | number;
      ids: Array<string | number>;
    };
    response: {
      rights: Array<{
        id: string;
        record: {
          viewable: boolean;
          editable: boolean;
          deletable: boolean;
          fields: {
            [fieldCode: string]: { viewable: boolean; editable: boolean };
          };
        };
      }>;
    };
  };
};

// Field Permissions
type FieldAclJson = {
  GET: {
    request: { app: string | number };
    response: {
      rights: Array<{
        code: string;
        entities: Array<{
          accessibility: "READ" | "WRITE" | "NONE";
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

type PreviewFieldAclJson = {
  GET: {
    request: { app: string | number };
    response: {
      rights: Array<{
        code: string;
        entities: Array<{
          accessibility: "READ" | "WRITE" | "NONE";
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
      rights: Array<{
        code: string;
        entities: Array<{
          accessibility: "READ" | "WRITE" | "NONE";
          entity: {
            type: "USER" | "GROUP" | "ORGANIZATION" | "FIELD_ENTITY";
            code: string;
          };
          includeSubs?: boolean;
        }>;
      }>;
      revision?: string | number;
    };
    response: {
      revision: string;
    };
  };
};

// Space
type SpaceJson = {
  GET: {
    request: { id: string | number };
    response: {
      id: string;
      name: string;
      defaultThread: string;
      isPrivate: boolean;
      creator: {
        code: string;
        name: string;
      };
      modifier: {
        code: string;
        name: string;
      };
      memberCount: string;
      coverType: "BLOB" | "PRESET";
      coverKey: string;
      coverUrl: string;
      body: string;
      useMultiThread: boolean;
      isGuest: boolean;
      attachedApps: Array<{
        threadId: string;
        appId: string;
        code: string;
        name: string;
        description: string;
        createdAt: string;
        creator: {
          code: string;
          name: string;
        };
        modifiedAt: string;
        modifier: {
          code: string;
          name: string;
        };
      }>;
      fixedMember: boolean;
      showAnnouncement: boolean | null;
      showThreadList: boolean | null;
      showAppList: boolean | null;
      showMemberList: boolean | null;
      showRelatedLinkList: boolean | null;
    };
  };
  DELETE: { request: { id: string }; response: Record<string, never> };
};

type SpaceBodyJson = {
  PUT: {
    request: {
      id: string | number;
      body: string;
    };
    response: Record<string, never>;
  };
};

type TemplateSpaceJson = {
  POST: {
    request: {
      id: string | number;
      name: string;
      members: Array<
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin?: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin?: boolean;
            includeSubs?: boolean;
          }
      >;
      isPrivate?: boolean;
      isGuest?: boolean;
      fixedMember?: boolean;
    };
    response: { id: string };
  };
};

// Space Members
type SpaceMembersJson = {
  GET: {
    request: {
      id: string | number;
    };
    response: {
      members: Array<
        | {
            entity: {
              type: "USER";
              code: string;
            };
            isAdmin: boolean;
            isImplicit: boolean;
          }
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin: boolean;
            includeSubs: boolean;
          }
      >;
    };
  };
  PUT: {
    request: {
      id: string | number;
      members: Array<
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin?: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin?: boolean;
            includeSubs?: boolean;
          }
      >;
    };
    response: Record<string, never>;
  };
};

// Thread
type SpaceThreadJson = {
  PUT: {
    request: { id: string | number; name?: string; body?: string };
    response: Record<string, never>;
  };
};

type SpaceThreadCommentJson = {
  POST: {
    request: {
      space: string | number;
      thread: string | number;
      comment: {
        text?: string;
        mentions?: Array<{
          code: string;
          type: "USER" | "GROUP" | "ORGANIZATION";
        }>;
        files?: Array<{
          fileKey: string;
          width: string | number;
        }>;
      };
    };
    response: { id: string };
  };
};

// Guests
type GuestsJson = {
  POST: {
    request: {
      guests: Array<{
        code: string;
        password: string;
        timezone: string;
        locale?: "auto" | "ja" | "en" | "zh";
        image?: string;
        name: string;
        surNameReading?: string;
        givenNameReading?: string;
        company?: string;
        division?: string;
        phone?: string;
        callto?: string;
      }>;
    };
    response: Record<string, never>;
  };
  DELETE: {
    request: {
      guests: string[];
    };
    response: Record<string, never>;
  };
};

type SpaceGuestsJson = {
  PUT: {
    request: { id: string | number; guests: string[] };
    response: Record<string, never>;
  };
};

type SchemaMap = {
  record: RecordJson;
  records: RecordsJson;
  "records/cursor": RecordsCursorJson;
  "record/comment": RecordCommentJson;
  "record/comments": RecordCommentsJson;
  "record/assignees": RecordAssigneesJson;
  "record/status": RecordStatusJson;
  "records/status": RecordsStatusJson;
  bulkRequest: BulkRequestJson;
  app: AppJson;
  "preview/app": PreviewAppJson;
  "preview/app/deploy": PreviewAppDeployJson;
  apps: AppsJson;
  "app/form/fields": AppFormFieldsJson;
  "preview/app/form/fields": PreviewAppFormFieldsJson;
  "app/form/layout": AppFormLayoutJson;
  "preview/app/form/layout": PreviewAppFormLayoutJson;
  "app/views": AppViewsJson;
  "preview/app/views": PreviewAppViewsJson;
  "app/reports": AppReportsJson;
  "preview/app/reports": PreviewAppReportsJson;
  "app/settings": AppSettingsJson;
  "preview/app/settings": PreviewAppSettingsJson;
  "app/notifications/general": AppNotificationsGeneralJson;
  "preview/app/notifications/general": PreviewAppNotificationsGeneralJson;
  "app/notifications/perRecord": AppNotificationsPerRecordJson;
  "preview/app/notifications/perRecord": PreviewAppNotificationsPerRecordJson;
  "app/notifications/reminder": AppNotificationsReminderJson;
  "preview/app/notifications/reminder": PreviewAppNotificationsReminderJson;
  "app/status": AppStatusJson;
  "preview/app/status": PreviewAppStatusJson;
  "app/actions": AppActionsJson;
  "preview/app/actions": PreviewAppActionsJson;
  "app/customize": AppCustomizeJson;
  "preview/app/customize": PreviewAppCustomizeJson;
  "app/acl": AppAclJson;
  "preview/app/acl": PreviewAppAclJson;
  "record/acl": RecordAclJson;
  "preview/record/acl": PreviewRecordAclJson;
  "field/acl": FieldAclJson;
  "preview/field/acl": PreviewFieldAclJson;
  "record/acl/evaluate": RecordAclEvaluateJson;
  space: SpaceJson;
  "space/body": SpaceBodyJson;
  "space/members": SpaceMembersJson;
  "space/thread": SpaceThreadJson;
  "space/thread/comment": SpaceThreadCommentJson;
  "template/space": TemplateSpaceJson;
  guests: GuestsJson;
  "space/guests": SpaceGuestsJson;
};

export type {
  RecordJson,
  RecordsJson,
  RecordsCursorJson,
  RecordCommentJson,
  RecordCommentsJson,
  RecordAssigneesJson,
  RecordStatusJson,
  RecordsStatusJson,
  BulkRequestJson,
  AppJson,
  AppsJson,
  PreviewAppJson,
  PreviewAppDeployJson,
  AppFormFieldsJson,
  PreviewAppFormFieldsJson,
  AppFormLayoutJson,
  PreviewAppFormLayoutJson,
  AppViewsJson,
  PreviewAppViewsJson,
  AppReportsJson,
  PreviewAppReportsJson,
  AppSettingsJson,
  PreviewAppSettingsJson,
  AppNotificationsGeneralJson,
  PreviewAppNotificationsGeneralJson,
  AppNotificationsPerRecordJson,
  PreviewAppNotificationsPerRecordJson,
  AppNotificationsReminderJson,
  PreviewAppNotificationsReminderJson,
  AppStatusJson,
  PreviewAppStatusJson,
  AppActionsJson,
  PreviewAppActionsJson,
  AppCustomizeJson,
  PreviewAppCustomizeJson,
  AppAclJson,
  PreviewAppAclJson,
  RecordAclJson,
  PreviewRecordAclJson,
  RecordAclEvaluateJson,
  FieldAclJson,
  PreviewFieldAclJson,
  SpaceJson,
  SpaceBodyJson,
  TemplateSpaceJson,
  SpaceMembersJson,
  SpaceThreadJson,
  SpaceThreadCommentJson,
  GuestsJson,
  SpaceGuestsJson,
  SchemaMap,
};
