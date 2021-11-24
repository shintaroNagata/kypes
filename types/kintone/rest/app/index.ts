import { FormRestApiMap } from "./form";
import { ViewsRestApiMap } from "./views";
import { SettingsRestApiMap } from "./settings";
import { StatusRestApiMap } from "./status";
import { CustomizeRestApiMap } from "./customize";
import { NotificationsRestApiMap } from "./notifications";
import { AclRestApiMap } from "./acl";
import { ReportsRestApiMap } from "./reports";
import { ActionsRestApiMap } from "./actions";

type AppRestApiMap = FormRestApiMap &
  ViewsRestApiMap & {
    GetApp: {
      method: "GET";
      endpoint: "app";
      requestParameters: any;
      responseProperties: any;
    };
    GetApps: {
      method: "GET";
      endpoint: "apps";
      requestParameters: any;
      responseProperties: any;
    };
    PostPreviewApp: {
      method: "POST";
      endpoint: "preview/app";
      requestParameters: any;
      responseProperties: any;
    };
  } & SettingsRestApiMap &
  StatusRestApiMap &
  CustomizeRestApiMap &
  NotificationsRestApiMap &
  AclRestApiMap &
  ReportsRestApiMap &
  ActionsRestApiMap & {
    GetPreviewAppDeploy: {
      method: "GET";
      endpoint: "preview/app/deploy";
      requestParameters: any;
      responseProperties: any;
    };
    PostPreviewAppDeploy: {
      method: "POST";
      endpoint: "preview/app/deploy";
      requestParameters: any;
      responseProperties: any;
    };
  };

export { AppRestApiMap };
