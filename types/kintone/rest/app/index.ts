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
      requestParameters: {
        id: string | number;
      };
      responseProperties: {
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
    GetApps: {
      method: "GET";
      endpoint: "apps";
      requestParameters: {
        ids?: (string | number)[];
        codes?: string[];
        name?: string;
        spaceIds?: (string | number)[];
        limit?: string | number;
        offset?: string | number;
      };
      responseProperties: {
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
    PostPreviewApp: {
      method: "POST";
      endpoint: "preview/app";
      requestParameters:
        | { name: string }
        | { name: string; space: string | number; thread: string | number };
      responseProperties: { app: string; revision: string };
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
      requestParameters: { apps: (string | number)[] };
      responseProperties: {
        apps: Array<{
          app: string;
          status: "PROCESSING" | "SUCCESS" | "FAIL" | "CANCEL";
        }>;
      };
    };
    PostPreviewAppDeploy: {
      method: "POST";
      endpoint: "preview/app/deploy";
      requestParameters: {
        apps: Array<{
          app: string | number;
          revision?: string | number;
        }>;
        revert: boolean;
      };
      responseProperties: {};
    };
  };

export { AppRestApiMap };
