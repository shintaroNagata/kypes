import { Schema as FormApiSchema } from "./form";
import { Schema as ViewsApiSchema } from "./views";
import { Schema as ReportsApiSchema } from "./reports";
import { Schema as SettingsApiSchema } from "./settings";
import { Schema as NotificationsApiSchema } from "./notifications";
import { Schema as StatusApiSchema } from "./status";
import { Schema as ActionsApiSchema } from "./actions";
import { Schema as CustomizeApiSchema } from "./customize";
import { Schema as AclApiSchema } from "./acl";

type AppSchema = {
  GET: {
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
};
type AppsSchema = {
  GET: {
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
};
type PreviewAppSchema = {
  POST: {
    parameters:
      | { name: string }
      | { name: string; space: string | number; thread: string | number };
    response: { app: string; revision: string };
  };
};
type PreviewAppDeploySchema = {
  GET: {
    parameters: { apps: Array<string | number> };
    response: {
      apps: Array<{
        app: string;
        status: "PROCESSING" | "SUCCESS" | "FAIL" | "CANCEL";
      }>;
    };
  };
  POST: {
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

type Schema = {
  app: AppSchema;
  "preview/app": PreviewAppSchema;
  "preview/app/deploy": PreviewAppDeploySchema;
  apps: AppsSchema;
} & FormApiSchema &
  ViewsApiSchema &
  ReportsApiSchema &
  SettingsApiSchema &
  NotificationsApiSchema &
  StatusApiSchema &
  ActionsApiSchema &
  CustomizeApiSchema &
  AclApiSchema;

export { Schema };
