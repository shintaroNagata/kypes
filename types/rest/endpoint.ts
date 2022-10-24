import { FindApi, FindEndpoint } from "./schema";

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

type EnableMethods<Endpoint extends Endpoints> = keyof FindEndpoint<Endpoint>;

type Parameters<
  Endpoint extends Endpoints,
  Method extends EnableMethods<Endpoint>
> = FindApi<Endpoint, Method>["parameters"];

type Response<
  Endpoint extends Endpoints,
  Method extends EnableMethods<Endpoint>
> = FindApi<Endpoint, Method>["response"];

export { Parameters, Response, EnableMethods, Endpoints };
