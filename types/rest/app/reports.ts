type ReportsRestApiMap = {
  GetAppReports: {
    method: "GET";
    endpoint: "app/reports";
    requestParameters: {
      app: string;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
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
  GetPreviewAppReports: {
    method: "GET";
    endpoint: "preview/app/reports";
    requestParameters: {
      app: string;
      lang?: "ja" | "en" | "zh" | "user" | "default";
    };
    responseProperties: {
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
  PutPreviewAppReports: {
    method: "PUT";
    endpoint: "preview/app/reports";
    requestParameters: {
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
    responseProperties: {
      revision: string;
      reports: { [reportName: string]: { id: string } };
    };
  };
};

export { ReportsRestApiMap };
