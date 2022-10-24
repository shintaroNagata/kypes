type Methods = "GET" | "POST" | "PUT" | "DELETE";
type Domain = "cybozu.com" | "kintone.com" | "cybozu.cn";
type Endpoints =
  | "record"
  | "records"
  | "records/cursor"
  | "record/comment"
  | "record/comments"
  | "record/assignees"
  | "record/status"
  | "records/status"
  | "bulkRequest";
// | "app"
// | "preview/app"
// | "preview/app/deploy"
// | "apps"
// | "app/form/fields"
// | "preview/app/form/fields"
// | "app/form/layout"
// | "preview/app/form/layout"
// | "app/views"
// | "preview/app/views"
// | "app/reports"
// | "preview/app/reports"
// | "app/settings"
// | "preview/app/settings"
// | "app/notifications/general"
// | "preview/app/notifications/general"
// | "app/notifications/perRecord"
// | "preview/app/notifications/perRecord"
// | "app/notifications/reminder"
// | "preview/app/notifications/reminder"
// | "app/status"
// | "preview/app/status"
// | "app/actions"
// | "preview/app/actions"
// | "app/acl"
// | "preview/app/acl"
// | "record/acl"
// | "preview/record/acl"
// | "field/acl"
// | "preview/field/acl"
// | "record/acl/evaluate"
// | "app/customize"
// | "preview/app/customize"
// | "space"
// | "space/body"
// | "space/members"
// | "space/thread"
// | "space/thread/comment"
// | "template/space"
// | "guests"
// | "space/guests";

type PathFor<Endpoint extends string> = `/k/v1/${Endpoint}.json`;
type UrlFor<Endpoint extends string> =
  | `https://${string}.${Domain}/k/v1/${Endpoint}.json`
  | `https://${string}.${Domain}/k/guest/${number}/v1/${Endpoint}.json`;
type WithQuery<Url extends string> = `${Url}?${string}`;

type EndpointOf<PathOrUrl extends string> = PathOrUrl extends PathFor<
  infer Endpoint
>
  ? Endpoint
  : PathOrUrl extends UrlFor<infer Endpoint>
  ? Endpoint
  : PathOrUrl extends WithQuery<UrlFor<infer Endpoint>>
  ? Endpoint
  : string;

export { Methods, PathFor, UrlFor, WithQuery, EndpointOf, Endpoints };
