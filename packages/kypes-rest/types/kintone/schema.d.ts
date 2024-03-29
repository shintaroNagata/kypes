import type { ApiSchema } from "../types";
import type {
  BuildRecord,
  BuildRecordForAdd,
  BuildRecordForUpdate,
} from "./record";
import type {
  KintoneFormProperty,
  KintoneFormPropertyForAdd,
  KintoneFormPropertyForUpdate,
  KintoneFormLayout,
  KintoneFormLayoutForUpdate,
  KintoneAppSchema,
} from "./form";

// Record
type RecordJson<AppSchema extends KintoneAppSchema = KintoneAppSchema> = {
  GET: {
    path: "/k/v1/record.json";
    method: "GET";
    request: { app: string | number; id: string | number };
    response: {
      record: BuildRecord<AppSchema>;
    };
  };
  POST: {
    path: "/k/v1/record.json";
    method: "POST";
    request: {
      app: string | number;
      record?: BuildRecordForAdd<AppSchema>;
    };
    response: {
      id: string;
      revision: string;
    };
  };
  PUT: {
    path: "/k/v1/record.json";
    method: "PUT";
    request:
      | {
          app: string | number;
          id: string | number;
          record?: BuildRecordForUpdate<AppSchema>;
          revision?: string | number;
        }
      | {
          app: string | number;
          updateKey: { field: string; value: string };
          record?: BuildRecordForUpdate<AppSchema>;
          revision?: string | number;
        };
    response: {
      id: string;
      revision: string;
    };
  };
};

type RecordsJson<AppSchema extends KintoneAppSchema = KintoneAppSchema> = {
  GET: {
    path: "/k/v1/records.json";
    method: "GET";
    request: {
      app: string | number;
      fields?: string[];
      query?: string;
      totalCount?: true;
    };
    response: {
      records: Array<BuildRecord<AppSchema>>;
      totalCount: string | null;
    };
  };
  POST: {
    path: "/k/v1/records.json";
    method: "POST";
    request: {
      app: string | number;
      records: Array<BuildRecordForAdd<AppSchema>>;
    };
    response: {
      ids: string[];
      revisions: string[];
    };
  };
  PUT: {
    path: "/k/v1/records.json";
    method: "PUT";
    request: {
      app: string | number;
      records: Array<
        | {
            id: string | number;
            record?: BuildRecordForUpdate<AppSchema>;
            revision?: string | number;
          }
        | {
            updateKey: { field: string; value: string };
            record?: BuildRecordForUpdate<AppSchema>;
            revision?: string | number;
          }
      >;
    };
    response: { records: Array<{ id: string; revision: string }> };
  };
  DELETE: {
    path: "/k/v1/records.json";
    method: "DELETE";
    request: {
      app: string | number;
      ids: Array<string | number>;
      revisions?: Array<string | number>;
    };
    response: Record<string, never>;
  };
};

// Cursor
type RecordsCursorJson<AppSchema extends KintoneAppSchema = KintoneAppSchema> =
  {
    GET: {
      path: "/k/v1/records/cursor.json";
      method: "GET";
      request: { id: string };
      response: {
        records: Array<BuildRecord<AppSchema>>;
        next: boolean;
      };
    };
    POST: {
      path: "/k/v1/records/cursor.json";
      method: "POST";
      request: {
        app: string | number;
        fields?: string[];
        query?: string;
        size?: string | number;
      };
      response: { id: string; totalCount: string };
    };
    DELETE: {
      path: "/k/v1/records/cursor.json";
      method: "DELETE";
      request: { id: string };
      response: Record<string, never>;
    };
  };

// Comments
type RecordCommentJson = {
  POST: {
    path: "/k/v1/record/comment.json";
    method: "POST";
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
    path: "/k/v1/record/comment.json";
    method: "DELETE";
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
    path: "/k/v1/record/comments.json";
    method: "GET";
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
    path: "/k/v1/record/assignees.json";
    method: "PUT";
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
    path: "/k/v1/record/status.json";
    method: "PUT";
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
    path: "/k/v1/records/status.json";
    method: "PUT";
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
type BulkRequestSupported<AppSchema> = AppSchema extends KintoneAppSchema
  ? {
      "/k/v1/record.json": {
        POST: RecordJson<AppSchema>["POST"];
        PUT: RecordJson<AppSchema>["PUT"];
      };
      "/k/v1/records.json": {
        POST: RecordsJson<AppSchema>["POST"];
        PUT: RecordsJson<AppSchema>["PUT"];
        DELETE: RecordsJson<AppSchema>["DELETE"];
      };
      "/k/v1/record/assignees.json": RecordAssigneesJson;
      "/k/v1/record/status.json": RecordStatusJson;
      "/k/v1/records/status.json": RecordsStatusJson;
    }
  : never;

type BulkRequestSupportedPaths = keyof BulkRequestSupported<KintoneAppSchema>;
type KeyOfUnion<T> = T extends unknown ? keyof T : never;
type BulkRequestSupportedMethods = KeyOfUnion<
  BulkRequestSupported<KintoneAppSchema>[BulkRequestSupportedPaths]
>;

type BuildRequest<Path, Method, AppSchema> =
  Path extends BulkRequestSupportedPaths
    ? Method extends keyof BulkRequestSupported<AppSchema>[Path]
      ? {
          method: Method;
          api: Path;
          payload: Extract<
            BulkRequestSupported<AppSchema>[Path][Method],
            ApiSchema
          >["request"];
        }
      : never
    : never;
type Request<AppSchema> = BuildRequest<
  BulkRequestSupportedPaths,
  BulkRequestSupportedMethods,
  AppSchema
>;

type BuildSuccessResult<Path, Method, AppSchema> =
  Path extends BulkRequestSupportedPaths
    ? Method extends keyof BulkRequestSupported<AppSchema>[Path]
      ? Extract<
          BulkRequestSupported<AppSchema>[Path][Method],
          ApiSchema
        >["response"]
      : never
    : never;
type SuccessResult<AppSchema> = BuildSuccessResult<
  BulkRequestSupportedPaths,
  BulkRequestSupportedMethods,
  AppSchema
>;

type FailureResult =
  | Record<string, never>
  | { message: string; id: string; code: string };

type BulkRequestJson<AppSchema extends KintoneAppSchema = KintoneAppSchema> = {
  POST: {
    path: "/k/v1/bulkRequest.json";
    method: "POST";
    request: {
      requests: Array<Request<AppSchema>>;
    };
    response:
      | { results: Array<SuccessResult<AppSchema>> }
      | { results: FailureResult[] };
  };
};

// App
type AppJson = {
  GET: {
    path: "/k/v1/app.json";
    method: "GET";
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
    path: "/k/v1/apps.json";
    method: "GET";
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
    path: "/k/v1/preview/app.json";
    method: "POST";
    request:
      | { name: string }
      | { name: string; space: string | number; thread: string | number };
    response: { app: string; revision: string };
  };
};

// Deploy
type PreviewAppDeployJson = {
  GET: {
    path: "/k/v1/preview/app/deploy.json";
    method: "GET";
    request: { apps: Array<string | number> };
    response: {
      apps: Array<{
        app: string;
        status: "PROCESSING" | "SUCCESS" | "FAIL" | "CANCEL";
      }>;
    };
  };
  POST: {
    path: "/k/v1/preview/app/deploy.json";
    method: "POST";
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
    path: "/k/v1/app/form/fields.json";
    method: "GET";
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      properties: KintoneFormProperty;
      revision: string;
    };
  };
};

type PreviewAppFormFieldsJson = {
  GET: {
    path: "/k/v1/preview/app/form/fields.json";
    method: "GET";
    request: {
      app: string | number;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    response: {
      properties: KintoneFormProperty;
      revision: string;
    };
  };
  POST: {
    path: "/k/v1/preview/app/form/fields.json";
    method: "POST";
    request: {
      app: string | number;
      properties: KintoneFormPropertyForAdd;
      revision?: string | number;
    };
    response: { revision: string };
  };
  PUT: {
    path: "/k/v1/preview/app/form/fields.json";
    method: "PUT";
    request: {
      app: string | number;
      properties: KintoneFormPropertyForUpdate;
      revision?: string | number;
    };
    response: { revision: string };
  };
  DELETE: {
    path: "/k/v1/preview/app/form/fields.json";
    method: "DELETE";
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
    path: "/k/v1/app/form/layout.json";
    method: "GET";
    request: { app: string | number };
    response: {
      layout: KintoneFormLayout;
      revision: string;
    };
  };
};

type PreviewAppFormLayoutJson = {
  GET: {
    path: "/k/v1/preview/app/form/layout.json";
    method: "GET";
    request: {
      app: string | number;
    };
    response: {
      layout: KintoneFormLayout;
      revision: string;
    };
  };
  PUT: {
    path: "/k/v1/preview/app/form/layout.json";
    method: "PUT";
    request: {
      app: string | number;
      layout: KintoneFormLayoutForUpdate;
      revision?: string | number;
    };
    response: { revision: string };
  };
};

// Views
type AppViewsJson = {
  GET: {
    path: "/k/v1/app/views.json";
    method: "GET";
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
    path: "/k/v1/preview/app/views.json";
    method: "GET";
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
    path: "/k/v1/preview/app/views.json";
    method: "PUT";
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
    path: "/k/v1/app/reports.json";
    method: "GET";
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
    path: "/k/v1/preview/app/reports.json";
    method: "GET";
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
    path: "/k/v1/preview/app/reports.json";
    method: "PUT";
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
    path: "/k/v1/app/settings.json";
    method: "GET";
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
    path: "/k/v1/preview/app/settings.json";
    method: "GET";
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
    path: "/k/v1/preview/app/settings.json";
    method: "PUT";
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
    path: "/k/v1/app/notifications/general.json";
    method: "GET";
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
    path: "/k/v1/preview/app/notifications/general.json";
    method: "GET";
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
    path: "/k/v1/preview/app/notifications/general.json";
    method: "PUT";
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
    path: "/k/v1/app/notifications/perRecord.json";
    method: "GET";
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
    path: "/k/v1/preview/app/notifications/perRecord.json";
    method: "GET";
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
    path: "/k/v1/preview/app/notifications/perRecord.json";
    method: "PUT";
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
    path: "/k/v1/app/notifications/reminder.json";
    method: "GET";
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
    path: "/k/v1/preview/app/notifications/reminder.json";
    method: "GET";
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
    path: "/k/v1/preview/app/notifications/reminder.json";
    method: "PUT";
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
    path: "/k/v1/app/status.json";
    method: "GET";
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
    path: "/k/v1/preview/app/status.json";
    method: "GET";
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
    path: "/k/v1/preview/app/status.json";
    method: "PUT";
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
    path: "/k/v1/app/actions.json";
    method: "GET";
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
    path: "/k/v1/preview/app/actions.json";
    method: "GET";
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
    path: "/k/v1/preview/app/actions.json";
    method: "PUT";
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
    path: "/k/v1/app/customize.json";
    method: "GET";
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
    path: "/k/v1/preview/app/customize.json";
    method: "GET";
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
    path: "/k/v1/preview/app/customize.json";
    method: "PUT";
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
    path: "/k/v1/app/acl.json";
    method: "GET";
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
    path: "/k/v1/preview/app/acl.json";
    method: "GET";
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
    path: "/k/v1/preview/app/acl.json";
    method: "PUT";
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
    path: "/k/v1/record/acl.json";
    method: "GET";
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
    path: "/k/v1/preview/record/acl.json";
    method: "GET";
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
    path: "/k/v1/preview/record/acl.json";
    method: "PUT";
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

type RecordsAclEvaluateJson = {
  GET: {
    path: "/k/v1/records/acl/evaluate.json";
    method: "GET";
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
    path: "/k/v1/field/acl.json";
    method: "GET";
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
    path: "/k/v1/preview/field/acl.json";
    method: "GET";
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
    path: "/k/v1/preview/field/acl.json";
    method: "PUT";
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
    path: "/k/v1/space.json";
    method: "GET";
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
  DELETE: {
    path: "/k/v1/space.json";
    method: "DELETE";
    request: { id: string };
    response: Record<string, never>;
  };
};

type SpaceBodyJson = {
  PUT: {
    path: "/k/v1/space/body.json";
    method: "PUT";
    request: {
      id: string | number;
      body: string;
    };
    response: Record<string, never>;
  };
};

type TemplateSpaceJson = {
  POST: {
    path: "/k/v1/template/space.json";
    method: "POST";
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
    path: "/k/v1/space/members.json";
    method: "GET";
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
    path: "/k/v1/space/members.json";
    method: "PUT";
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
    path: "/k/v1/space/thread.json";
    method: "PUT";
    request: { id: string | number; name?: string; body?: string };
    response: Record<string, never>;
  };
};

type SpaceThreadCommentJson = {
  POST: {
    path: "/k/v1/space/thread/comment.json";
    method: "POST";
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
    path: "/k/v1/guests.json";
    method: "POST";
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
    path: "/k/v1/guests.json";
    method: "DELETE";
    request: {
      guests: string[];
    };
    response: Record<string, never>;
  };
};

type SpaceGuestsJson = {
  PUT: {
    path: "/k/v1/space/guests.json";
    method: "PUT";
    request: { id: string | number; guests: string[] };
    response: Record<string, never>;
  };
};

type SchemaMap<AppSchema extends KintoneAppSchema = KintoneAppSchema> = {
  "/k/v1/record.json": RecordJson<AppSchema>;
  "/k/v1/records.json": RecordsJson<AppSchema>;
  "/k/v1/records/cursor.json": RecordsCursorJson<AppSchema>;
  "/k/v1/record/comment.json": RecordCommentJson;
  "/k/v1/record/comments.json": RecordCommentsJson;
  "/k/v1/record/assignees.json": RecordAssigneesJson;
  "/k/v1/record/status.json": RecordStatusJson;
  "/k/v1/records/status.json": RecordsStatusJson;
  "/k/v1/bulkRequest.json": BulkRequestJson<AppSchema>;
  "/k/v1/app.json": AppJson;
  "/k/v1/preview/app.json": PreviewAppJson;
  "/k/v1/preview/app/deploy.json": PreviewAppDeployJson;
  "/k/v1/apps.json": AppsJson;
  "/k/v1/app/form/fields.json": AppFormFieldsJson;
  "/k/v1/preview/app/form/fields.json": PreviewAppFormFieldsJson;
  "/k/v1/app/form/layout.json": AppFormLayoutJson;
  "/k/v1/preview/app/form/layout.json": PreviewAppFormLayoutJson;
  "/k/v1/app/views.json": AppViewsJson;
  "/k/v1/preview/app/views.json": PreviewAppViewsJson;
  "/k/v1/app/reports.json": AppReportsJson;
  "/k/v1/preview/app/reports.json": PreviewAppReportsJson;
  "/k/v1/app/settings.json": AppSettingsJson;
  "/k/v1/preview/app/settings.json": PreviewAppSettingsJson;
  "/k/v1/app/notifications/general.json": AppNotificationsGeneralJson;
  "/k/v1/preview/app/notifications/general.json": PreviewAppNotificationsGeneralJson;
  "/k/v1/app/notifications/perRecord.json": AppNotificationsPerRecordJson;
  "/k/v1/preview/app/notifications/perRecord.json": PreviewAppNotificationsPerRecordJson;
  "/k/v1/app/notifications/reminder.json": AppNotificationsReminderJson;
  "/k/v1/preview/app/notifications/reminder.json": PreviewAppNotificationsReminderJson;
  "/k/v1/app/status.json": AppStatusJson;
  "/k/v1/preview/app/status.json": PreviewAppStatusJson;
  "/k/v1/app/actions.json": AppActionsJson;
  "/k/v1/preview/app/actions.json": PreviewAppActionsJson;
  "/k/v1/app/customize.json": AppCustomizeJson;
  "/k/v1/preview/app/customize.json": PreviewAppCustomizeJson;
  "/k/v1/app/acl.json": AppAclJson;
  "/k/v1/preview/app/acl.json": PreviewAppAclJson;
  "/k/v1/record/acl.json": RecordAclJson;
  "/k/v1/preview/record/acl.json": PreviewRecordAclJson;
  "/k/v1/field/acl.json": FieldAclJson;
  "/k/v1/preview/field/acl.json": PreviewFieldAclJson;
  "/k/v1/records/acl/evaluate.json": RecordsAclEvaluateJson;
  "/k/v1/space.json": SpaceJson;
  "/k/v1/space/body.json": SpaceBodyJson;
  "/k/v1/space/members.json": SpaceMembersJson;
  "/k/v1/space/thread.json": SpaceThreadJson;
  "/k/v1/space/thread/comment.json": SpaceThreadCommentJson;
  "/k/v1/template/space.json": TemplateSpaceJson;
  "/k/v1/guests.json": GuestsJson;
  "/k/v1/space/guests.json": SpaceGuestsJson;
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
  RecordsAclEvaluateJson,
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
