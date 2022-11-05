import type { Schema as FormApiSchema } from "./form";
import type { Schema as ViewsApiSchema } from "./views";
import type { Schema as ReportsApiSchema } from "./reports";
import type { Schema as SettingsApiSchema } from "./settings";
import type { Schema as NotificationsApiSchema } from "./notifications";
import type { Schema as StatusApiSchema } from "./status";
import type { Schema as ActionsApiSchema } from "./actions";
import type { Schema as CustomizeApiSchema } from "./customize";
import type { Schema as AclApiSchema } from "./acl";

type AppSchema = {
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
type AppsSchema = {
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
type PreviewAppSchema = {
  POST: {
    request:
      | { name: string }
      | { name: string; space: string | number; thread: string | number };
    response: { app: string; revision: string };
  };
};
type PreviewAppDeploySchema = {
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

export type { Schema };
