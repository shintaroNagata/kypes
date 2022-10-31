import type { Properties as AppEvent } from "./app";
import type { Properties as SpaceEvent } from "./space";
import type { Properties as PortalEvent } from "./portal";

type Properties = AppEvent & SpaceEvent & PortalEvent;

export type { Properties };
