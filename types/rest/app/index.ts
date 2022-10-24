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
      parameters: {
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
    GetApps: {
      method: "GET";
      endpoint: "apps";
      parameters: {
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
    PostPreviewApp: {
      method: "POST";
      endpoint: "preview/app";
      parameters:
        | { name: string }
        | { name: string; space: string | number; thread: string | number };
      response: { app: string; revision: string };
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
      parameters: { apps: Array<string | number> };
      response: {
        apps: Array<{
          app: string;
          status: "PROCESSING" | "SUCCESS" | "FAIL" | "CANCEL";
        }>;
      };
    };
    PostPreviewAppDeploy: {
      method: "POST";
      endpoint: "preview/app/deploy";
      parameters: {
        apps: Array<{
          app: string | number;
          revision?: string | number;
        }>;
        revert?: boolean;
      };
      response: Record<string, never>;
    };
  };

export { AppRestApiMap };
