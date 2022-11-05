type Endpoints =
  | "record"
  | "records"
  | "records/cursor"
  | "record/comment"
  | "record/comments"
  | "record/assignees"
  | "record/status"
  | "records/status"
  | "bulkRequest"
  | "app"
  | "preview/app"
  | "preview/app/deploy"
  | "apps"
  | "app/form/fields"
  | "preview/app/form/fields"
  | "app/form/layout"
  | "preview/app/form/layout"
  | "app/views"
  | "preview/app/views"
  | "app/reports"
  | "preview/app/reports"
  | "app/settings"
  | "preview/app/settings"
  | "app/notifications/general"
  | "preview/app/notifications/general"
  | "app/notifications/perRecord"
  | "preview/app/notifications/perRecord"
  | "app/notifications/reminder"
  | "preview/app/notifications/reminder"
  | "app/status"
  | "preview/app/status"
  | "app/actions"
  | "preview/app/actions"
  | "app/customize"
  | "preview/app/customize"
  | "app/acl"
  | "preview/app/acl"
  | "record/acl"
  | "preview/record/acl"
  | "field/acl"
  | "preview/field/acl"
  | "record/acl/evaluate"
  | "space"
  | "space/body"
  | "space/members"
  | "space/thread"
  | "space/thread/comment"
  | "template/space"
  | "guests"
  | "space/guests";

type Methods = "GET" | "PUT" | "POST" | "DELETE";
type Domains = "cybozu.com" | "kintone.com" | "cybozu.cn";

type PathFor<Endpoint> = Endpoint extends string
  ? `/k/v1/${Endpoint}.json`
  : never;
type UrlFor<Endpoint> = Endpoint extends string
  ?
      | `https://${string}.${Domains}/k/v1/${Endpoint}.json`
      | `https://${string}.${Domains}/k/guest/${number}/v1/${Endpoint}.json`
  : never;
type WithQuery<Url> = Url extends string ? `${Url}?${string}` : never;

export type { Methods, Endpoints, PathFor, UrlFor, WithQuery };
